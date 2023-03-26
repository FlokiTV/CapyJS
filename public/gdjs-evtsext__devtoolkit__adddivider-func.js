
if (typeof gdjs.evtsExt__DevToolkit__addDivider !== "undefined") {
  gdjs.evtsExt__DevToolkit__addDivider.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__addDivider = {};

gdjs.evtsExt__DevToolkit__addDivider.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__addDivider.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__addDivider.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__addDivider.conditionTrue_1 = {val:false};
gdjs.evtsExt__DevToolkit__addDivider.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DevToolkit__addDivider.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DevToolkit__addDivider.userFunc0x8a7c50 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let add = setInterval(()=>{
    if(gdjs._vstats.isLoad){
        gdjs._vstats.app.list[eventsFunctionContext.getArgument("Title")] = {
            key: false,
            value: ""
        }
        clearTimeout(add)
    }
}, 500)
};
gdjs.evtsExt__DevToolkit__addDivider.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__addDivider.userFunc0x8a7c50(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__DevToolkit__addDivider.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__addDivider.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DevToolkit__addDivider.conditionTrue_1 = gdjs.evtsExt__DevToolkit__addDivider.condition0IsTrue_0;
gdjs.evtsExt__DevToolkit__addDivider.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9187476);
}
}if (gdjs.evtsExt__DevToolkit__addDivider.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DevToolkit__addDivider.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DevToolkit__addDivider.func = function(runtimeScene, Title, parentEventsFunctionContext) {
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
if (argName === "Title") return Title;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DevToolkit__addDivider.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__addDivider.registeredGdjsCallbacks = [];