var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// node_modules/node-datachannel/lib/datachannel-stream.js
var require_datachannel_stream = __commonJS({
  "node_modules/node-datachannel/lib/datachannel-stream.js"(exports, module2) {
    var stream = require("stream");
    module2.exports = class DataChannelStream extends stream.Duplex {
      constructor(rawChannel, streamOptions) {
        super({
          allowHalfOpen: false,
          // Default to autoclose on end().
          ...streamOptions,
          objectMode: true
          // Preserve the string/buffer distinction (WebRTC treats them differently)
        });
        this._rawChannel = rawChannel;
        this._readActive = true;
        rawChannel.onMessage((msg) => {
          if (!this._readActive)
            return;
          this._readActive = this.push(msg);
        });
        rawChannel.onClosed(() => {
          this.push(null);
          this.destroy();
        });
        rawChannel.onError((errMsg) => {
          this.destroy(new Error(`DataChannel error: ${errMsg}`));
        });
        if (!rawChannel.isOpen()) {
          this.cork();
          rawChannel.onOpen(() => this.uncork());
        }
      }
      _read() {
        this._readActive = true;
      }
      _write(chunk, encoding, callback) {
        let sentOk;
        try {
          if (Buffer.isBuffer(chunk)) {
            sentOk = this._rawChannel.sendMessageBinary(chunk);
          } else if (typeof chunk === "string") {
            sentOk = this._rawChannel.sendMessage(chunk);
          } else {
            const typeName = chunk.constructor.name || typeof chunk;
            throw new Error(`Cannot write ${typeName} to DataChannel stream`);
          }
        } catch (err) {
          return callback(err);
        }
        if (sentOk) {
          callback(null);
        } else {
          callback(new Error("Failed to write to DataChannel"));
        }
      }
      _final(callback) {
        if (!this.allowHalfOpen)
          this.destroy();
        callback(null);
      }
      _destroy(maybeErr, callback) {
        this._rawChannel.close();
        callback(maybeErr);
      }
      get label() {
        return this._rawChannel.getLabel();
      }
      get id() {
        return this._rawChannel.getId();
      }
      get protocol() {
        return this._rawChannel.getProtocol();
      }
    };
  }
});

// node_modules/node-datachannel/lib/index.js
var require_lib = __commonJS({
  "node_modules/node-datachannel/lib/index.js"(exports, module2) {
    var nodeDataChannel = require("./node_datachannel-A5HM4XKM.node");
    module2.exports = nodeDataChannel;
    module2.exports.DataChannelStream = require_datachannel_stream();
  }
});

// node_modules/@yandeu/events/cjs/version.js
var require_version = __commonJS({
  "node_modules/@yandeu/events/cjs/version.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VERSION = void 0;
    exports.VERSION = "0.0.6";
  }
});

// node_modules/@yandeu/events/cjs/index.js
var require_cjs = __commonJS({
  "node_modules/@yandeu/events/cjs/index.js"(exports) {
    "use strict";
    var __spreadArray = exports && exports.__spreadArray || function(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar)
              ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Events = void 0;
    var version_1 = require_version();
    var EE = (
      /** @class */
      function() {
        function EE2(fn, context, once) {
          if (once === void 0) {
            once = false;
          }
          this.fn = fn;
          this.context = context;
          this.once = once;
        }
        return EE2;
      }()
    );
    var addListener = function(emitter, event, fn, context, once) {
      if (typeof fn !== "function") {
        throw new TypeError("The listener must be a function");
      }
      var listener = new EE(fn, context || emitter, once);
      if (!emitter._events.has(event))
        emitter._events.set(event, listener), emitter._eventsCount++;
      else if (!emitter._events.get(event).fn)
        emitter._events.get(event).push(listener);
      else
        emitter._events.set(event, [emitter._events.get(event), listener]);
      return emitter;
    };
    var clearEvent = function(emitter, event) {
      if (--emitter._eventsCount === 0)
        emitter._events = /* @__PURE__ */ new Map();
      else
        emitter._events.delete(event);
    };
    var Events3 = (
      /** @class */
      function() {
        function Events4() {
          this._events = /* @__PURE__ */ new Map();
          this._eventsCount = 0;
        }
        Object.defineProperty(Events4, "VERSION", {
          get: function() {
            return version_1.VERSION;
          },
          enumerable: false,
          configurable: true
        });
        Events4.prototype.eventNames = function() {
          return Array.from(this._events.keys());
        };
        Events4.prototype.listeners = function(event) {
          var handlers = this._events.get(event);
          if (!handlers)
            return [];
          if (handlers.fn)
            return [handlers.fn];
          for (var i = 0, l = handlers.length, ee = new Array(l); i < l; i++) {
            ee[i] = handlers[i].fn;
          }
          return ee;
        };
        Events4.prototype.listenerCount = function(event) {
          var listeners = this._events.get(event);
          if (!listeners)
            return 0;
          if (listeners.fn)
            return 1;
          return listeners.length;
        };
        Events4.prototype.emit = function(event) {
          var _a, _b;
          var args = [];
          for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
          }
          if (!this._events.has(event))
            return false;
          var listeners = this._events.get(event);
          var i;
          if (listeners.fn) {
            if (listeners.once)
              this.removeListener(event, listeners.fn, void 0, true);
            return (_a = listeners.fn).call.apply(_a, __spreadArray([listeners.context], args, false)), true;
          } else {
            var length_1 = listeners.length;
            for (i = 0; i < length_1; i++) {
              if (listeners[i].once)
                this.removeListener(event, listeners[i].fn, void 0, true);
              (_b = listeners[i].fn).call.apply(_b, __spreadArray([listeners[i].context], args, false));
            }
          }
          return true;
        };
        Events4.prototype.on = function(event, fn, context) {
          return addListener(this, event, fn, context, false);
        };
        Events4.prototype.once = function(event, fn, context) {
          return addListener(this, event, fn, context, true);
        };
        Events4.prototype.removeListener = function(event, fn, context, once) {
          if (!this._events.has(event))
            return this;
          if (!fn) {
            clearEvent(this, event);
            return this;
          }
          var listeners = this._events.get(event);
          if (listeners.fn) {
            if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) {
              clearEvent(this, event);
            }
          } else {
            for (var i = 0, events = [], length = listeners.length; i < length; i++) {
              if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) {
                events.push(listeners[i]);
              }
            }
            if (events.length)
              this._events.set(event, events.length === 1 ? events[0] : events);
            else
              clearEvent(this, event);
          }
          return this;
        };
        Events4.prototype.removeAllListeners = function(event) {
          if (event) {
            if (this._events.delete(event))
              clearEvent(this, event);
          } else {
            this._events = /* @__PURE__ */ new Map();
            this._eventsCount = 0;
          }
          return this;
        };
        Object.defineProperty(Events4.prototype, "off", {
          // alias
          get: function() {
            return this.removeListener;
          },
          enumerable: false,
          configurable: true
        });
        Object.defineProperty(Events4.prototype, "addListener", {
          // alias
          get: function() {
            return this.on;
          },
          enumerable: false,
          configurable: true
        });
        return Events4;
      }()
    );
    exports.Events = Events3;
  }
});

// adapters/geckos.js
var geckos_exports = {};
__export(geckos_exports, {
  Server: () => Server
});
module.exports = __toCommonJS(geckos_exports);

// node_modules/@geckos.io/server/lib/wrtc/nodeDataChannel.js
var import_node_datachannel = __toESM(require_lib(), 1);
var createDataChannel = (pc, label, config) => {
  return new Promise((resolve, reject) => {
    try {
      const dc = pc.createDataChannel(label, config);
      resolve(dc);
    } catch (err) {
      console.error("ERROR:", err.message);
      reject(err);
    }
  });
};
var createPeerConnection = (peerName, config) => {
  return new Promise((resolve, reject) => {
    try {
      const peerConnection = new import_node_datachannel.default.PeerConnection(peerName, config);
      resolve(peerConnection);
    } catch (err) {
      reject(err);
    }
  });
};
var closePeerConnection = (peerConnection) => {
  return new Promise((resolve) => {
    if (peerConnection) {
      peerConnection.destroy();
      resolve();
    } else {
      resolve();
    }
  });
};
var closeDataChannel = (dataChannel) => {
  return new Promise((resolve) => {
    if (dataChannel === null || dataChannel === void 0 ? void 0 : dataChannel.isOpen()) {
      dataChannel.close();
      resolve();
    } else {
      resolve();
    }
  });
};
var cleanup = () => {
  return new Promise((resolve) => {
    try {
      import_node_datachannel.default.cleanup();
      resolve();
    } catch (err) {
      resolve();
    }
  });
};

// node_modules/@geckos.io/common/lib/types.js
var ArrayBufferView = Object.getPrototypeOf(Object.getPrototypeOf(new Uint8Array())).constructor;

// node_modules/@geckos.io/common/lib/helpers.js
var promiseWithTimeout = (promise, ms, timeoutError = new Error("Promise timed out")) => {
  const timeout = new Promise((_2, reject) => {
    setTimeout(() => {
      reject(timeout);
    }, ms);
  });
  return Promise.race([promise, timeout]);
};
var pause = (ms = 0) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
};
var tick = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout;
var isStringMessage = (data) => {
  return typeof data === "string";
};
var isBufferMessage = (data) => {
  return data instanceof ArrayBuffer || data instanceof ArrayBufferView;
};
var isJSONMessage = (data) => {
  try {
    if (typeof data !== "string")
      return false;
    if (!isNaN(parseInt(data)))
      return false;
    JSON.parse(data);
    return true;
  } catch (error) {
    return false;
  }
};

