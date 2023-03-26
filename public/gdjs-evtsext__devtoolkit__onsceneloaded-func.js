
if (typeof gdjs.evtsExt__DevToolkit__onSceneLoaded !== "undefined") {
  gdjs.evtsExt__DevToolkit__onSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__onSceneLoaded = {};

gdjs.evtsExt__DevToolkit__onSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__onSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__DevToolkit__onSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "STATS");
}}

}


};

gdjs.evtsExt__DevToolkit__onSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__DevToolkit__onSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__onSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__DevToolkit__onSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__DevToolkit__onSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneLoadedCallback(gdjs.evtsExt__DevToolkit__onSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__DevToolkit__onSceneLoaded.registeredGdjsCallbacks.length - 1]);
