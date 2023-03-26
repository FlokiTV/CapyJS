
if (typeof gdjs.evtsExt__DevToolkit__onScenePreEvents !== "undefined") {
  gdjs.evtsExt__DevToolkit__onScenePreEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__onScenePreEvents = {};

gdjs.evtsExt__DevToolkit__onScenePreEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__onScenePreEvents.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DevToolkit__onScenePreEvents.userFunc0x8a4b30 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let stats = gdjs._GameStats
if(false && stats.labels.fps){ //try to reload stats if fps = infinity
    let fpsMeasures = stats.labels.fps
    fpsMeasures = Math.round(1000 / fpsMeasures[fpsMeasures.length-1])
    if(fpsMeasures > 100000) {
        Object.keys(stats.labels).forEach( o => stats.labels[o] = [])
        stats.currentTime = 0
        stats.prevTime = 0
        stats.previousAverageMS = 0
        stats.previousMaxMS = 0
        console.log("RELOAD STATS "+fpsMeasures)
    }
}
stats.begin()
};
gdjs.evtsExt__DevToolkit__onScenePreEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__onScenePreEvents.userFunc0x8a4b30(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__DevToolkit__onScenePreEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DevToolkit__onScenePreEvents.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__onScenePreEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__DevToolkit__onScenePreEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__DevToolkit__onScenePreEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePreEventsCallback(gdjs.evtsExt__DevToolkit__onScenePreEvents.registeredGdjsCallbacks[gdjs.evtsExt__DevToolkit__onScenePreEvents.registeredGdjsCallbacks.length - 1]);