// node_modules/@geckos.io/common/lib/constants.js
var EVENTS = {
  CONNECT: "connect",
  CONNECTION: "connection",
  DATA_CHANNEL_IS_OPEN: "dataChannelIsOpen",
  DISCONNECT: "disconnect",
  DISCONNECTED: "disconnected",
  DROP: "dropped",
  ERROR: "error",
  RAW_MESSAGE: "rawMessage",
  RECEIVED_FROM_DATA_CHANNEL: "receiveFromDataChannel",
  SEND_OVER_DATA_CHANNEL: "sendOverDataChannel"
};
var ERRORS = {
  BROWSER_NOT_SUPPORTED: "BROWSER_NOT_SUPPORTED",
  COULD_NOT_PARSE_MESSAGE: "COULD_NOT_PARSE_MESSAGE",
  DROPPED_FROM_BUFFERING: "DROPPED_FROM_BUFFERING",
  MAX_MESSAGE_SIZE_EXCEEDED: "MAX_MESSAGE_SIZE_EXCEEDED"
};

// node_modules/@geckos.io/server/lib/geckos/channel.js
var import_events2 = __toESM(require_cjs(), 1);

// node_modules/@geckos.io/common/lib/parseMessage.js
var ParseMessage = (ev) => {
  let { data } = ev;
  if (!data)
    data = ev;
  const isBuffer = isBufferMessage(data);
  const isJson = isJSONMessage(data);
  const isString = isStringMessage(data);
  if (isJson) {
    const object = JSON.parse(data);
    const key = Object.keys(object)[0];
    const value = object[key];
    return { key, data: value };
  }
  if (isBuffer) {
    return { key: EVENTS.RAW_MESSAGE, data };
  }
  if (isString) {
    return { key: EVENTS.RAW_MESSAGE, data };
  }
  return { key: "error", data: new Error(ERRORS.COULD_NOT_PARSE_MESSAGE) };
};
var parseMessage_default = ParseMessage;

// node_modules/@geckos.io/common/lib/sendMessage.js
var SendMessage = (dataChannel, maxMessageSize, eventName, data = null) => {
  var _a;
  const send = (data2, isBuffer) => {
    var _a2;
    const bytes = (_a2 = data2.byteLength) !== null && _a2 !== void 0 ? _a2 : data2.length * 2;
    if (typeof maxMessageSize === "number" && bytes > maxMessageSize) {
      throw new Error(`maxMessageSize of ${maxMessageSize} exceeded`);
    } else {
      Promise.resolve().then(() => {
        if (dataChannel.send)
          dataChannel.send(data2);
        else {
          if (!isBuffer)
            dataChannel.sendMessage(data2);
          else
            dataChannel.sendMessageBinary(Buffer.from(data2));
        }
      }).catch((error) => {
        console.log("error", error);
      });
    }
  };
  if (!dataChannel)
    return;
  if (dataChannel.readyState === "open" || ((_a = dataChannel.isOpen) === null || _a === void 0 ? void 0 : _a.call(dataChannel))) {
    try {
      if (eventName === EVENTS.RAW_MESSAGE && data !== null && (isStringMessage(data) || isBufferMessage(data))) {
        send(data, isBufferMessage(data));
      } else {
        send(JSON.stringify({ [eventName]: data }), false);
      }
    } catch (error) {
      console.error("Error in sendMessage.ts: ", error.message);
      return error;
    }
  }
};
var sendMessage_default = SendMessage;

// node_modules/@geckos.io/common/lib/bridge.js
var import_events = __toESM(require_cjs(), 1);
var Bridge = class {
  constructor() {
    this.eventEmitter = new import_events.Events();
  }
  emit(eventName, data, connection2 = {}) {
    this.eventEmitter.emit(eventName, data, connection2);
  }
  on(eventName, cb) {
    return this.eventEmitter.on(eventName, (data, options) => {
      cb(data, options);
    });
  }
  removeAllListeners() {
    this.eventEmitter.removeAllListeners();
  }
};
var bridge = new Bridge();
var bridge_default = bridge;

// node_modules/@geckos.io/common/lib/makeRandomId.js
var makeRandomId = (length = 24) => {
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return id;
};
var makeRandomId_default = makeRandomId;

// node_modules/@geckos.io/common/lib/runInterval.js
var runInterval = (interval = 200, runs = 1, cb) => {
  let counter = 0;
  if (typeof cb !== "function") {
    console.error("You have to define your callback function!");
    return;
  }
  const i = setInterval(() => {
    cb();
    counter++;
    if (counter === runs - 1) {
      clearInterval(i);
    }
  }, interval);
  cb();
};
var runInterval_default = runInterval;

// node_modules/@geckos.io/common/lib/reliableMessage.js
var makeReliable = (options, cb) => {
  const { interval = 150, runs = 10 } = options;
  const id = makeRandomId_default(24);
  runInterval_default(interval, runs, () => {
    cb(id);
  });
};

// node_modules/@geckos.io/server/lib/geckos/channel.js
var ServerChannel = class {
  constructor(webrtcConnection, dataChannel, dataChannelOptions, userData) {
    this.webrtcConnection = webrtcConnection;
    this.dataChannel = dataChannel;
    this.dataChannelOptions = dataChannelOptions;
    this.userData = userData;
    this.eventEmitter = new import_events2.Events();
    this.receivedReliableMessages = [];
    this._id = webrtcConnection.id;
    this._roomId = void 0;
    const {
      autoManageBuffering = true
      // maxPacketLifeTime = undefined,
      // maxRetransmits = 0,
    } = dataChannelOptions;
    this.autoManageBuffering = autoManageBuffering;
    this.dataChannel.onOpen(() => {
      this.dataChannel.onMessage((msg) => {
        const { key, data } = parseMessage_default(msg);
        this.eventEmitter.emit(key, data);
      });
      bridge_default.emit(EVENTS.CONNECTION, this);
    });
    this.dataChannel.onClosed(() => {
    });
  }
  /** Get the channel's id. */
  get id() {
    return this._id;
  }
  /** Get the channel's roomId. */
  get roomId() {
    return this._roomId;
  }
  /**
   * Listen for the disconnect event.
   * Gets the connectionState 'disconnected', 'failed' or 'closed'. See https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection/connectionState
   * @param callback The connectionState.
   */
  onDisconnect(callback) {
    this.eventEmitter.on(EVENTS.DISCONNECT, (connectionState) => {
      const cb = (connectionState2) => callback(connectionState2);
      cb(connectionState);
    });
  }
  /** Listen for the drop event. */
  onDrop(callback) {
    this.eventEmitter.on(EVENTS.DROP, (drop) => {
      callback(drop);
    });
  }
  /** Close the webRTC connection. */
  async close() {
    const connection2 = this.webrtcConnection.connections.get(this.id);
    if (connection2)
      await connection2.close();
    else
      console.log("connection not found!");
  }
  /** Join a room by its id. */
  join(roomId) {
    this._roomId = roomId;
  }
  /** Leave the current room. */
  leave() {
    this._roomId = void 0;
  }
  /** Emit a message to all channels in the same room. */
  get room() {
    return {
      /**
       * Emit a message to the current room.
       * @param eventName The event name.
       * @param data The data to send.
       */
      emit: (eventName, data, options) => {
        this.webrtcConnection.connections.forEach((connection2) => {
          const { channel } = connection2;
          const { roomId } = channel;
          if (roomId === this._roomId) {
            if (options && options.reliable) {
              makeReliable(options, (id) => channel.emit(eventName, {
                MESSAGE: data,
                RELIABLE: 1,
                ID: id
              }));
            } else {
              channel.emit(eventName, data);
            }
          }
        });
      }
    };
  }
  /** Broadcast a message to all channels in the same room, except the sender's. */
  get broadcast() {
    return {
      /**
       * Emit a broadcasted message.
       * @param eventName The event name.
       * @param data The data to send.
       */
      emit: (eventName, data, options) => {
        this.webrtcConnection.connections.forEach((connection2) => {
          const { channel } = connection2;
          const { roomId, id } = channel;
          if (roomId === this._roomId && id !== this._id) {
            if (options && options.reliable) {
              makeReliable(options, (id2) => channel.emit(eventName, {
                MESSAGE: data,
                RELIABLE: 1,
                ID: id2
              }));
            } else {
              channel.emit(eventName, data);
            }
          }
        });
      }
    };
  }
  /**
   * Forward a message to all channels in a specific room.
   * @param roomId The roomId.
   */
  forward(roomId) {
    return {
      /**
       * Emit a forwarded message.
       * @param eventName The event name.
       * @param data The data to send.
       */
      emit: (eventName, data, options) => {
        this.webrtcConnection.connections.forEach((connection2) => {
          const { channel } = connection2;
          const { roomId: channelRoomId } = channel;
          if (roomId === channelRoomId) {
            if (options && options.reliable) {
              makeReliable(options, (id) => channel.eventEmitter.emit(eventName, {
                MESSAGE: data,
                RELIABLE: 1,
                ID: id
              }, this._id));
            } else {
              channel.eventEmitter.emit(eventName, data, this._id);
            }
          }
        });
      }
    };
  }
  /**
   * Emit a message to the channel.
   * @param eventName The event name.
   * @param data The data to send.
   * @param options EmitOptions
   */
  emit(eventName, data = null, options) {
    if (options && options.reliable) {
      makeReliable(options, (id) => this._emit(eventName, {
        MESSAGE: data,
        RELIABLE: 1,
        ID: id
      }));
    } else {
      this._emit(eventName, data);
    }
  }
  _emit(eventName, data = null) {
    if (!this._roomId || this._roomId === this._roomId) {
      if (!this._id || this._id === this._id) {
        if (!this.dataChannel)
          return;
        const isReliable = data && typeof data === "object" && "RELIABLE" in data;
        const buffering = this.autoManageBuffering && +this.dataChannel.bufferedAmount() > 0;
        const drop = (reason, event, data2) => {
          this.eventEmitter.emit(EVENTS.DROP, { reason, event, data: data2 });
        };
        if (isReliable || !buffering) {
          const error = sendMessage_default(this.dataChannel, this.maxMessageSize, eventName, data);
          if (error)
            drop(ERRORS.MAX_MESSAGE_SIZE_EXCEEDED, eventName, data);
        } else {
          drop(ERRORS.DROPPED_FROM_BUFFERING, eventName, data);
        }
      }
    }
  }
  /** Send a raw message. */
  get raw() {
    return {
      /**
       * Emit a raw message.
       * @param rawMessage The raw message. Can be of type 'USVString | ArrayBuffer | ArrayBufferView'
       */
      emit: (rawMessage) => this.emit(EVENTS.RAW_MESSAGE, rawMessage),
      room: { emit: (rawMessage) => this.room.emit(EVENTS.RAW_MESSAGE, rawMessage) },
      broadcast: { emit: (rawMessage) => this.broadcast.emit(EVENTS.RAW_MESSAGE, rawMessage) }
    };
  }
  /**
   * Listen for raw messages.
   * @param callback The event callback.
   */
  onRaw(callback) {
    this.eventEmitter.on(EVENTS.RAW_MESSAGE, (rawMessage) => {
      const cb = (rawMessage2) => callback(rawMessage2);
      cb(rawMessage);
    });
  }
  /**
   * Listen for a message.
   * @param eventName The event name.
   * @param callback The event callback.
   */
  on(eventName, callback) {
    this.eventEmitter.on(eventName, (data, senderId = void 0) => {
      const cb = (data2, senderId2) => callback(data2, senderId2);
      const isReliableMessage = data && data.RELIABLE === 1 && data.ID !== "undefined";
      const expireTime = 15e3;
      const deleteExpiredReliableMessages = () => {
        const currentTime = (/* @__PURE__ */ new Date()).getTime();
        this.receivedReliableMessages.forEach((msg, index, object) => {
          if (msg.expire <= currentTime) {
            object.splice(index, 1);
          }
        });
      };
      if (isReliableMessage) {
        deleteExpiredReliableMessages();
        if (this.receivedReliableMessages.filter((obj) => obj.id === data.ID).length === 0) {
          this.receivedReliableMessages.push({
            id: data.ID,
            timestamp: /* @__PURE__ */ new Date(),
            expire: (/* @__PURE__ */ new Date()).getTime() + expireTime
          });
          cb(data.MESSAGE, senderId);
        } else {
        }
      } else {
        cb(data, senderId);
      }
    });
  }
};

