gdjs.gameCode = {};
gdjs.gameCode.GDplayerObjects1= [];
gdjs.gameCode.GDplayerObjects2= [];
gdjs.gameCode.GDplayerObjects3= [];
gdjs.gameCode.GDplayerObjects4= [];
gdjs.gameCode.GDtrailObjects1= [];
gdjs.gameCode.GDtrailObjects2= [];
gdjs.gameCode.GDtrailObjects3= [];
gdjs.gameCode.GDtrailObjects4= [];
gdjs.gameCode.GDwallObjects1= [];
gdjs.gameCode.GDwallObjects2= [];
gdjs.gameCode.GDwallObjects3= [];
gdjs.gameCode.GDwallObjects4= [];
gdjs.gameCode.GDlineObjects1= [];
gdjs.gameCode.GDlineObjects2= [];
gdjs.gameCode.GDlineObjects3= [];
gdjs.gameCode.GDlineObjects4= [];
gdjs.gameCode.GDraycastObjects1= [];
gdjs.gameCode.GDraycastObjects2= [];
gdjs.gameCode.GDraycastObjects3= [];
gdjs.gameCode.GDraycastObjects4= [];
gdjs.gameCode.GDNewTextObjects1= [];
gdjs.gameCode.GDNewTextObjects2= [];
gdjs.gameCode.GDNewTextObjects3= [];
gdjs.gameCode.GDNewTextObjects4= [];
gdjs.gameCode.GDwall2Objects1= [];
gdjs.gameCode.GDwall2Objects2= [];
gdjs.gameCode.GDwall2Objects3= [];
gdjs.gameCode.GDwall2Objects4= [];
gdjs.gameCode.GDwall3Objects1= [];
gdjs.gameCode.GDwall3Objects2= [];
gdjs.gameCode.GDwall3Objects3= [];
gdjs.gameCode.GDwall3Objects4= [];

gdjs.gameCode.conditionTrue_0 = {val:false};
gdjs.gameCode.condition0IsTrue_0 = {val:false};
gdjs.gameCode.condition1IsTrue_0 = {val:false};
gdjs.gameCode.condition2IsTrue_0 = {val:false};
gdjs.gameCode.conditionTrue_1 = {val:false};
gdjs.gameCode.condition0IsTrue_1 = {val:false};
gdjs.gameCode.condition1IsTrue_1 = {val:false};
gdjs.gameCode.condition2IsTrue_1 = {val:false};


gdjs.gameCode.eventsList0 = function(runtimeScene) {

{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("trail"), gdjs.gameCode.GDtrailObjects1);
{for(var i = 0, len = gdjs.gameCode.GDtrailObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDtrailObjects1[i].drawLineV2(0, 0, gdjs.evtTools.common.getXFromAngleAndDistance(gdjs.evtTools.common.angleBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), gdjs.evtTools.common.distanceBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))), gdjs.evtTools.common.getYFromAngleAndDistance(gdjs.evtTools.common.angleBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), gdjs.evtTools.common.distanceBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))), 1);
}
}{for(var i = 0, len = gdjs.gameCode.GDtrailObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDtrailObjects1[i].drawCircle(gdjs.evtTools.common.getXFromAngleAndDistance(gdjs.evtTools.common.angleBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), gdjs.evtTools.common.distanceBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))), gdjs.evtTools.common.getYFromAngleAndDistance(gdjs.evtTools.common.angleBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)), gdjs.evtTools.common.distanceBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0))), 4);
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.gameCode.GDwallObjects1});
gdjs.gameCode.userFunc0x819868 = function(runtimeScene, objects) {
"use strict";
function angleReflect(incidenceAngle, surfaceAngle){
  const a = surfaceAngle * 2 - incidenceAngle;
  return a >= 360 ? a - 360 : a < 0 ? a + 360 : a;
}

let obj = objects[0]
let surface = obj.getVariables().get("surface_angle").getAsNumber()
let angle = obj.getVariables().get("angle").getAsNumber()

obj.getVariables().get("angleNormalized").setNumber(angleReflect(angle, surface))
};
gdjs.gameCode.eventsList1 = function(runtimeScene) {

{

/* Reuse gdjs.gameCode.GDraycastObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.gameCode.GDraycastObjects1);
gdjs.gameCode.userFunc0x819868(runtimeScene, objects);

}


};gdjs.gameCode.eventsList2 = function(runtimeScene) {

{


{
gdjs.copyArray(gdjs.gameCode.GDplayerObjects2, gdjs.gameCode.GDplayerObjects3);

{for(var i = 0, len = gdjs.gameCode.GDplayerObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects3[i].returnVariable(gdjs.gameCode.GDplayerObjects3[i].getVariables().get("force")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDplayerObjects3[i].getVariables().get("distance"))));
}
}}

}


{

/* Reuse gdjs.gameCode.GDplayerObjects2 */

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("force")) > 200 ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].returnVariable(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("force")).setNumber(200);
}
}}

}


};gdjs.gameCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("raycast"), gdjs.gameCode.GDraycastObjects3);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDraycastObjects3.length;i<l;++i) {
    if ( gdjs.gameCode.GDraycastObjects3[i].getVariableBoolean(gdjs.gameCode.GDraycastObjects3[i].getVariables().get("trigger"), true) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDraycastObjects3[k] = gdjs.gameCode.GDraycastObjects3[i];
        ++k;
    }
}
gdjs.gameCode.GDraycastObjects3.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.gameCode.GDlineObjects1, gdjs.gameCode.GDlineObjects3);

