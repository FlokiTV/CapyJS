
if (typeof gdjs.evtsExt__DevToolkit__ConsoleLog !== "undefined") {
  gdjs.evtsExt__DevToolkit__ConsoleLog.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__ConsoleLog = {};

gdjs.evtsExt__DevToolkit__ConsoleLog.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__ConsoleLog.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DevToolkit__ConsoleLog.userFunc0x89e310 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let log = eventsFunctionContext.getArgument("Log")
if(gdjs._vstats.isLoad) 
    gdjs._vstats.app.pushLog({
        cmd: "log",
        log: log
    })
    
};
gdjs.evtsExt__DevToolkit__ConsoleLog.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__ConsoleLog.userFunc0x89e310(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DevToolkit__ConsoleLog.func = function(runtimeScene, Log, parentEventsFunctionContext) {
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
if (argName === "Log") return Log;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DevToolkit__ConsoleLog.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__ConsoleLog.registeredGdjsCallbacks = [];