// node_modules/@geckos.io/server/lib/wrtc/webrtcConnection.js
var import_events3 = __toESM(require("events"), 1);
var TIME_TO_HOST_CANDIDATES = 1e4;
var WebRTCConnection = class extends import_events3.default {
  constructor(id, configuration, connections, userData) {
    super();
    this.id = id;
    this.configuration = configuration;
    this.connections = connections;
    this.userData = userData;
    this.additionalCandidates = [];
    this.state = "open";
    this.options = {
      timeToHostCandidates: TIME_TO_HOST_CANDIDATES
    };
  }
  async init() {
    this.peerConnection = await promiseWithTimeout(createPeerConnection(this.id, this.configuration), 2e3);
    return this.peerConnection;
  }
  async close(state = "closed") {
    await promiseWithTimeout(closeDataChannel(this.channel.dataChannel), 2e3);
    await promiseWithTimeout(closePeerConnection(this.peerConnection), 2e3);
    this.channel.dataChannel = null;
    this.peerConnection = null;
    this.channel.eventEmitter.on(EVENTS.DISCONNECT, () => {
      this.removeAllListeners();
      this.channel.eventEmitter.removeAllListeners();
    });
    this.channel.eventEmitter.emit(EVENTS.DISCONNECT, state);
    if (this.connections.has(this.id))
      this.connections.delete(this.id);
  }
};

// node_modules/@geckos.io/server/lib/wrtc/connectionsManager.js
var ConnectionsManagerServer = class {
  constructor(options) {
    this.options = options;
    this.connections = /* @__PURE__ */ new Map();
  }
  createId() {
    let id = makeRandomId_default(24);
    while (this.connections.has(id))
      id = makeRandomId_default(24);
    return id;
  }
  getConnection(id) {
    return this.connections.get(id);
  }
  getConnections() {
    return this.connections;
  }
  async getUserData(authorization, request, response) {
    var _a;
    let userData = {};
    if ((_a = this.options) === null || _a === void 0 ? void 0 : _a.authorization) {
      if (typeof this.options.authorization !== "function") {
        console.log("[warning] Authorization is not a function!?");
        return { _statusCode: 500 };
      }
      const res = await this.options.authorization(authorization, request, response);
      if (typeof res === "boolean" && res)
        userData = {};
      else if (typeof res === "boolean" && !res)
        return { _statusCode: 401 };
      else if (typeof res === "number" && res >= 100 && res < 600)
        return { _statusCode: res };
      else
        userData = res;
    }
    return userData;
  }
  async createConnection(authorization, request, response) {
    const userData = await this.getUserData(authorization, request, response);
    if (userData._statusCode)
      return { userData, status: userData._statusCode };
    const newId = this.createId();
    const { ordered = false, label = "geckos.io", iceServers = [], portRange, iceTransportPolicy = "all", maxPacketLifeTime = void 0, maxRetransmits = 0, multiplex = true } = this.options;
    const dc_config = {
      maxPacketLifeTime,
      maxRetransmits,
      reliability: {
        unordered: !ordered
      }
    };
    let rtc_config = {
      // sdpSemantics: 'unified-plan',
      iceTransportPolicy,
      iceServers: iceServers.map((ice) => ice.urls),
      enableIceUdpMux: multiplex
    };
    if ((portRange === null || portRange === void 0 ? void 0 : portRange.min) && (portRange === null || portRange === void 0 ? void 0 : portRange.max)) {
      portRange.min = Math.max(portRange.min, 1025);
      portRange.max = Math.min(portRange.max, 65535);
      rtc_config = { ...rtc_config, portRangeBegin: portRange.min, portRangeEnd: portRange.max };
    }
    const connection2 = new WebRTCConnection(newId, rtc_config, this.connections, userData);
    const pc = await connection2.init();
    if (!pc)
      return { status: 500 };
    pc.onStateChange(async (state) => {
      if (state === "connected")
        connection2.channel.maxMessageSize = +connection2.channel.dataChannel.maxMessageSize();
      if (state === "disconnected" || state === "failed" || state === "closed") {
        await this.deleteConnection(connection2, state);
      }
    });
    let gatheringState;
    let localDescription;
    const candidates = [];
    pc.onDataChannel((dc2) => {
      console.log("Peer1 Got DataChannel: ", dc2.getLabel());
    });
    pc.onGatheringStateChange((state) => {
      gatheringState = state;
    });
    pc.onLocalDescription((sdp, type) => {
      localDescription = { sdp, type };
    });
    pc.onLocalCandidate((candidate, mid) => {
      connection2.additionalCandidates.push({ candidate, sdpMid: mid });
      candidates.push({ candidate, mid });
    });
    const dc = await promiseWithTimeout(createDataChannel(pc, label, dc_config), 2e3);
    connection2.channel = new ServerChannel(connection2, dc, this.options, userData);
    let waitForLocalDescription = 0;
    while (typeof localDescription === "undefined" && waitForLocalDescription < 20) {
      waitForLocalDescription++;
      await pause(50);
    }
    const { id } = connection2;
    if (!id)
      return { status: 500 };
    this.connections.set(id, connection2);
    return {
      connection: {
        id,
        localDescription
      },
      userData,
      status: 200
    };
  }
  async deleteConnection(connection2, state) {
    await connection2.close(state);
  }
};

// node_modules/@geckos.io/server/lib/httpServer/helpers.js
var sendStatus = (res, status) => {
  const statuses = {
    200: "OK",
    400: "Bad Request",
    401: "Unauthorized",
    402: "Payment Required",
    403: "Forbidden",
    404: "Not Found",
    500: "Internal Server Error"
  };
  res.statusCode = status;
  res.setHeader("Content-Type", "text/plain");
  if (statuses[status])
    res.end(`${status}: ${statuses[status]}`);
  else
    res.end(status.toString());
};
var sendJSON = (res, json) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringify(json));
};
var getJSONBody = (req) => {
  return new Promise((resolve, reject) => {
    const body = [];
    req.on("error", () => {
      console.log("error");
      return reject();
    }).on("data", (chunk) => {
      body.push(chunk);
    }).on("end", () => {
      try {
        const bodyStr = Buffer.concat(body).toString();
        const json = JSON.parse(bodyStr);
        return resolve(json);
      } catch (err) {
        return reject();
      }
    });
  });
};

