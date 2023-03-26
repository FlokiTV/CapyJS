
if (typeof gdjs.evtsExt__GeckosClient__getObjectByVariable !== "undefined") {
  gdjs.evtsExt__GeckosClient__getObjectByVariable.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GeckosClient__getObjectByVariable = {};
gdjs.evtsExt__GeckosClient__getObjectByVariable.GDobjectsObjects1= [];

gdjs.evtsExt__GeckosClient__getObjectByVariable.conditionTrue_0 = {val:false};
gdjs.evtsExt__GeckosClient__getObjectByVariable.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__GeckosClient__getObjectByVariable.userFunc0x88bd10 = function(runtimeScene, objects, eventsFunctionContext) {
"use strict";
let varName = eventsFunctionContext.getArgument("varName")
let varValue = eventsFunctionContext.getArgument("varValue")
let objs = [];
if (!objects.length){
    eventsFunctionContext.returnValue = false
    return
}
for (let i = 0; i < objects.length; i++) {
    /** @type gdjs.RuntimeObject */
    let obj = objects[i];
    if (obj.getVariables().has(varName)) {
        console.log(obj.getVariables().get(varName).getAsString() == varValue)
        if (obj.getVariables().get(varName).getAsString() == varValue) {
            objs.push(obj);
        }
    }
}

eventsFunctionContext.returnValue = objs.length ? objs : false

};
gdjs.evtsExt__GeckosClient__getObjectByVariable.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("objects"), gdjs.evtsExt__GeckosClient__getObjectByVariable.GDobjectsObjects1);

var objects = [];
objects.push.apply(objects,gdjs.evtsExt__GeckosClient__getObjectByVariable.GDobjectsObjects1);
gdjs.evtsExt__GeckosClient__getObjectByVariable.userFunc0x88bd10(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__GeckosClient__getObjectByVariable.func = function(runtimeScene, objects, varName, varValue, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"objects": objects
},
  _objectArraysMap: {
"objects": gdjs.objectsListsToArray(objects)
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
if (argName === "varName") return varName;
if (argName === "varValue") return varValue;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__GeckosClient__getObjectByVariable.GDobjectsObjects1.length = 0;

gdjs.evtsExt__GeckosClient__getObjectByVariable.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__GeckosClient__getObjectByVariable.registeredGdjsCallbacks = [];