gdjs.copyArray(gdjs.gameCode.GDplayerObjects2, gdjs.gameCode.GDplayerObjects3);

/* Reuse gdjs.gameCode.GDraycastObjects3 */
{for(var i = 0, len = gdjs.gameCode.GDlineObjects3.length ;i < len;++i) {
    gdjs.gameCode.GDlineObjects3[i].drawLineV2(0, 0, gdjs.evtTools.common.getXFromAngleAndDistance((gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects3[0].getVariables()).get("_angleNormalized"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDraycastObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDraycastObjects3[0].getVariables()).get("distance")))), gdjs.evtTools.common.getYFromAngleAndDistance((gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects3[0].getVariables()).get("_angleNormalized"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDraycastObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDraycastObjects3[0].getVariables()).get("distance")))), 1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("raycast"), gdjs.gameCode.GDraycastObjects2);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDraycastObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDraycastObjects2[i].getVariableBoolean(gdjs.gameCode.GDraycastObjects2[i].getVariables().get("trigger"), false) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDraycastObjects2[k] = gdjs.gameCode.GDraycastObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDraycastObjects2.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.gameCode.GDlineObjects1, gdjs.gameCode.GDlineObjects2);

/* Reuse gdjs.gameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDlineObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDlineObjects2[i].drawLineV2(0, 0, gdjs.evtTools.common.getXFromAngleAndDistance((gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects2[0].getVariables()).get("_angleNormalized"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects2[0].getVariables()).get("force")))), gdjs.evtTools.common.getYFromAngleAndDistance((gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects2[0].getVariables()).get("_angleNormalized"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects2[0].getVariables()).get("force")))), 1);
}
}}

}


};gdjs.gameCode.eventsList4 = function(runtimeScene) {

{


{
}

}


};gdjs.gameCode.eventsList5 = function(runtimeScene) {

{


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8654148);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].returnVariable(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("velocity")).setNumber((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("force"))));
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].returnVariable(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("angle")).setNumber(gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("_angle"))), 360));
}
}}

}


};gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.gameCode.GDwallObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDwallObjects1Objects = Hashtable.newFrom({"wall": gdjs.gameCode.GDwallObjects1});
gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDplayerObjects1Objects = Hashtable.newFrom({"player": gdjs.gameCode.GDplayerObjects1});
gdjs.gameCode.userFunc0x827548 = function(runtimeScene, objects) {
"use strict";
function angleReflect(incidenceAngle, surfaceAngle){
  const a = surfaceAngle * 2 - incidenceAngle;
  return a >= 360 ? a - 360 : a < 0 ? a + 360 : a;
}

let obj = objects[0]
let surface = obj.getVariables().get("surface_angle").getAsNumber()
let angle = obj.getVariables().get("angle").getAsNumber()

obj.getVariables().get("angle").setNumber(angleReflect(angle, surface))
};
gdjs.gameCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.gameCode.GDplayerObjects1 */

var objects = [];
objects.push.apply(objects,gdjs.gameCode.GDplayerObjects1);
gdjs.gameCode.userFunc0x827548(runtimeScene, objects);

}


};gdjs.gameCode.eventsList7 = function(runtimeScene) {

{

/* Reuse gdjs.gameCode.GDplayerObjects1 */
/* Reuse gdjs.gameCode.GDwallObjects1 */

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDwallObjects1Objects, gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDplayerObjects1Objects, false, runtimeScene, false);
}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
{gdjs.gameCode.conditionTrue_1 = gdjs.gameCode.condition1IsTrue_0;
gdjs.gameCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8656708);
}
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
/* Reuse gdjs.gameCode.GDwallObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].returnVariable(gdjs.gameCode.GDplayerObjects1[i].getVariables().get("surface_angle")).setNumber((( gdjs.gameCode.GDwallObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDwallObjects1[0].getAngle()));
}
}
{ //Subevents
gdjs.gameCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList8 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);


gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("velocity")) == 0 ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {

{ //Subevents
gdjs.gameCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);

{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].addPolarForce((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("angle"))), (gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("velocity"))), 0);
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);


gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("velocity")) < 0 ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].returnVariable(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("velocity")).setNumber(0);
}
}}

}


{

gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);


gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("velocity")) > 0 ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].returnVariable(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("velocity")).sub(1 + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}
{ //Subevents
gdjs.gameCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.gameCode.GDplayerObjects1, gdjs.gameCode.GDplayerObjects2);


gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects2[i].getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("velocity")) == 0 ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDplayerObjects2[k] = gdjs.gameCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects2.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDplayerObjects2 */
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].returnVariable(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("_angleNormalized")).setNumber(gdjs.evtTools.common.mod((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("_angle"))), 360));
}
}
{ //Subevents
gdjs.gameCode.eventsList5(runtimeScene);} //End of subevents
}

}


