
if (typeof gdjs.evtsExt__Essentials____PinObjects !== "undefined") {
  gdjs.evtsExt__Essentials____PinObjects.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Essentials____PinObjects = {};
gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1= [];
gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects2= [];
gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1= [];
gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects2= [];

gdjs.evtsExt__Essentials____PinObjects.conditionTrue_0 = {val:false};
gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Essentials____PinObjects.condition2IsTrue_0 = {val:false};
gdjs.evtsExt__Essentials____PinObjects.conditionTrue_1 = {val:false};
gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_1 = {val:false};
gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_1 = {val:false};
gdjs.evtsExt__Essentials____PinObjects.condition2IsTrue_1 = {val:false};


gdjs.evtsExt__Essentials____PinObjects.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0.val = false;
gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0.val = false;
{
{gdjs.evtsExt__Essentials____PinObjects.conditionTrue_1 = gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0;
gdjs.evtsExt__Essentials____PinObjects.conditionTrue_1.val = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Reset") : false);
}
}if ( gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0.val ) {
{
{gdjs.evtsExt__Essentials____PinObjects.conditionTrue_1 = gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0;
gdjs.evtsExt__Essentials____PinObjects.conditionTrue_1.val = eventsFunctionContext.getOnceTriggers().triggerOnce(8572500);
}
}}
if (gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("OBJ"), gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1);
{for(var i = 0, len = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].returnVariable(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("angle")).setNumber(0);
}
}{for(var i = 0, len = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].returnVariable(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("dist")).setNumber(0);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("OBJ"), gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1);

gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0.val = false;
gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariableNumber(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("dist")) == 0 ) {
        gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[k] = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length = k;}if ( gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariableNumber(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("angle")) == 0 ) {
        gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[k] = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length = k;}}
if (gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Container"), gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1);
/* Reuse gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].returnVariable(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("angle")).setNumber(gdjs.evtTools.common.angleBetweenPositions((gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getCenterXInScene()), (gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getCenterYInScene()), (( gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1[0].getCenterYInScene())));
}
}{for(var i = 0, len = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].returnVariable(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("dist")).setNumber(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getCenterXInScene()), (gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getCenterYInScene()), (( gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1[0].getCenterXInScene()), (( gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1[0].getCenterYInScene())));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("OBJ"), gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1);

gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0.val = false;
gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariableNumber(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("angle")) != 0 ) {
        gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[k] = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length = k;}if ( gdjs.evtsExt__Essentials____PinObjects.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariableNumber(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("dist")) != 0 ) {
        gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[k] = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length = k;}}
if (gdjs.evtsExt__Essentials____PinObjects.condition1IsTrue_0.val) {
gdjs.copyArray(eventsFunctionContext.getObjects("Container"), gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1);
/* Reuse gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].putAroundObject((gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1.length !== 0 ? gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1[0] : null), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("dist"))), 180 + (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1[i].getVariables().get("angle"))));
}
}}

}


};

gdjs.evtsExt__Essentials____PinObjects.func = function(runtimeScene, OBJ, Container, Reset, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"OBJ": OBJ
, "Container": Container
},
  _objectArraysMap: {
"OBJ": gdjs.objectsListsToArray(OBJ)
, "Container": gdjs.objectsListsToArray(Container)
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
if (argName === "Reset") return Reset;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects1.length = 0;
gdjs.evtsExt__Essentials____PinObjects.GDOBJObjects2.length = 0;
gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects1.length = 0;
gdjs.evtsExt__Essentials____PinObjects.GDContainerObjects2.length = 0;

gdjs.evtsExt__Essentials____PinObjects.eventsList0(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Essentials____PinObjects.registeredGdjsCallbacks = [];