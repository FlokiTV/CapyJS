
if (typeof gdjs.evtsExt__DevToolkit__showPanel !== "undefined") {
  gdjs.evtsExt__DevToolkit__showPanel.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__showPanel = {};

gdjs.evtsExt__DevToolkit__showPanel.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__showPanel.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DevToolkit__showPanel.userFunc0x8ab2b0 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let show = eventsFunctionContext.getArgument("Show")
gdjs._GameStats.show(show)
    
};
gdjs.evtsExt__DevToolkit__showPanel.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__showPanel.userFunc0x8ab2b0(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DevToolkit__showPanel.func = function(runtimeScene, Show, parentEventsFunctionContext) {
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
if (argName === "Show") return Show;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DevToolkit__showPanel.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__showPanel.registeredGdjsCallbacks = [];