// node_modules/@geckos.io/server/lib/httpServer/routes.js
var connection = async (connectionsManager, req, res) => {
  try {
    const headers = req.headers;
    const { status, connection: connection2, userData } = await connectionsManager.createConnection(headers === null || headers === void 0 ? void 0 : headers.authorization, req, res);
    if (status !== 200) {
      if (status >= 100 && status < 600)
        return sendStatus(res, status);
      else
        return sendStatus(res, 500);
    }
    if (!connection2 || !connection2.id)
      return sendStatus(res, 500);
    const { id, localDescription } = connection2;
    if (!id || !localDescription)
      return sendStatus(res, 500);
    return sendJSON(res, {
      userData,
      id,
      localDescription
    });
  } catch (err) {
    return sendStatus(res, 500);
  }
};
var remoteDescription = async (connectionsManager, req, res) => {
  try {
    const pathname = req.url;
    const ids = pathname === null || pathname === void 0 ? void 0 : pathname.match(/[0-9a-zA-Z]{24}/g);
    const body = await getJSONBody(req);
    if (ids && ids.length === 1) {
      const id = ids[0];
      const connection2 = connectionsManager.getConnection(id);
      if (!connection2)
        return sendStatus(res, 404);
      const { sdp, type } = body;
      if (!sdp || !type)
        sendStatus(res, 400);
      connection2.peerConnection.setRemoteDescription(sdp, type);
      return sendStatus(res, 200);
    } else {
      return sendStatus(res, 400);
    }
  } catch (err) {
    return sendStatus(res, 500);
  }
};
var additionalCandidates = async (connectionsManager, req, res) => {
  try {
    const pathname = req.url;
    const ids = pathname === null || pathname === void 0 ? void 0 : pathname.match(/[0-9a-zA-Z]{24}/g);
    if (ids && ids.length === 1) {
      const id = ids[0];
      const connection2 = connectionsManager.getConnection(id);
      if (!connection2)
        return sendStatus(res, 404);
      const additionalCandidates2 = [...connection2.additionalCandidates];
      connection2.additionalCandidates = [];
      return sendJSON(res, additionalCandidates2);
    } else {
      return sendStatus(res, 400);
    }
  } catch (err) {
    return sendStatus(res, 500);
  }
};
var close = async (connectionsManager, req, res) => {
  try {
    const pathname = req.url;
    const ids = pathname === null || pathname === void 0 ? void 0 : pathname.match(/[0-9a-zA-Z]{24}/g);
    if (ids && ids.length === 1) {
      const id = ids[0];
      const connection2 = connectionsManager.getConnection(id);
      await (connection2 === null || connection2 === void 0 ? void 0 : connection2.close());
      return sendStatus(res, 200);
    } else {
      return sendStatus(res, 400);
    }
  } catch (err) {
    return sendStatus(res, 500);
  }
};

// node_modules/@geckos.io/server/lib/httpServer/setCors.js
var SetCORS = (req, res, cors) => {
  const { origin, allowAuthorization } = cors;
  if (typeof origin === "function") {
    res.setHeader("Access-Control-Allow-Origin", origin(req));
  } else {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Request-Headers", "X-Requested-With, accept, content-type");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  if (allowAuthorization) {
    res.setHeader("Access-Control-Allow-Headers", "authorization, content-type");
  } else {
    res.setHeader("Access-Control-Allow-Headers", "content-type");
  }
};
var setCors_default = SetCORS;

// node_modules/@geckos.io/server/lib/httpServer/httpServer.js
var PREFIX = "/.wrtc/v2";
var HttpServer = (server, connectionsManager, cors) => {
  const rootRegEx = new RegExp(PREFIX);
  const evs = server.listeners("request").slice(0);
  server.removeAllListeners("request");
  server.on("request", async (req, res) => {
    const pathname = req.url;
    const method = req.method;
    const forGeckos = typeof pathname === "string" && rootRegEx.test(pathname) === true;
    if (!forGeckos) {
      for (var i = 0; i < evs.length; i++) {
        evs[i].call(server, req, res);
      }
    }
    if (forGeckos) {
      const reg_co = new RegExp(`${PREFIX}/connections$`).test(pathname);
      const reg_rd = new RegExp(`${PREFIX}/connections/[0-9a-zA-Z]+/remote-description$`).test(pathname);
      const reg_ac = new RegExp(`${PREFIX}/connections/[0-9a-zA-Z]+/additional-candidates$`).test(pathname);
      const reg_c = new RegExp(`${PREFIX}/connections/[0-9a-zA-Z]+/close$`).test(pathname);
      const _connections = method === "POST" && reg_co;
      const _remote_description = method === "POST" && reg_rd;
      const _additional_candidates = method === "GET" && reg_ac;
      const _close = method === "POST" && reg_c;
      setCors_default(req, res, cors);
      if (method === "OPTIONS")
        return await sendStatus(res, 200);
      if (_connections)
        await connection(connectionsManager, req, res);
      else if (_remote_description)
        await remoteDescription(connectionsManager, req, res);
      else if (_additional_candidates)
        await additionalCandidates(connectionsManager, req, res);
      else if (_close)
        await close(connectionsManager, req, res);
      else
        await sendStatus(res, 404);
    }
  });
};
var httpServer_default = HttpServer;

// node_modules/@geckos.io/server/lib/geckos/server.js
var import_http = __toESM(require("http"), 1);
var GeckosServer = class {
  constructor(options) {
    var _a;
    this._cors = { origin: "*", allowAuthorization: false };
    this.connectionsManager = new ConnectionsManagerServer(options);
    if (typeof ((_a = options.cors) === null || _a === void 0 ? void 0 : _a.allowAuthorization) === "undefined" && typeof options.authorization === "function")
      this._cors.allowAuthorization = true;
    this._cors = { ...this._cors, ...options.cors };
  }
  /** Get cors settings. */
  get cors() {
    return this._cors;
  }
  // @ts-ignore
  get connections() {
    return this.connectionsManager.connections;
  }
  /**
   * Make the server listen on a specific port.
   * @param port Default port is 9208.
   */
  listen(port = 9208) {
    this._port = port;
    this.server = import_http.default.createServer();
    const promises = [];
    this.server.once("close", async () => {
      for (const [_2, connection2] of Array.from(this.connectionsManager.connections)) {
        promises.push(connection2.close());
      }
      await Promise.all(promises);
      await promiseWithTimeout(cleanup(), 2e3);
      bridge_default.removeAllListeners();
    });
    httpServer_default(this.server, this.connectionsManager, this._cors);
    this.server.listen(port, () => {
      console.log(`Geckos.io signaling server is running on port ${port}`);
    });
  }
  /**
   * Add a existing http server.
   * @param server Your http.Server.
   */
  addServer(server) {
    this.server = server;
    const promises = [];
    this.server.once("close", async () => {
      for (const [_2, connection2] of Array.from(this.connectionsManager.connections)) {
        promises.push(connection2.close());
      }
      await Promise.all(promises);
      await promiseWithTimeout(cleanup(), 2e3);
      bridge_default.removeAllListeners();
    });
    httpServer_default(this.server, this.connectionsManager, this._cors);
  }
  get port() {
    return this._port;
  }
  /**
   * Emit a message to all channels.
   * @param eventName The event name.
   * @param data The data you want to send.
   * @param options EmitOptions
   */
  emit(eventName, data, options) {
    this.connections.forEach((connection2) => {
      const { channel } = connection2;
      if (options && options.reliable) {
        makeReliable(options, (id) => channel.emit(eventName, {
          MESSAGE: data,
          RELIABLE: 1,
          ID: id
        }));
      } else
        channel.emit(eventName, data);
    });
  }
  /**
   * Emit a message to a specific room.
   * @param roomId The roomId.
   */
  room(roomId = void 0) {
    return {
      emit: (eventName, data) => {
        this.connections.forEach((connection2) => {
          const { channel } = connection2;
          const { roomId: channelRoomId } = channel;
          if (roomId === channelRoomId) {
            channel.emit(eventName, data);
          }
        });
      }
    };
  }
  /** Emit a raw message */
  get raw() {
    return {
      emit: (rawMessage) => this.emit(EVENTS.RAW_MESSAGE, rawMessage),
      room: (roomId = void 0) => {
        return {
          emit: (rawMessage) => {
            this.room(roomId).emit(EVENTS.RAW_MESSAGE, rawMessage);
          }
        };
      }
    };
  }
  /** Listen for a new connection. */
  onConnection(callback) {
    bridge_default.on(EVENTS.CONNECTION, (channel) => {
      const cb = (channel2) => callback(channel2);
      cb(channel);
    });
  }
};
var geckosServer = (options = {}) => {
  const { iceTransportPolicy } = options;
  if (iceTransportPolicy === "relay") {
    console.error(`WARNING: iceTransportPolicy "relay" does not work yet on the server!`);
    options.iceTransportPolicy = "all";
  }
  return new GeckosServer(options);
};
var server_default = geckosServer;

// node_modules/@geckos.io/common/lib/iceServers.js
var defaultIceServers = [
  { urls: "stun:stun1.l.google.com:19302" },
  { urls: "stun:stun2.l.google.com:19302" },
  { urls: "stun:stun3.l.google.com:19302" },
  { urls: "stun:stun4.l.google.com:19302" }
];
var iceServers_default = defaultIceServers;

// node_modules/@geckos.io/server/lib/index.js
var lib_default = server_default;

// src/manager.js
var __dirname = process.cwd();

// src/adapters.js
var $Server = class {
  /**
   * Creates a new instance of the Server class.
   *
   * @constructor
   */
  constructor() {
    this.authorization = () => {
      return true;
    };
    this.onConnection = (client) => {
      console.log(`new client connection`);
    };
    this.onDisconnect = (client) => {
      console.log(`client disconnect`);
    };
    this.onTick = null;
    this.events = {};
  }
  /**
   * Sets up the server by importing and executing a script.
   *
   * @public
   * @async
   * @param {string} scriptPath - The path to the script file to execute.
   * @returns {void}
   */
  async setup(scriptPath) {
    global.io = this;
    global.$State = $State;
    global.$Ticker = $Ticker;
    const script = await import(`file://${scriptPath}`);
    if (script.authorization)
      this.authorization = script.authorization;
    if (script.onConnection)
      this.onConnection = script.onConnection;
    if (script.onDisconnect)
      this.onDisconnect = script.onDisconnect;
    if (script.onTick)
      this.onTick = script.onTick;
    if (script.events)
      this.events = script.events;
    if (this.onSetup)
      this.onSetup();
  }
  /**
   * Connects a client to the server.
   *
   * @public
   * @param {Object} mpClient - The client object to connect.
   * @returns {void}
   */
  connect(mpClient) {
    try {
      this.onConnection(mpClient);
    } catch (error) {
      console.error(error);
    }
    mpClient.onDisconnect(() => {
      try {
        this.onDisconnect(mpClient);
      } catch (error) {
        console.error(error);
      }
    });
    this.setClientEvents(mpClient);
  }
  /**
   * Sets event listeners on a client object.
   *
   * @private
   * @param {Object} mpClient - The client object to set events on.
   * @returns {void}
   */
  setClientEvents(mpClient) {
    for (const eventName in this.events) {
      mpClient.on(eventName, (...args) => {
        try {
          this.events[eventName](...args);
        } catch (error) {
          console.error(error);
        }
      });
    }
  }
  /**
   * Emits an event to all connected clients.
   * @param {string} eventName - The name of the event to be emitted.
   * @param {...any} args - The arguments to be passed to the event handler function.
   */
  emit(eventName = "", ...args) {
  }
};
var $Client = class {
  /**
   * Creates a new instance of the Client class.
   *
   * @constructor
   * @param {string} id - The unique identifier for the client.
   */
  constructor(id) {
    this.id = id;
  }
  /**
   * Emits an event to the client.
   *
   * @public
   * @param {string} eventName - The name of the event to emit.
   * @param {...*} args - Additional arguments to pass along with the event.
   * @returns {null}
   */
  emit(eventName = "", ...args) {
    return null;
  }
  /**
   * Registers a callback to be called when an event is received from the client.
   *
   * @public
   * @param {string} eventName - The name of the event to listen for.
   * @param {function} callback - The function to call when the event is received.
   * @returns {null}
   */
  on(eventName = "", callback = null) {
    return null;
  }
  /**
   * Called when the client disconnects from the server.
   *
   * @public
   * @returns {void}
   */
  onDisconnect() {
  }
};

