
if (typeof gdjs.evtsExt__Essentials____setObjectPositionByPoint !== "undefined") {
  gdjs.evtsExt__Essentials____setObjectPositionByPoint.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Essentials____setObjectPositionByPoint = {};
gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1= [];
gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects2= [];

gdjs.evtsExt__Essentials____setObjectPositionByPoint.conditionTrue_0 = {val:false};
gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition0IsTrue_0 = {val:false};
gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition1IsTrue_0 = {val:false};
gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition2IsTrue_0 = {val:false};


gdjs.evtsExt__Essentials____setObjectPositionByPoint.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{



}


{



}


};gdjs.evtsExt__Essentials____setObjectPositionByPoint.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{



}


{

gdjs.copyArray(eventsFunctionContext.getObjects("OBJ"), gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1);

gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition0IsTrue_0.val = false;
gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariableNumber(gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariables().get("_dist")) == 0 ) {
        gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[k] = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length = k;}if ( gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariableNumber(gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariables().get("_angle")) == 0 ) {
        gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[k] = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length = k;}}
if (gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].returnVariable(gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariables().get("_angle")).setNumber(gdjs.evtTools.common.angleBetweenPositions((gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getCenterXInScene()), (gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getCenterYInScene()), (gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getPointX((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Point") : ""))), (gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getPointY((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Point") : "")))));
}
}{for(var i = 0, len = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].returnVariable(gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariables().get("_dist")).setNumber(gdjs.evtTools.common.distanceBetweenPositions((gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getCenterXInScene()), (gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getCenterYInScene()), (gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getPointX((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Point") : ""))), (gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getPointY((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Point") : "")))));
}
}{/* Unknown instruction - skipped. */}{/* Unknown instruction - skipped. */}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("OBJ"), gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1);

gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition0IsTrue_0.val = false;
gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariableNumber(gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariables().get("_angle")) != 0 ) {
        gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition0IsTrue_0.val = true;
        gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[k] = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length = k;}if ( gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariableNumber(gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariables().get("_dist")) != 0 ) {
        gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition1IsTrue_0.val = true;
        gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[k] = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length = k;}}
if (gdjs.evtsExt__Essentials____setObjectPositionByPoint.condition1IsTrue_0.val) {
/* Reuse gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].putAround((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("X")) || 0 : 0), (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Y")) || 0 : 0), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariables().get("_dist"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1[i].getVariables().get("_angle"))) + (typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("AngleOffset")) || 0 : 0));
}
}
{ //Subevents
gdjs.evtsExt__Essentials____setObjectPositionByPoint.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Essentials____setObjectPositionByPoint.func = function(runtimeScene, OBJ, X, Y, Point, AngleOffset, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"OBJ": OBJ
},
  _objectArraysMap: {
"OBJ": gdjs.objectsListsToArray(OBJ)
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
if (argName === "X") return X;
if (argName === "Y") return Y;
if (argName === "Point") return Point;
if (argName === "AngleOffset") return AngleOffset;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects1.length = 0;
gdjs.evtsExt__Essentials____setObjectPositionByPoint.GDOBJObjects2.length = 0;

gdjs.evtsExt__Essentials____setObjectPositionByPoint.eventsList1(runtimeScene, eventsFunctionContext);

return;
}

gdjs.evtsExt__Essentials____setObjectPositionByPoint.registeredGdjsCallbacks = [];