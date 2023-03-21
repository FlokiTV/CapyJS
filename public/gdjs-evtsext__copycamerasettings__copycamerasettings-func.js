
if (typeof gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings !== "undefined") {
  gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings = {};

gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_0 = {val:false};
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1 = {val:false};
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition1IsTrue_1 = {val:false};


gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1 = gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0;
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("CloneX") : false);
}
}if (gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, gdjs.evtTools.camera.getCameraX(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SourceLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SourceCamera")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("DestinationLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationCamera")) || 0 : 0));
}}

}


{


gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1 = gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0;
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("CloneY") : false);
}
}if (gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SourceLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SourceCamera")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("DestinationLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationCamera")) || 0 : 0));
}}

}


{


gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1 = gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0;
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("CloneZoom") : false);
}
}if (gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, gdjs.evtTools.camera.getCameraZoom(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SourceLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SourceCamera")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("DestinationLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationCamera")) || 0 : 0));
}}

}


{


gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0.val = false;
{
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1 = gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0;
gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("CloneAngle") : false);
}
}if (gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.condition0IsTrue_0.val) {
{gdjs.evtTools.camera.setCameraRotation(runtimeScene, gdjs.evtTools.camera.getCameraRotation(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("SourceLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("SourceCamera")) || 0 : 0)), (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("DestinationLayer") : ""), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("DestinationCamera")) || 0 : 0));
}}

}


};

gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func = function(runtimeScene, SourceLayer, SourceCamera, DestinationLayer, DestinationCamera, CloneX, CloneY, CloneZoom, CloneAngle, parentEventsFunctionContext) {
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
if (argName === "SourceLayer") return SourceLayer;
if (argName === "SourceCamera") return SourceCamera;
if (argName === "DestinationLayer") return DestinationLayer;
if (argName === "DestinationCamera") return DestinationCamera;
if (argName === "CloneX") return CloneX;
if (argName === "CloneY") return CloneY;
if (argName === "CloneZoom") return CloneZoom;
if (argName === "CloneAngle") return CloneAngle;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.registeredGdjsCallbacks = [];