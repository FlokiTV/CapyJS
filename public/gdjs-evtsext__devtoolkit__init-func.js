
if (typeof gdjs.evtsExt__DevToolkit__init !== "undefined") {
  gdjs.evtsExt__DevToolkit__init.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__init = {};

gdjs.evtsExt__DevToolkit__init.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__init.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__init.condition1IsTrue_0 = {val:false};


gdjs.evtsExt__DevToolkit__init.userFunc0x8a0b00 = function(runtimeScene, eventsFunctionContext) {
"use strict";
if(gdjs._vstats.isLoad) 
    gdjs._vstats.app.logs = []
};
gdjs.evtsExt__DevToolkit__init.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__init.userFunc0x8a0b00(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__DevToolkit__init.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__init.condition0IsTrue_0.val = false;
{
gdjs.evtsExt__DevToolkit__init.condition0IsTrue_0.val = gdjs.evtsExt__DevToolkit__triggerCommand.func(runtimeScene, "clear", "", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.evtsExt__DevToolkit__init.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DevToolkit__init.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DevToolkit__init.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__DevToolkit__init.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__init.registeredGdjsCallbacks = [];