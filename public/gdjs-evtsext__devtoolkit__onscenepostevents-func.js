
if (typeof gdjs.evtsExt__DevToolkit__onScenePostEvents !== "undefined") {
  gdjs.evtsExt__DevToolkit__onScenePostEvents.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__onScenePostEvents = {};

gdjs.evtsExt__DevToolkit__onScenePostEvents.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__onScenePostEvents.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__onScenePostEvents.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DevToolkit__onScenePostEvents.userFunc0x8a4b30 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let stats = gdjs._GameStats
stats.end()
};
gdjs.evtsExt__DevToolkit__onScenePostEvents.userFunc0x75edd8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(gdjs._vstats.isLoad)
    gdjs._vstats.app.update()
};
gdjs.evtsExt__DevToolkit__onScenePostEvents.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__onScenePostEvents.userFunc0x75edd8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


{
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "STATS");
}}

}


};gdjs.evtsExt__DevToolkit__onScenePostEvents.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__onScenePostEvents.userFunc0x8a4b30(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


{


gdjs.evtsExt__DevToolkit__onScenePostEvents.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DevToolkit__onScenePostEvents.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 0.1, "STATS");
}if (gdjs.evtsExt__DevToolkit__onScenePostEvents.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DevToolkit__onScenePostEvents.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DevToolkit__onScenePostEvents.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__DevToolkit__onScenePostEvents.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__onScenePostEvents.registeredGdjsCallbacks = [];
gdjs.evtsExt__DevToolkit__onScenePostEvents.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__DevToolkit__onScenePostEvents.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeScenePostEventsCallback(gdjs.evtsExt__DevToolkit__onScenePostEvents.registeredGdjsCallbacks[gdjs.evtsExt__DevToolkit__onScenePostEvents.registeredGdjsCallbacks.length - 1]);
