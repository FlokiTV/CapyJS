
if (typeof gdjs.evtsExt__Essentials__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__Essentials__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Essentials__onFirstSceneLoaded = {};

gdjs.evtsExt__Essentials__onFirstSceneLoaded.conditionTrue_0 = {val:false};
gdjs.evtsExt__Essentials__onFirstSceneLoaded.condition0IsTrue_0 = {val:false};


gdjs.evtsExt__Essentials__onFirstSceneLoaded.userFunc0x81c648 = function(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._es = {}

gdjs._es.uuid = {
    gen: () => {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
            (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        )
    },
    getObject: uuid =>{
        let obj = runtimeScene._allInstancesList.filter( e =>{
            if(!e._behaviorsTable.items.EsUUID) return false
            return e._behaviorsTable.items.EsUUID._behaviorData.UUID == uuid
        })
        return obj ? obj[0] : false
    }
}

};
gdjs.evtsExt__Essentials__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Essentials__onFirstSceneLoaded.userFunc0x81c648(runtimeScene, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__Essentials__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Essentials__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Essentials__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__Essentials__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Essentials__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__Essentials__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__Essentials__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
