import * as _ from "lodash-es";

export class Capy {
  constructor(url = "") {
    this.url = url;
    this.client = null;
    this.adapter = null;
    this.isConnected = false;

    this.states = {};
    this.subscribes = {};
    this.lastValues = {};
  }
  use(connectFn) {
    this.adapter = connectFn;
  }
  connect(callback = null) {
    this.adapter(this.url, (client, error) => {
      if (error) throw new Error(error);
      this.client = client;
      this.isConnected = true;
      client.onDisconnect(() => {
        this.isConnected = false;
      });
      if (typeof callback === "function") {
        callback(this);
      }
    });
  }
  on(event, callback) {
    this.client.on(event, (client, data) => {
      callback(data);
    });
  }
  emit(event, data = null) {
    this.client.emit(event, data);
  }
  state(stateName, path = false) {
    if (!this.states[stateName]) return {};
    if (!path) return this.states[stateName];
    return _.get(this.states[stateName], path);
  }
  subscribe(stateName, callback) {
    if (!this.subscribes[stateName]) this.subscribes[stateName] = [];
    this.subscribes[stateName].push(callback);
    if (!this.states[stateName]) this.sync(stateName);
  }
  sync(stateName) {
    if (this.states[stateName]) return;
    console.log("resgister sync:" + stateName);
    this.emit(`sync:${stateName}:init`);
    this.states[stateName] = {};
    this.on(`sync:${stateName}:init`, (data) => {
      console.log(`sync:${stateName}:init`);
      this.states[stateName] = data;
    });
    this.on(`sync:${stateName}`, (datas) => {
      for (const data of datas) {
        _.set(this.states[stateName], data.path, data.value);
        // todo: validate array before iteration
        if (this.subscribes[stateName])
          for (const ev of this.subscribes[stateName]) {
            ev(data);
          }
      }
    });
  }
}

if(typeof window != "undefined"){
  window._ = _;
  window.Capy = Capy;
}