// src/ticker.js
var $Ticker = class {
  /**
   * Length of a tick in milliseconds. The denominator is your desired framerate.
   * e.g. 1000 / 20 = 20 fps,  1000 / 60 = 60 fps
   * @type {number}
   */
  tickLengthMs = 1e3 / 60;
  /**
   * Timestamp of each loop.
   * @type {number}
   */
  previousTick = Date.now();
  /**
   * Number of times $Ticker gets called.
   * @type {number}
   */
  actualTicks = 0;
  /**
   * Store the delta value.
   * @type {number}
   * @private
   */
  #delta = 0;
  /**
   * Store the time from the start.
   * @type {number}
   */
  startTime;
  /**
   * Store if the clock is running or not.
   * @type {boolean}
   * @private
   */
  #isRunning = false;
  /**
   * Enable high accuracy mode (default: true).
   * High accuracy mode uses much more CPU power, but provides much more precise tick intervals.
   * @type {boolean}
   * @private
   */
  #highAccuracy = true;
  /**
   * Callback function to be called on each tick.
   * @type {function}
   * @private
   */
  #onTickCallback;
  /**
   * Creates a new Ticker instance.
   * 
   * @param {number} fps - Frames per second (default: 60).
   * @param {boolean} autoStart - Automatically start the ticker (default: true).
   */
  constructor(fps = 60, autoStart = true) {
    if (autoStart)
      this.start(fps);
  }
  /**
   * Start the clock.
   * 
   * @param {number} fps - Frames per second (default: 60).
   */
  start(fps = 60) {
    if (fps <= 25)
      this.disableHighAccuracy();
    this.tickLengthMs = 1e3 / fps;
    this.#isRunning = true;
    this.startTime = Date.now();
    this.#loop();
  }
  /**
   * Stop the clock.
   */
  stop() {
    this.#isRunning = false;
  }
  /**
   * Check if the clock is running.
   * 
   * @returns {boolean} - True if the clock is running, false otherwise.
   */
  isRunning() {
    return this.#isRunning;
  }
  /**
   * Get the last delta value.
   * 
   * @returns {number} - The last delta value.
   */
  getDelta() {
    return this.#delta;
  }
  /**
   * Get the total elapsed time since the clock started.
   * 
   * @returns {number} - The total elapsed time.
   */
  getElapsedTime() {
    return Date.now() - this.startTime;
  }
  /**
   * Set a callback function to be called on each tick.
   * 
   * @param {function} onTickCallback - The callback function.
   */
  onTick(onTickCallback) {
    this.#onTickCallback = onTickCallback;
  }
  /**
   * The ticker loop function.
   * 
   * @private
   */
  #loop() {
    if (!this.#isRunning)
      return;
    var now = Date.now();
    this.actualTicks++;
    if (this.previousTick + this.tickLengthMs <= now) {
      this.#delta = (now - this.previousTick) / 1e3;
      this.previousTick = now;
      if (this.#onTickCallback)
        this.#onTickCallback(this.#delta);
      this.actualTicks = 0;
    }
    if (this.#highAccuracy) {
      if (Date.now() - this.previousTick < this.tickLengthMs - 16) {
        setTimeout(() => this.#loop());
      } else {
        setImmediate(() => this.#loop());
      }
    } else {
      setTimeout(() => {
        this.#loop();
      }, this.tickLengthMs);
    }
  }
  /** Disable high accuracy to save some cpu power. This is very useful while developing. */
  disableHighAccuracy() {
    this.#highAccuracy = false;
  }
  /** Enable hight accuracy. Much more precise but uses much more cpu power. */
  enableHighAccuracy() {
    this.#highAccuracy = true;
  }
};

// node_modules/@gullerya/object-observer/dist/object-observer.min.js
var m = "insert";
var x = "update";
var E = "delete";
var T = "reverse";
var K = "shuffle";
var c = Symbol.for("object-observer-meta-key-0");
var $ = { async: 1 };
var N = (o) => {
  if (!o || typeof o != "object")
    return null;
  const t = {}, e = [];
  for (const [r, n] of Object.entries(o))
    if (r === "path") {
      if (typeof n != "string" || n === "")
        throw new Error('"path" option, if/when provided, MUST be a non-empty string');
      t[r] = n;
    } else if (r === "pathsOf") {
      if (o.path)
        throw new Error('"pathsOf" option MAY NOT be specified together with "path" option');
      if (typeof n != "string")
        throw new Error('"pathsOf" option, if/when provided, MUST be a string (MAY be empty)');
      t[r] = o.pathsOf.split(".").filter(Boolean);
    } else if (r === "pathsFrom") {
      if (o.path || o.pathsOf)
        throw new Error('"pathsFrom" option MAY NOT be specified together with "path"/"pathsOf" option/s');
      if (typeof n != "string" || n === "")
        throw new Error('"pathsFrom" option, if/when provided, MUST be a non-empty string');
      t[r] = n;
    } else
      e.push(r);
  if (e.length)
    throw new Error(`'${e.join(", ")}' is/are not a valid observer option/s`);
  return t;
};
var Y = (o, t, e) => {
  const r = {};
  r[c] = t;
  for (const n in o)
    r[n] = g(o[n], n, t, e);
  return r;
};
var I = (o, t, e) => {
  let r = o.length;
  const n = new Array(r);
  n[c] = t;
  for (let i = 0; i < r; i++)
    n[i] = g(o[i], i, t, e);
  return n;
};
var B = (o, t) => (o[c] = t, o);
var D = (o, t) => {
  if (o === null)
    return t;
  let e = t;
  if (o.path) {
    const r = o.path;
    e = t.filter((n) => n.path.join(".") === r);
  } else if (o.pathsOf) {
    const r = o.pathsOf, n = r.join(".");
    e = t.filter((i) => (i.path.length === r.length + 1 || i.path.length === r.length && (i.type === T || i.type === K)) && i.path.join(".").startsWith(n));
  } else if (o.pathsFrom) {
    const r = o.pathsFrom;
    e = t.filter((n) => n.path.join(".").startsWith(r));
  }
  return e;
};
var R = (o, t) => {
  try {
    o(t);
  } catch (e) {
    console.error(`failed to notify listener ${o} with ${t}`, e);
  }
};
var z = function() {
  const t = this.batches;
  this.batches = [];
  for (const [e, r] of t)
    R(e, r);
};
var y = (o, t) => {
  let e = o, r, n, i, l, h, s;
  const u = t.length;
  do {
    for (r = e.options.async, n = e.observers, s = n.length; s--; )
      if ([i, l] = n[s], h = D(l, t), h.length)
        if (r) {
          e.batches.length === 0 && queueMicrotask(z.bind(e));
          let a;
          for (const p of e.batches)
            if (p[0] === i) {
              a = p;
              break;
            }
          a || (a = [i, []], e.batches.push(a)), Array.prototype.push.apply(a[1], h);
        } else
          R(i, h);
    const f = e.parent;
    if (f) {
      for (let a = 0; a < u; a++) {
        const p = t[a];
        t[a] = new b(p.type, [e.ownKey, ...p.path], p.value, p.oldValue, p.object);
      }
      e = f;
    } else
      e = null;
  } while (e);
};
var g = (o, t, e, r) => r !== void 0 && r.has(o) ? null : typeof o != "object" || o === null ? o : Array.isArray(o) ? new U({ target: o, ownKey: t, parent: e, visited: r }).proxy : ArrayBuffer.isView(o) ? new W({ target: o, ownKey: t, parent: e }).proxy : o instanceof Date ? o : new V({ target: o, ownKey: t, parent: e, visited: r }).proxy;
var q = function() {
  const t = this[c], e = t.target, r = e.length - 1;
  let n = e.pop();
  if (n && typeof n == "object") {
    const l = n[c];
    l && (n = l.detach());
  }
  const i = [new b(E, [r], void 0, n, this)];
  return y(t, i), n;
};
var H = function() {
  const t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
  for (let s = 0; s < r; s++)
    n[s] = g(arguments[s], i + s, t);
  const l = Reflect.apply(e.push, e, n), h = [];
  for (let s = i, u = e.length; s < u; s++)
    h[s - i] = new b(m, [s], e[s], void 0, this);
  return y(t, h), l;
};
var G = function() {
  const t = this[c], e = t.target;
  let r, n, i, l, h;
  for (r = e.shift(), r && typeof r == "object" && (h = r[c], h && (r = h.detach())), n = 0, i = e.length; n < i; n++)
    l = e[n], l && typeof l == "object" && (h = l[c], h && (h.ownKey = n));
  const s = [new b(E, [0], void 0, r, this)];
  return y(t, s), r;
};
var J = function() {
  const t = this[c], e = t.target, r = arguments.length, n = new Array(r);
  for (let s = 0; s < r; s++)
    n[s] = g(arguments[s], s, t);
  const i = Reflect.apply(e.unshift, e, n);
  for (let s = 0, u = e.length, f; s < u; s++)
    if (f = e[s], f && typeof f == "object") {
      const a = f[c];
      a && (a.ownKey = s);
    }
  const l = n.length, h = new Array(l);
  for (let s = 0; s < l; s++)
    h[s] = new b(m, [s], e[s], void 0, this);
  return y(t, h), i;
};
var F = function() {
  const t = this[c], e = t.target;
  let r, n, i;
  for (e.reverse(), r = 0, n = e.length; r < n; r++)
    if (i = e[r], i && typeof i == "object") {
      const h = i[c];
      h && (h.ownKey = r);
    }
  const l = [new b(T, [], void 0, void 0, this)];
  return y(t, l), this;
};
var P = function(t) {
  const e = this[c], r = e.target;
  let n, i, l;
  for (r.sort(t), n = 0, i = r.length; n < i; n++)
    if (l = r[n], l && typeof l == "object") {
      const s = l[c];
      s && (s.ownKey = n);
    }
  const h = [new b(K, [], void 0, void 0, this)];
  return y(e, h), this;
};
var L = function(t, e, r) {
  const n = this[c], i = n.target, l = [], h = i.length, s = i.slice(0);
  if (e = e === void 0 ? 0 : e < 0 ? Math.max(h + e, 0) : Math.min(e, h), r = r === void 0 ? h : r < 0 ? Math.max(h + r, 0) : Math.min(r, h), e < h && r > e) {
    i.fill(t, e, r);
    let u;
    for (let f = e, a, p; f < r; f++)
      a = i[f], i[f] = g(a, f, n), f in s ? (p = s[f], p && typeof p == "object" && (u = p[c], u && (p = u.detach())), l.push(new b(x, [f], i[f], p, this))) : l.push(new b(m, [f], i[f], void 0, this));
    y(n, l);
  }
  return this;
};
var C = function(t, e, r) {
  const n = this[c], i = n.target, l = i.length;
  t = t < 0 ? Math.max(l + t, 0) : t, e = e === void 0 ? 0 : e < 0 ? Math.max(l + e, 0) : Math.min(e, l), r = r === void 0 ? l : r < 0 ? Math.max(l + r, 0) : Math.min(r, l);
  const h = Math.min(r - e, l - t);
  if (t < l && t !== e && h > 0) {
    const s = i.slice(0), u = [];
    i.copyWithin(t, e, r);
    for (let f = t, a, p, O; f < t + h; f++)
      a = i[f], a && typeof a == "object" && (a = g(a, f, n), i[f] = a), p = s[f], p && typeof p == "object" && (O = p[c], O && (p = O.detach())), !(typeof a != "object" && a === p) && u.push(new b(x, [f], a, p, this));
    y(n, u);
  }
  return this;
};
var Q = function() {
  const t = this[c], e = t.target, r = arguments.length, n = new Array(r), i = e.length;
  for (let w = 0; w < r; w++)
    n[w] = g(arguments[w], w, t);
  const l = r === 0 ? 0 : n[0] < 0 ? i + n[0] : n[0], h = r < 2 ? i - l : n[1], s = Math.max(r - 2, 0), u = Reflect.apply(e.splice, e, n), f = e.length;
  let a;
  for (let w = 0, A; w < f; w++)
    A = e[w], A && typeof A == "object" && (a = A[c], a && (a.ownKey = w));
  let p, O, j;
  for (p = 0, O = u.length; p < O; p++)
    j = u[p], j && typeof j == "object" && (a = j[c], a && (u[p] = a.detach()));
  const M = [];
  let d;
  for (d = 0; d < h; d++)
    d < s ? M.push(new b(x, [l + d], e[l + d], u[d], this)) : M.push(new b(E, [l + d], void 0, u[d], this));
  for (; d < s; d++)
    M.push(new b(m, [l + d], e[l + d], void 0, this));
  return y(t, M), u;
};
var X = function(t, e) {
  const r = this[c], n = r.target, i = t.length, l = n.slice(0);
  e = e || 0, n.set(t, e);
  const h = new Array(i);
  for (let s = e; s < i + e; s++)
    h[s - e] = new b(x, [s], n[s], l[s], this);
  y(r, h);
};
var Z = { pop: q, push: H, shift: G, unshift: J, reverse: F, sort: P, fill: L, copyWithin: C, splice: Q };
var _ = { reverse: F, sort: P, fill: L, copyWithin: C, set: X };
var b = class {
  constructor(t, e, r, n, i) {
    this.type = t, this.path = e, this.value = r, this.oldValue = n, this.object = i;
  }
};
var S = class {
  constructor(t, e) {
    const { target: r, parent: n, ownKey: i, visited: l = /* @__PURE__ */ new Set() } = t;
    n && i !== void 0 ? (this.parent = n, this.ownKey = i) : (this.parent = null, this.ownKey = null), l.add(r);
    const h = e(r, this, l);
    l.delete(r), this.observers = [], this.revocable = Proxy.revocable(h, this), this.proxy = this.revocable.proxy, this.target = h, this.options = this.processOptions(t.options), this.options.async && (this.batches = []);
  }
  processOptions(t) {
    if (t) {
      if (typeof t != "object")
        throw new Error(`Observable options if/when provided, MAY only be an object, got '${t}'`);
      const e = Object.keys(t).filter((r) => !(r in $));
      if (e.length)
        throw new Error(`'${e.join(", ")}' is/are not a valid Observable option/s`);
      return Object.assign({}, t);
    } else
      return {};
  }
  detach() {
    return this.parent = null, this.target;
  }
  set(t, e, r) {
    let n = t[e];
    if (r !== n) {
      const i = g(r, e, this);
      if (t[e] = i, n && typeof n == "object") {
        const h = n[c];
        h && (n = h.detach());
      }
      const l = n === void 0 ? [new b(m, [e], i, void 0, this.proxy)] : [new b(x, [e], i, n, this.proxy)];
      y(this, l);
    }
    return true;
  }
  deleteProperty(t, e) {
    let r = t[e];
    if (delete t[e], r && typeof r == "object") {
      const i = r[c];
      i && (r = i.detach());
    }
    const n = [new b(E, [e], void 0, r, this.proxy)];
    return y(this, n), true;
  }
};
var V = class extends S {
  constructor(t) {
    super(t, Y);
  }
};
var U = class extends S {
  constructor(t) {
    super(t, I);
  }
  get(t, e) {
    return Z[e] || t[e];
  }
};
var W = class extends S {
  constructor(t) {
    super(t, B);
  }
  get(t, e) {
    return _[e] || t[e];
  }
};
var v = Object.freeze({ from: (o, t) => {
  if (!o || typeof o != "object")
    throw new Error("observable MAY ONLY be created from a non-null object");
  if (o[c])
    return o;
  if (Array.isArray(o))
    return new U({ target: o, ownKey: null, parent: null, options: t }).proxy;
  if (ArrayBuffer.isView(o))
    return new W({ target: o, ownKey: null, parent: null, options: t }).proxy;
  if (o instanceof Date)
    throw new Error(`${o} found to be one of a non-observable types`);
  return new V({ target: o, ownKey: null, parent: null, options: t }).proxy;
}, isObservable: (o) => !!(o && o[c]), observe: (o, t, e) => {
  if (!v.isObservable(o))
    throw new Error("invalid observable parameter");
  if (typeof t != "function")
    throw new Error(`observer MUST be a function, got '${t}'`);
  const r = o[c].observers;
  r.some((n) => n[0] === t) ? console.warn("observer may be bound to an observable only once; will NOT rebind") : r.push([t, N(e)]);
}, unobserve: (o, ...t) => {
  if (!v.isObservable(o))
    throw new Error("invalid observable parameter");
  const e = o[c].observers;
  let r = e.length;
  if (r) {
    if (!t.length) {
      e.splice(0);
      return;
    }
    for (; r; )
      t.indexOf(e[--r][0]) >= 0 && e.splice(r, 1);
  }
} });

// node_modules/lodash-es/_freeGlobal.js
var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
var freeGlobal_default = freeGlobal;

// node_modules/lodash-es/_root.js
var freeSelf = typeof self == "object" && self && self.Object === Object && self;
var root = freeGlobal_default || freeSelf || Function("return this")();
var root_default = root;

// node_modules/lodash-es/_Symbol.js
var Symbol2 = root_default.Symbol;
var Symbol_default = Symbol2;

// node_modules/lodash-es/_getRawTag.js
var objectProto = Object.prototype;
var hasOwnProperty = objectProto.hasOwnProperty;
var nativeObjectToString = objectProto.toString;
var symToStringTag = Symbol_default ? Symbol_default.toStringTag : void 0;
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag), tag = value[symToStringTag];
  try {
    value[symToStringTag] = void 0;
    var unmasked = true;
  } catch (e) {
  }
  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}
var getRawTag_default = getRawTag;

// node_modules/lodash-es/_objectToString.js
var objectProto2 = Object.prototype;
var nativeObjectToString2 = objectProto2.toString;
function objectToString(value) {
  return nativeObjectToString2.call(value);
}
var objectToString_default = objectToString;

// node_modules/lodash-es/_baseGetTag.js
var nullTag = "[object Null]";
var undefinedTag = "[object Undefined]";
var symToStringTag2 = Symbol_default ? Symbol_default.toStringTag : void 0;
function baseGetTag(value) {
  if (value == null) {
    return value === void 0 ? undefinedTag : nullTag;
  }
  return symToStringTag2 && symToStringTag2 in Object(value) ? getRawTag_default(value) : objectToString_default(value);
}
var baseGetTag_default = baseGetTag;

// node_modules/lodash-es/isObjectLike.js
function isObjectLike(value) {
  return value != null && typeof value == "object";
}
var isObjectLike_default = isObjectLike;

// node_modules/lodash-es/isSymbol.js
var symbolTag = "[object Symbol]";
function isSymbol(value) {
  return typeof value == "symbol" || isObjectLike_default(value) && baseGetTag_default(value) == symbolTag;
}
var isSymbol_default = isSymbol;

// node_modules/lodash-es/_arrayMap.js
function arrayMap(array, iteratee) {
  var index = -1, length = array == null ? 0 : array.length, result = Array(length);
  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}
var arrayMap_default = arrayMap;

// node_modules/lodash-es/isArray.js
var isArray = Array.isArray;
var isArray_default = isArray;

// node_modules/lodash-es/_baseToString.js
var INFINITY = 1 / 0;
var symbolProto = Symbol_default ? Symbol_default.prototype : void 0;
var symbolToString = symbolProto ? symbolProto.toString : void 0;
function baseToString(value) {
  if (typeof value == "string") {
    return value;
  }
  if (isArray_default(value)) {
    return arrayMap_default(value, baseToString) + "";
  }
  if (isSymbol_default(value)) {
    return symbolToString ? symbolToString.call(value) : "";
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
}
var baseToString_default = baseToString;

// node_modules/lodash-es/isObject.js
function isObject(value) {
  var type = typeof value;
  return value != null && (type == "object" || type == "function");
}
var isObject_default = isObject;

// node_modules/lodash-es/isFunction.js
var asyncTag = "[object AsyncFunction]";
var funcTag = "[object Function]";
var genTag = "[object GeneratorFunction]";
var proxyTag = "[object Proxy]";
function isFunction(value) {
  if (!isObject_default(value)) {
    return false;
  }
  var tag = baseGetTag_default(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}
var isFunction_default = isFunction;

// node_modules/lodash-es/_coreJsData.js
var coreJsData = root_default["__core-js_shared__"];
var coreJsData_default = coreJsData;

// node_modules/lodash-es/_isMasked.js
var maskSrcKey = function() {
  var uid = /[^.]+$/.exec(coreJsData_default && coreJsData_default.keys && coreJsData_default.keys.IE_PROTO || "");
  return uid ? "Symbol(src)_1." + uid : "";
}();
function isMasked(func) {
  return !!maskSrcKey && maskSrcKey in func;
}
var isMasked_default = isMasked;

// node_modules/lodash-es/_toSource.js
var funcProto = Function.prototype;
var funcToString = funcProto.toString;
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {
    }
    try {
      return func + "";
    } catch (e) {
    }
  }
  return "";
}
var toSource_default = toSource;

// node_modules/lodash-es/_baseIsNative.js
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;
var reIsHostCtor = /^\[object .+?Constructor\]$/;
var funcProto2 = Function.prototype;
var objectProto3 = Object.prototype;
var funcToString2 = funcProto2.toString;
var hasOwnProperty2 = objectProto3.hasOwnProperty;
var reIsNative = RegExp(
  "^" + funcToString2.call(hasOwnProperty2).replace(reRegExpChar, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function baseIsNative(value) {
  if (!isObject_default(value) || isMasked_default(value)) {
    return false;
  }
  var pattern = isFunction_default(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource_default(value));
}
var baseIsNative_default = baseIsNative;

// node_modules/lodash-es/_getValue.js
function getValue(object, key) {
  return object == null ? void 0 : object[key];
}
var getValue_default = getValue;

// node_modules/lodash-es/_getNative.js
function getNative(object, key) {
  var value = getValue_default(object, key);
  return baseIsNative_default(value) ? value : void 0;
}
var getNative_default = getNative;

// node_modules/lodash-es/_defineProperty.js
var defineProperty = function() {
  try {
    var func = getNative_default(Object, "defineProperty");
    func({}, "", {});
    return func;
  } catch (e) {
  }
}();
var defineProperty_default = defineProperty;

// node_modules/lodash-es/_isIndex.js
var MAX_SAFE_INTEGER = 9007199254740991;
var reIsUint = /^(?:0|[1-9]\d*)$/;
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length && (type == "number" || type != "symbol" && reIsUint.test(value)) && (value > -1 && value % 1 == 0 && value < length);
}
var isIndex_default = isIndex;

// node_modules/lodash-es/_baseAssignValue.js
function baseAssignValue(object, key, value) {
  if (key == "__proto__" && defineProperty_default) {
    defineProperty_default(object, key, {
      "configurable": true,
      "enumerable": true,
      "value": value,
      "writable": true
    });
  } else {
    object[key] = value;
  }
}
var baseAssignValue_default = baseAssignValue;

// node_modules/lodash-es/eq.js
function eq(value, other) {
  return value === other || value !== value && other !== other;
}
var eq_default = eq;

// node_modules/lodash-es/_assignValue.js
var objectProto4 = Object.prototype;
var hasOwnProperty3 = objectProto4.hasOwnProperty;
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty3.call(object, key) && eq_default(objValue, value)) || value === void 0 && !(key in object)) {
    baseAssignValue_default(object, key, value);
  }
}
var assignValue_default = assignValue;

