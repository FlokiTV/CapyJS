
if (typeof gdjs.evtsExt__GeckosClient__listen !== "undefined") {
  gdjs.evtsExt__GeckosClient__listen.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GeckosClient__listen = {};

gdjs.evtsExt__GeckosClient__listen.conditionTrue_0 = {val:false};
gdjs.evtsExt__GeckosClient__listen.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__GeckosClient__listen.userFunc0x75c8e0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let event = eventsFunctionContext.getArgument("eventName");
gdjs._geckosClient.register(event);
console.log("listen " + event);
};
gdjs.evtsExt__GeckosClient__listen.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GeckosClient__listen.userFunc0x75c8e0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GeckosClient__listen.func = function(runtimeScene, eventName, parentEventsFunctionContext) {
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
if (argName === "eventName") return eventName;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GeckosClient__listen.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__GeckosClient__listen.registeredGdjsCallbacks = [];