{



}


{

/* Reuse gdjs.gameCode.GDplayerObjects1 */

gdjs.gameCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDplayerObjects1[i].getVariableNumber(gdjs.gameCode.GDplayerObjects1[i].getVariables().get("jump")) <= 1 ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDplayerObjects1[k] = gdjs.gameCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDplayerObjects1.length = k;}if (gdjs.gameCode.condition0IsTrue_0.val) {
/* Reuse gdjs.gameCode.GDplayerObjects1 */
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.gameCode.GDwallObjects1);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].separateFromObjectsList(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDwallObjects1Objects, false);
}
}
{ //Subevents
gdjs.gameCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList9 = function(runtimeScene) {

{


{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects2);
{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].returnVariable(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("_angle")).setNumber(gdjs.evtTools.common.angleBetweenPositions((gdjs.gameCode.GDplayerObjects2[i].getCenterXInScene()), (gdjs.gameCode.GDplayerObjects2[i].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)) + 180);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects2[i].returnVariable(gdjs.gameCode.GDplayerObjects2[i].getVariables().get("distance")).setNumber(gdjs.evtTools.common.distanceBetweenPositions((gdjs.gameCode.GDplayerObjects2[i].getCenterXInScene()), (gdjs.gameCode.GDplayerObjects2[i].getCenterYInScene()), gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0)));
}
}
{ //Subevents
gdjs.gameCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("line"), gdjs.gameCode.GDlineObjects1);
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.gameCode.GDlineObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDlineObjects1[i].setCenterPositionInScene((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()),(( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()));
}
}
{ //Subevents
gdjs.gameCode.eventsList8(runtimeScene);} //End of subevents
}

}


};gdjs.gameCode.eventsList10 = function(runtimeScene) {

{


{
{gdjs.evtsExt__CopyCameraSettings__CopyCameraSettings.func(runtimeScene, "", 0, "wall", 0, true, true, true, true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__GeckosClient__connect.func(runtimeScene, "", true, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("trail"), gdjs.gameCode.GDtrailObjects1);
{for(var i = 0, len = gdjs.gameCode.GDtrailObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDtrailObjects1[i].putAroundObject((gdjs.gameCode.GDplayerObjects1.length !== 0 ? gdjs.gameCode.GDplayerObjects1[0] : null), 0, 0);
}
}{for(var i = 0, len = gdjs.gameCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDplayerObjects1[i].drawCircle(0, 0, 4);
}
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 5, "", 0);
}{gdjs.evtTools.tween.tweenCamera(runtimeScene, "camera", (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), "", 100, "linear");
}}

}


{



}


{


gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.gameCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.gameCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


{
gdjs.copyArray(runtimeScene.getObjects("raycast"), gdjs.gameCode.GDraycastObjects1);
{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].setVariableBoolean(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("trigger"), false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("wall"), gdjs.gameCode.GDwallObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
{
gdjs.gameCode.condition0IsTrue_0.val = gdjs.evtTools.object.raycastObject(gdjs.gameCode.mapOfGDgdjs_46gameCode_46GDwallObjects1Objects, (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects1[0].getVariables()).get("_angleNormalized"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects1[0].getVariables()).get("force"))), runtimeScene.getScene().getVariables().get("_rayX"), runtimeScene.getScene().getVariables().get("_rayY"), false);
}if (gdjs.gameCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("raycast"), gdjs.gameCode.GDraycastObjects1);
/* Reuse gdjs.gameCode.GDwallObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].setVariableBoolean(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("trigger"), true);
}
}{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].returnVariable(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("surface_angle")).setNumber((( gdjs.gameCode.GDwallObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDwallObjects1[0].getAngle()));
}
}}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("raycast"), gdjs.gameCode.GDraycastObjects1);
{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].setCenterPositionInScene(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_rayX")),gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_rayY")));
}
}{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].returnVariable(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("y")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_rayY")));
}
}{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].returnVariable(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("x")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_rayX")));
}
}{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].returnVariable(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("distance")).setNumber(gdjs.evtTools.common.distanceBetweenPositions(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_rayX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_rayY")), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene())));
}
}{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].returnVariable(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("angle")).setNumber(gdjs.evtTools.common.angleBetweenPositions((( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterXInScene()), (( gdjs.gameCode.GDplayerObjects1.length === 0 ) ? 0 :gdjs.gameCode.GDplayerObjects1[0].getCenterYInScene()), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_rayX")), gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_rayY"))));
}
}
{ //Subevents
gdjs.gameCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("raycast"), gdjs.gameCode.GDraycastObjects1);

gdjs.gameCode.condition0IsTrue_0.val = false;
gdjs.gameCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.gameCode.GDraycastObjects1.length;i<l;++i) {
    if ( gdjs.gameCode.GDraycastObjects1[i].getVariableBoolean(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("trigger"), true) ) {
        gdjs.gameCode.condition0IsTrue_0.val = true;
        gdjs.gameCode.GDraycastObjects1[k] = gdjs.gameCode.GDraycastObjects1[i];
        ++k;
    }
}
gdjs.gameCode.GDraycastObjects1.length = k;}if ( gdjs.gameCode.condition0IsTrue_0.val ) {
{
gdjs.gameCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}}
if (gdjs.gameCode.condition1IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.gameCode.GDplayerObjects1);
/* Reuse gdjs.gameCode.GDraycastObjects1 */
{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].drawCircle(0, 0, 1);
}
}{for(var i = 0, len = gdjs.gameCode.GDraycastObjects1.length ;i < len;++i) {
    gdjs.gameCode.GDraycastObjects1[i].drawLineV2(0, 0, gdjs.evtTools.common.getXFromAngleAndDistance((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("angleNormalized"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects1[0].getVariables()).get("force"))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("distance")))), gdjs.evtTools.common.getYFromAngleAndDistance((gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("angleNormalized"))), (gdjs.RuntimeObject.getVariableNumber(((gdjs.gameCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.gameCode.GDplayerObjects1[0].getVariables()).get("force"))) - (gdjs.RuntimeObject.getVariableNumber(gdjs.gameCode.GDraycastObjects1[i].getVariables().get("distance")))), 1);
}
}}

}