// node_modules/lodash-es/_isKey.js
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/;
var reIsPlainProp = /^\w*$/;
function isKey(value, object) {
  if (isArray_default(value)) {
    return false;
  }
  var type = typeof value;
  if (type == "number" || type == "symbol" || type == "boolean" || value == null || isSymbol_default(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) || object != null && value in Object(object);
}
var isKey_default = isKey;

// node_modules/lodash-es/_nativeCreate.js
var nativeCreate = getNative_default(Object, "create");
var nativeCreate_default = nativeCreate;

// node_modules/lodash-es/_hashClear.js
function hashClear() {
  this.__data__ = nativeCreate_default ? nativeCreate_default(null) : {};
  this.size = 0;
}
var hashClear_default = hashClear;

// node_modules/lodash-es/_hashDelete.js
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}
var hashDelete_default = hashDelete;

// node_modules/lodash-es/_hashGet.js
var HASH_UNDEFINED = "__lodash_hash_undefined__";
var objectProto5 = Object.prototype;
var hasOwnProperty4 = objectProto5.hasOwnProperty;
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate_default) {
    var result = data[key];
    return result === HASH_UNDEFINED ? void 0 : result;
  }
  return hasOwnProperty4.call(data, key) ? data[key] : void 0;
}
var hashGet_default = hashGet;

