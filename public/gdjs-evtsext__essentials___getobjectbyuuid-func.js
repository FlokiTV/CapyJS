
if (typeof gdjs.evtsExt__Essentials___getObjectByUUID !== "undefined") {
  gdjs.evtsExt__Essentials___getObjectByUUID.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Essentials___getObjectByUUID = {};

gdjs.evtsExt__Essentials___getObjectByUUID.conditionTrue_0 = {val:false};
gdjs.evtsExt__Essentials___getObjectByUUID.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Essentials___getObjectByUUID.userFunc0x81c648 = function(runtimeScene, eventsFunctionContext) {
"use strict";
let uuid = eventsFunctionContext.getArgument("UUID")
eventsFunctionContext.returnValue = gdjs._es.uuid.getObject(uuid)

};
gdjs.evtsExt__Essentials___getObjectByUUID.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Essentials___getObjectByUUID.userFunc0x81c648(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Essentials___getObjectByUUID.func = function(runtimeScene, UUID, parentEventsFunctionContext) {
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
if (argName === "UUID") return UUID;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Essentials___getObjectByUUID.eventsList0(runtimeScene, eventsFunctionContext);

return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Essentials___getObjectByUUID.registeredGdjsCallbacks = [];