{


gdjs.gameCode.eventsList9(runtimeScene);
}


};

gdjs.gameCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.gameCode.GDplayerObjects1.length = 0;
gdjs.gameCode.GDplayerObjects2.length = 0;
gdjs.gameCode.GDplayerObjects3.length = 0;
gdjs.gameCode.GDplayerObjects4.length = 0;
gdjs.gameCode.GDtrailObjects1.length = 0;
gdjs.gameCode.GDtrailObjects2.length = 0;
gdjs.gameCode.GDtrailObjects3.length = 0;
gdjs.gameCode.GDtrailObjects4.length = 0;
gdjs.gameCode.GDwallObjects1.length = 0;
gdjs.gameCode.GDwallObjects2.length = 0;
gdjs.gameCode.GDwallObjects3.length = 0;
gdjs.gameCode.GDwallObjects4.length = 0;
gdjs.gameCode.GDlineObjects1.length = 0;
gdjs.gameCode.GDlineObjects2.length = 0;
gdjs.gameCode.GDlineObjects3.length = 0;
gdjs.gameCode.GDlineObjects4.length = 0;
gdjs.gameCode.GDraycastObjects1.length = 0;
gdjs.gameCode.GDraycastObjects2.length = 0;
gdjs.gameCode.GDraycastObjects3.length = 0;
gdjs.gameCode.GDraycastObjects4.length = 0;
gdjs.gameCode.GDNewTextObjects1.length = 0;
gdjs.gameCode.GDNewTextObjects2.length = 0;
gdjs.gameCode.GDNewTextObjects3.length = 0;
gdjs.gameCode.GDNewTextObjects4.length = 0;
gdjs.gameCode.GDwall2Objects1.length = 0;
gdjs.gameCode.GDwall2Objects2.length = 0;
gdjs.gameCode.GDwall2Objects3.length = 0;
gdjs.gameCode.GDwall2Objects4.length = 0;
gdjs.gameCode.GDwall3Objects1.length = 0;
gdjs.gameCode.GDwall3Objects2.length = 0;
gdjs.gameCode.GDwall3Objects3.length = 0;
gdjs.gameCode.GDwall3Objects4.length = 0;

gdjs.gameCode.eventsList10(runtimeScene);

return;

}

gdjs['gameCode'] = gdjs.gameCode;
