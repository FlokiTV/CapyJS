
if (typeof gdjs.evtsExt__DevToolkit__addPanel !== "undefined") {
  gdjs.evtsExt__DevToolkit__addPanel.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__DevToolkit__addPanel = {};

gdjs.evtsExt__DevToolkit__addPanel.conditionTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__addPanel.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__addPanel.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__DevToolkit__addPanel.conditionTrue_1 = {val:false};
gdjs.evtsExt__DevToolkit__addPanel.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__DevToolkit__addPanel.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__DevToolkit__addPanel.userFunc0x8a7bc8 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let add = setInterval(()=>{
    if(gdjs._vstats.isLoad){
        gdjs._vstats.app.list[eventsFunctionContext.getArgument("Title")] = {
            key: eventsFunctionContext.getArgument("Variable"),
            value: runtimeScene._variables.get(eventsFunctionContext.getArgument("Variable")).getValue()
        }
        clearTimeout(add)
    }
}, 500)
};
gdjs.evtsExt__DevToolkit__addPanel.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__addPanel.userFunc0x8a7bc8(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};gdjs.evtsExt__DevToolkit__addPanel.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DevToolkit__addPanel.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__DevToolkit__addPanel.conditionTrue_1 = gdjs.evtsExt__DevToolkit__addPanel.condition0IsTrue_0;
gdjs.evtsExt__DevToolkit__addPanel.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(9185644);
}
}if (gdjs.evtsExt__DevToolkit__addPanel.condition0IsTrue_0.val) {

{ //Subevents
gdjs.evtsExt__DevToolkit__addPanel.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__DevToolkit__addPanel.func = function(runtimeScene, Title, Variable, parentEventsFunctionContext) {
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
if (argName === "Variable") return Variable;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__DevToolkit__addPanel.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__DevToolkit__addPanel.registeredGdjsCallbacks = [];