// node_modules/lodash-es/_hashHas.js
var objectProto6 = Object.prototype;
var hasOwnProperty5 = objectProto6.hasOwnProperty;
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate_default ? data[key] !== void 0 : hasOwnProperty5.call(data, key);
}
var hashHas_default = hashHas;

// node_modules/lodash-es/_hashSet.js
var HASH_UNDEFINED2 = "__lodash_hash_undefined__";
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = nativeCreate_default && value === void 0 ? HASH_UNDEFINED2 : value;
  return this;
}
var hashSet_default = hashSet;

// node_modules/lodash-es/_Hash.js
function Hash(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
Hash.prototype.clear = hashClear_default;
Hash.prototype["delete"] = hashDelete_default;
Hash.prototype.get = hashGet_default;
Hash.prototype.has = hashHas_default;
Hash.prototype.set = hashSet_default;
var Hash_default = Hash;

// node_modules/lodash-es/_listCacheClear.js
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}
var listCacheClear_default = listCacheClear;

// node_modules/lodash-es/_assocIndexOf.js
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq_default(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}
var assocIndexOf_default = assocIndexOf;

// node_modules/lodash-es/_listCacheDelete.js
var arrayProto = Array.prototype;
var splice = arrayProto.splice;
function listCacheDelete(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}
var listCacheDelete_default = listCacheDelete;

// node_modules/lodash-es/_listCacheGet.js
function listCacheGet(key) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  return index < 0 ? void 0 : data[index][1];
}
var listCacheGet_default = listCacheGet;

// node_modules/lodash-es/_listCacheHas.js
function listCacheHas(key) {
  return assocIndexOf_default(this.__data__, key) > -1;
}
var listCacheHas_default = listCacheHas;

// node_modules/lodash-es/_listCacheSet.js
function listCacheSet(key, value) {
  var data = this.__data__, index = assocIndexOf_default(data, key);
  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}
var listCacheSet_default = listCacheSet;

// node_modules/lodash-es/_ListCache.js
function ListCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
ListCache.prototype.clear = listCacheClear_default;
ListCache.prototype["delete"] = listCacheDelete_default;
ListCache.prototype.get = listCacheGet_default;
ListCache.prototype.has = listCacheHas_default;
ListCache.prototype.set = listCacheSet_default;
var ListCache_default = ListCache;

// node_modules/lodash-es/_Map.js
var Map2 = getNative_default(root_default, "Map");
var Map_default = Map2;

// node_modules/lodash-es/_mapCacheClear.js
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    "hash": new Hash_default(),
    "map": new (Map_default || ListCache_default)(),
    "string": new Hash_default()
  };
}
var mapCacheClear_default = mapCacheClear;

// node_modules/lodash-es/_isKeyable.js
function isKeyable(value) {
  var type = typeof value;
  return type == "string" || type == "number" || type == "symbol" || type == "boolean" ? value !== "__proto__" : value === null;
}
var isKeyable_default = isKeyable;

// node_modules/lodash-es/_getMapData.js
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable_default(key) ? data[typeof key == "string" ? "string" : "hash"] : data.map;
}
var getMapData_default = getMapData;

// node_modules/lodash-es/_mapCacheDelete.js
function mapCacheDelete(key) {
  var result = getMapData_default(this, key)["delete"](key);
  this.size -= result ? 1 : 0;
  return result;
}
var mapCacheDelete_default = mapCacheDelete;

