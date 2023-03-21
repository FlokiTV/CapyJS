const resource = GetCurrentResourceName();
const root = GetResourcePath(resource);
const STORE = {}; //cache store
const STORE_SYNC = {}; //client sync callbacks list
const STORE_CALLBACKS = {}; //client listen callbacks list
const fs = require("fs");
const folderPath = root + "/.store";
/*
  ensure .store folder
*/
if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
    console.log("Folder created!");
} else {
    console.log("Folder already exists!");
}
/*
  functions
*/
const registerCallback = (name, path, callback) => {
    if (!STORE_CALLBACKS[name]) STORE_CALLBACKS[name] = [];
    STORE_CALLBACKS[name].push({
        path,
        callback,
    });
};
const registerSync = async (source, name, path) => {
    if (!STORE_SYNC[source]) STORE_SYNC[source] = {};
    if (!STORE_SYNC[source][name]) STORE_SYNC[source][name] = {};
    STORE_SYNC[source][name][path] = true;
};
const ensureStore = (name, path) => {
    let cache = false;
    if (!STORE[name]) {
        cache = true;
        STORE[name] = {};
    }
    if (typeof path == "string") {
        if (path != "*" && !STORE[name][path]) {
            cache = true;
            STORE[name][path] = {};
        }
    } else {
        cache = true;
        for (let i = 0; i < path.length; i++) {
            const _path = path[i];
            if (_path != "*" && !STORE[name][_path]) {
                STORE[name][_path] = {};
            }
        }
    }
    if (!STORE_CALLBACKS[name]) STORE_CALLBACKS[name] = [];
    return cache;
};
/*
  Client Sync
*/
$lib.onRequest("jsrp", "sync", async (source, args) => {
    let [name, path] = args;
    if (typeof path == "string") {
        registerSync(source, name, path);
    } else {
        for (let i = 0; i < path.length; i++) {
            const _path = path[i];
            registerSync(source, name, _path);
        }
    }
    let store = $lib.store(name, path, true);
    await store.onload();
    return store.get(path);
});
/*
  Store
*/
$lib.store = (name, path = "*", triggerNow = false) => {
    let ready = false;
    let recordFile = `${folderPath}/${name}.json`;
    let needCache = ensureStore(name, path);
    async function onload() {
        return new Promise((resolve) => {
            let check = setInterval(() => {
                if (ready) {
                    clearInterval(check);
                    resolve(true);
                }
            }, 500);
            // autocancel
            setTimeout(() => {
                resolve(false);
            }, 5000);
        });
    }
    function set(path, value = null, emit = true) {
        if (typeof path == "string" && value !== null) {
            if (emit) emitStore(path, value, STORE[name][path]);
            STORE[name][path] = value;
        } else {
            let _path = "*";
            let _value = path;
            if (emit) emitStore(_path, _value, STORE[name]);
            STORE[name] = _value;
        }
    }
    function get(path = "*") {
        return path == "*" ? STORE[name] : STORE[name][path];
    }
    function subscribe(path = "*", callback) {
        registerCallback(name, path, callback);
    }
    function emitStore(path, store = null, oldStore = null) {
        /*
          emit to all clients
        */
        const sources = Object.keys(STORE_SYNC);
        for (let i = 0; i < sources.length; i++) {
            const source = sources[i];
            const callbacks = STORE_SYNC[source];
            const storePaths = callbacks[name];
            for (const storePath in storePaths) {
                if (storePath === "*" || storePath === path) {
                    let _path = storePath === "*" ? "*" : path;
                    let _store =
                        storePath === "*" && storePath != path ? {
                            [path]: store
                        } : store;
                    emitNet("jsrp:store:onsync", source, name, _path, _store);
                }
            }
        }
        for (let i = 0; i < STORE_CALLBACKS[name].length; i++) {
            const cfg = STORE_CALLBACKS[name][i];
            if (cfg.path === path || cfg.path === "*") {
                if (cfg.path === "*" && cfg.path === path) {
                    cfg.callback(store, oldStore);
                } else if (cfg.path === "*" && cfg.path !== path) {
                    cfg.callback({
                        [path]: store
                    }, {
                        [path]: oldStore
                    });
                } else {
                    cfg.callback(store, oldStore);
                }
            }
        }
    }
    function save() {
        fs.writeFileSync(recordFile, JSON.stringify(STORE[name], null, 4), {
            encoding: "utf-8",
        });
    }
    /*
      init
    */
    if (needCache)
        try {
            let cache = null;
            cache = fs.readFileSync(recordFile, {
                encoding: "utf-8"
            });
            console.log("[store] " + name + ".json cache loaded");
            cache = JSON.parse(cache);
            set(cache, null);
        } catch (error) {
            console.log("[store] " + name + ".json cache not found");
            save();
        }
    if (triggerNow) {
        if (typeof path == "string") {
            emitStore(path, get(path));
        } else {
            for (let i = 0; i < path.length; i++) {
                const _path = path[i];
                emitStore(_path, get(_path));
            }
        }
    }
    ready = true;
    return {
        name,
        ready,
        onload,
        set,
        get,
        subscribe,
        save,
    };
};
