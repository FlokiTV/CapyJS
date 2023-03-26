
if (typeof gdjs.evtsExt__GeckosClient__connect !== "undefined") {
  gdjs.evtsExt__GeckosClient__connect.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GeckosClient__connect = {};

gdjs.evtsExt__GeckosClient__connect.conditionTrue_0 = {val:false};
gdjs.evtsExt__GeckosClient__connect.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__GeckosClient__connect.userFunc0x7fff78 = function(runtimeScene, eventsFunctionContext) {
"use strict";
/**
 * start geckos client with these options
 * @param options.iceServers Default: []
 * @param options.iceTransportPolicy Default: 'all'
 * @param options.label Default: 'geckos.io'
 * @param options.port default is 9208
 * @param options.url default is `${location.protocol}//${location.hostname}`
 */
const url = eventsFunctionContext.getArgument("url")
const dev = eventsFunctionContext.getArgument("dev")
const channel = gdjs._geckos({
  url: dev ? "http://127.0.0.1" : url,
  port: 3000
}) // default port is 9208
const log = (...data) => {
  if (dev) console.log(...data)
}
const maxMessages = 5
gdjs._geckosClient = {
  channel,
  isConnected: false,
  events: {},
  lastValues: {},
  get(event) {
    return gdjs._geckosClient.lastValues[event] || "";
  },
  has(event) {
    if (!gdjs._geckosClient.events[event]) return false;
    let value = gdjs._geckosClient.events[event].shift();
    if (!value) return false;
    gdjs._geckosClient.lastValues[event] = value;
    return true;
  },
  hasEvent(event) {
    return event in gdjs._geckosClient.events
  },
  register(event) {
    log("register " + event);
    gdjs._geckosClient.events[event] = [];
    gdjs._geckosClient.channel.on(event, data => {
      gdjs._geckosClient.events[event].push(data);
      if (gdjs._geckosClient.events[event].length > maxMessages) {
        log("shift")
        gdjs._geckosClient.events[event].shift();
      }
    })
  }
}

channel.onConnect(error => {
  gdjs._geckosClient.isConnected = true;
  if (error) {
    console.error(error.message);
    gdjs._geckosClient.isConnected = false;
    return;
  }
  // listens for a disconnection
  channel.onDisconnect(() => {
    console.log("onDisconnect")
    gdjs._geckosClient.isConnected = false;
  })
})

// channel.onConnect(error => {
//   if (error) console.error(error.message)
//   // listens for a disconnection
//   channel.onDisconnect(() => {})
//   // listens for a custom event from the server
//   channel.on('chat message', data => {})
//   // emits a message to the server
//   channel.emit('chat message', 'Hi!')
//   // closes the WebRTC connection
//   channel.close()
// })
};
gdjs.evtsExt__GeckosClient__connect.userFunc0x800008 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs.isTabActive = true

window.onfocus = function () { 
  gdjs.isTabActive = true; 
}; 

window.onblur = function () { 
  gdjs.isTabActive = false; 
}; 


};
gdjs.evtsExt__GeckosClient__connect.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GeckosClient__connect.userFunc0x7fff78(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


gdjs.evtsExt__GeckosClient__connect.userFunc0x800008(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GeckosClient__connect.func = function(runtimeScene, url, dev, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "url") return url;
if (argName === "dev") return dev;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GeckosClient__connect.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GeckosClient__connect.registeredGdjsCallbacks = [];