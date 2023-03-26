
if (typeof gdjs.evtsExt__GeckosClient__onEvent !== "undefined") {
  gdjs.evtsExt__GeckosClient__onEvent.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GeckosClient__onEvent = {};

gdjs.evtsExt__GeckosClient__onEvent.conditionTrue_0 = {val:false};
gdjs.evtsExt__GeckosClient__onEvent.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__GeckosClient__onEvent.userFunc0x805280 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let event = eventsFunctionContext.getArgument("eventName");
if(!gdjs._geckosClient.hasEvent(event)) gdjs._geckosClient.register(event)
let has = gdjs._geckosClient.has(event);
eventsFunctionContext.returnValue = has;
};
gdjs.evtsExt__GeckosClient__onEvent.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__GeckosClient__onEvent.userFunc0x805280(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GeckosClient__onEvent.func = function(runtimeScene, eventName, parentEventsFunctionContext) {
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


gdjs.evtsExt__GeckosClient__onEvent.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__GeckosClient__onEvent.registeredGdjsCallbacks = [];