// node_modules/lodash-es/_mapCacheGet.js
function mapCacheGet(key) {
  return getMapData_default(this, key).get(key);
}
var mapCacheGet_default = mapCacheGet;

// node_modules/lodash-es/_mapCacheHas.js
function mapCacheHas(key) {
  return getMapData_default(this, key).has(key);
}
var mapCacheHas_default = mapCacheHas;

// node_modules/lodash-es/_mapCacheSet.js
function mapCacheSet(key, value) {
  var data = getMapData_default(this, key), size = data.size;
  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}
var mapCacheSet_default = mapCacheSet;

// node_modules/lodash-es/_MapCache.js
function MapCache(entries) {
  var index = -1, length = entries == null ? 0 : entries.length;
  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}
MapCache.prototype.clear = mapCacheClear_default;
MapCache.prototype["delete"] = mapCacheDelete_default;
MapCache.prototype.get = mapCacheGet_default;
MapCache.prototype.has = mapCacheHas_default;
MapCache.prototype.set = mapCacheSet_default;
var MapCache_default = MapCache;

// node_modules/lodash-es/memoize.js
var FUNC_ERROR_TEXT = "Expected a function";
function memoize(func, resolver) {
  if (typeof func != "function" || resolver != null && typeof resolver != "function") {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments, key = resolver ? resolver.apply(this, args) : args[0], cache = memoized.cache;
    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache_default)();
  return memoized;
}
memoize.Cache = MapCache_default;
var memoize_default = memoize;

// node_modules/lodash-es/_memoizeCapped.js
var MAX_MEMOIZE_SIZE = 500;
function memoizeCapped(func) {
  var result = memoize_default(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });
  var cache = result.cache;
  return result;
}
var memoizeCapped_default = memoizeCapped;

// node_modules/lodash-es/_stringToPath.js
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;
var reEscapeChar = /\\(\\)?/g;
var stringToPath = memoizeCapped_default(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46) {
    result.push("");
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, "$1") : number || match);
  });
  return result;
});
var stringToPath_default = stringToPath;

// node_modules/lodash-es/toString.js
function toString(value) {
  return value == null ? "" : baseToString_default(value);
}
var toString_default = toString;

// node_modules/lodash-es/_castPath.js
function castPath(value, object) {
  if (isArray_default(value)) {
    return value;
  }
  return isKey_default(value, object) ? [value] : stringToPath_default(toString_default(value));
}
var castPath_default = castPath;

// node_modules/lodash-es/_toKey.js
var INFINITY2 = 1 / 0;
function toKey(value) {
  if (typeof value == "string" || isSymbol_default(value)) {
    return value;
  }
  var result = value + "";
  return result == "0" && 1 / value == -INFINITY2 ? "-0" : result;
}
var toKey_default = toKey;

// node_modules/lodash-es/_baseGet.js
function baseGet(object, path) {
  path = castPath_default(path, object);
  var index = 0, length = path.length;
  while (object != null && index < length) {
    object = object[toKey_default(path[index++])];
  }
  return index && index == length ? object : void 0;
}
var baseGet_default = baseGet;

// node_modules/lodash-es/get.js
function get(object, path, defaultValue) {
  var result = object == null ? void 0 : baseGet_default(object, path);
  return result === void 0 ? defaultValue : result;
}
var get_default = get;

// node_modules/lodash-es/_baseSlice.js
function baseSlice(array, start, end) {
  var index = -1, length = array.length;
  if (start < 0) {
    start = -start > length ? 0 : length + start;
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : end - start >>> 0;
  start >>>= 0;
  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}
var baseSlice_default = baseSlice;

// node_modules/lodash-es/last.js
function last(array) {
  var length = array == null ? 0 : array.length;
  return length ? array[length - 1] : void 0;
}
var last_default = last;

// node_modules/lodash-es/_parent.js
function parent(object, path) {
  return path.length < 2 ? object : baseGet_default(object, baseSlice_default(path, 0, -1));
}
var parent_default = parent;

// node_modules/lodash-es/_baseUnset.js
function baseUnset(object, path) {
  path = castPath_default(path, object);
  object = parent_default(object, path);
  return object == null || delete object[toKey_default(last_default(path))];
}
var baseUnset_default = baseUnset;

// node_modules/lodash-es/_baseSet.js
function baseSet(object, path, value, customizer) {
  if (!isObject_default(object)) {
    return object;
  }
  path = castPath_default(path, object);
  var index = -1, length = path.length, lastIndex = length - 1, nested = object;
  while (nested != null && ++index < length) {
    var key = toKey_default(path[index]), newValue = value;
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      return object;
    }
    if (index != lastIndex) {
      var objValue = nested[key];
      newValue = customizer ? customizer(objValue, key, nested) : void 0;
      if (newValue === void 0) {
        newValue = isObject_default(objValue) ? objValue : isIndex_default(path[index + 1]) ? [] : {};
      }
    }
    assignValue_default(nested, key, newValue);
    nested = nested[key];
  }
  return object;
}
var baseSet_default = baseSet;

// node_modules/lodash-es/set.js
function set(object, path, value) {
  return object == null ? object : baseSet_default(object, path, value);
}
var set_default = set;

// node_modules/lodash-es/unset.js
function unset(object, path) {
  return object == null ? true : baseUnset_default(object, path);
}
var unset_default = unset;

// src/state.js
var $State = class {
  #state;
  /**
   * Creates a new state instance.
   * @param {string} name - Name of the state instance.
   * @param {object} state - Default state object.
   */
  constructor(name, state = {}) {
    this.name = name;
    this.#state = v.from(state);
  }
  /**
   * Sets a value at a specific path within the state object.
   * @param {string|string[]} path - The path to set.
   * @param {*} value - The value to set.
   * @returns {this}
   */
  set(path, value) {
    set_default(this.#state, path, value);
    return this;
  }
  /**
   * Gets a value at a specific path within the state object.
   * If no path is provided, returns the entire state object.
   * @param {string|string[]} [path] - The path to get.
   * @returns {*}
   */
  get(path = null) {
    if (!path)
      return this.json();
    return get_default(this.#state, path);
  }
  /**
   * Deletes a value at a specific path within the state object.
   * @param {string|string[]} path - The path to delete.
   */
  delete(path) {
    return unset_default(this.#state, path);
  }
  /**
   * Syncs state changes to an emitter.
   * @param {EventEmitter} emitter - The emitter to sync changes to.
   */
  sync(emitter) {
    this.onChange((changes) => {
      let _changes = [];
      for (const change of changes) {
        _changes.push({
          type: change.type,
          path: change.path,
          value: change.value
        });
      }
      emitter.emit(`sync:${this.name}`, _changes);
    });
    emitter.on(`sync:${this.name}:init`, () => {
      emitter.emit(`sync:${this.name}:init`, this.get());
    });
  }
  /**
   * Subscribes to changes at a specific path within the state object.
   * @param {string} path
   * @param {onChange} callback
   */
  subscribe(path, callback) {
    v.observe(this.#state, callback, { path });
  }
  /**
   * Subscribes to changes in the entire state object.
   * @param {onChange} callback
   */
  onChange(callback) {
    v.observe(this.#state, (changes) => {
      callback(changes);
    });
  }
  /**
   * Returns the entire state as JSON object.
   * @returns {object}
   */
  json() {
    return JSON.parse(JSON.stringify(this.#state));
  }
};

// adapters/geckos.js
var Client = class extends $Client {
  #client;
  constructor(client) {
    super(client.id);
    this.#client = client;
  }
  emit(eventName, ...args) {
    this.#client.emit(eventName, ...args);
  }
  on(eventName, callback) {
    this.#client.on(eventName, (data) => {
      try {
        callback(this, data);
      } catch (error) {
        console.log(error);
      }
    });
  }
  onDisconnect(callback) {
    try {
      this.#client.onDisconnect(callback);
    } catch (error) {
      console.log(error);
    }
  }
};
var Server = class extends $Server {
  #io;
  #port;
  #cfg;
  constructor(args = { port: 9208 }) {
    super();
    let { port } = args;
    this.isRunning = false;
    this.#port = port;
    this.#cfg = {
      iceServers: iceServers_default
    };
  }
  client(client) {
    return new Client(client);
  }
  emit(eventName = "", ...args) {
    if (this.isRunning)
      this.#io.emit(eventName, args);
  }
  listen() {
    this.#io = lib_default(this.#cfg);
    this.#io.listen(this.#port);
    this.#io.onConnection((client) => {
      this.connect(this.client(client));
    });
    this.isRunning = true;
  }
  onSetup() {
    this.setAuthorization(this.authorization);
  }
  setAuthorization(authorization) {
    if (typeof authorization === "function") {
      this.#cfg.cors = { allowAuthorization: true };
      this.#cfg.authorization = authorization;
    } else
      throw new Error("authorization is not a function.");
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Server
});
/*! Bundled license information:

@yandeu/events/cjs/index.js:
  (**
   * @package      npmjs.com/package/@yandeu/events (events.min.js)
   *
   * @author       Arnout Kazemier (https://github.com/3rd-Eden)
   * @copyright    Copyright (c) 2014 Arnout Kazemier
   * @license      {@link https://github.com/primus/eventemitter3/blob/master/LICENSE|MIT}
   *
   * @author       Yannick Deubel (https://github.com/yandeu)
   * @copyright    Copyright (c) 2021 Yannick Deubel; Project Url: https://github.com/yandeu/events
   * @license      {@link https://github.com/yandeu/events/blob/master/LICENSE|MIT}
   *)

lodash-es/lodash.js:
  (**
   * @license
   * Lodash (Custom Build) <https://lodash.com/>
   * Build: `lodash modularize exports="es" -o ./`
   * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
   * Released under MIT license <https://lodash.com/license>
   * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
   * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
   *)
*/
