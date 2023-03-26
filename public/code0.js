gdjs.onlineCode = {};
gdjs.onlineCode.GDplayerObjects2_1final = [];

gdjs.onlineCode.forEachIndex2 = 0;

gdjs.onlineCode.forEachIndex3 = 0;

gdjs.onlineCode.forEachObjects2 = [];

gdjs.onlineCode.forEachObjects3 = [];

gdjs.onlineCode.forEachTemporary2 = null;

gdjs.onlineCode.forEachTemporary3 = null;

gdjs.onlineCode.forEachTotalCount2 = 0;

gdjs.onlineCode.forEachTotalCount3 = 0;

gdjs.onlineCode.GDpingObjects1= [];
gdjs.onlineCode.GDpingObjects2= [];
gdjs.onlineCode.GDpingObjects3= [];
gdjs.onlineCode.GDpingObjects4= [];
gdjs.onlineCode.GDpingObjects5= [];
gdjs.onlineCode.GDpingObjects6= [];
gdjs.onlineCode.GDpingObjects7= [];
gdjs.onlineCode.GDplayerObjects1= [];
gdjs.onlineCode.GDplayerObjects2= [];
gdjs.onlineCode.GDplayerObjects3= [];
gdjs.onlineCode.GDplayerObjects4= [];
gdjs.onlineCode.GDplayerObjects5= [];
gdjs.onlineCode.GDplayerObjects6= [];
gdjs.onlineCode.GDplayerObjects7= [];
gdjs.onlineCode.GDplayer_95localObjects1= [];
gdjs.onlineCode.GDplayer_95localObjects2= [];
gdjs.onlineCode.GDplayer_95localObjects3= [];
gdjs.onlineCode.GDplayer_95localObjects4= [];
gdjs.onlineCode.GDplayer_95localObjects5= [];
gdjs.onlineCode.GDplayer_95localObjects6= [];
gdjs.onlineCode.GDplayer_95localObjects7= [];

gdjs.onlineCode.conditionTrue_0 = {val:false};
gdjs.onlineCode.condition0IsTrue_0 = {val:false};
gdjs.onlineCode.condition1IsTrue_0 = {val:false};
gdjs.onlineCode.condition2IsTrue_0 = {val:false};
gdjs.onlineCode.condition3IsTrue_0 = {val:false};
gdjs.onlineCode.conditionTrue_1 = {val:false};
gdjs.onlineCode.condition0IsTrue_1 = {val:false};
gdjs.onlineCode.condition1IsTrue_1 = {val:false};
gdjs.onlineCode.condition2IsTrue_1 = {val:false};
gdjs.onlineCode.condition3IsTrue_1 = {val:false};


gdjs.onlineCode.eventsList0 = function(runtimeScene) {

{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("varName")) == "x";
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects4, gdjs.onlineCode.GDplayerObjects6);

{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects6.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects6[i].returnVariable(gdjs.onlineCode.GDplayerObjects6[i].getVariables().get("x")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("varValue")));
}
}}

}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("varName")) == "y";
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects4, gdjs.onlineCode.GDplayerObjects6);

{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects6.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects6[i].returnVariable(gdjs.onlineCode.GDplayerObjects6[i].getVariables().get("y")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("varValue")));
}
}}

}


};gdjs.onlineCode.eventsList1 = function(runtimeScene) {

{



}


{


const keyIteratorReference5 = runtimeScene.getScene().getVariables().get("varName");
const valueIteratorReference5 = runtimeScene.getScene().getVariables().get("varValue");
const iterableReference5 = runtimeScene.getScene().getVariables().get("player");
if(!iterableReference5.isPrimitive()) {
for(
    const iteratorKey5 in 
    iterableReference5.getType() === "structure"
      ? iterableReference5.getAllChildren()
      : iterableReference5.getType() === "array"
        ? iterableReference5.getAllChildrenArray()
        : []
) {
    if(iterableReference5.getType() === "structure")
        keyIteratorReference5.setString(iteratorKey5);
    else if(iterableReference5.getType() === "array")
        keyIteratorReference5.setNumber(iteratorKey5);
    const structureChildVariable5 = iterableReference5.getChild(iteratorKey5)
    valueIteratorReference5.castTo(structureChildVariable5.getType())
    if(structureChildVariable5.isPrimitive()) {
        valueIteratorReference5.setValue(structureChildVariable5.getValue());
    } else if (structureChildVariable5.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference5.replaceChildren(structureChildVariable5.getAllChildren());
    } else if (structureChildVariable5.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference5.replaceChildrenArray(structureChildVariable5.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

if (true)
{

{ //Subevents: 
gdjs.onlineCode.eventsList0(runtimeScene);} //Subevents end.
}
}
}

}


};gdjs.onlineCode.mapOfGDgdjs_46onlineCode_46GDplayerObjects4Objects = Hashtable.newFrom({"player": gdjs.onlineCode.GDplayerObjects4});
gdjs.onlineCode.eventsList2 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.onlineCode.GDplayerObjects4);

gdjs.onlineCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects4.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects4[i].getVariableString(gdjs.onlineCode.GDplayerObjects4[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("id")) ) {
        gdjs.onlineCode.condition0IsTrue_0.val = true;
        gdjs.onlineCode.GDplayerObjects4[k] = gdjs.onlineCode.GDplayerObjects4[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects4.length = k;}if (gdjs.onlineCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("findObject"), true);
}
{ //Subevents
gdjs.onlineCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("findObject"), false);
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
gdjs.onlineCode.GDplayerObjects4.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.onlineCode.mapOfGDgdjs_46onlineCode_46GDplayerObjects4Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects4.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects4[i].returnVariable(gdjs.onlineCode.GDplayerObjects4[i].getVariables().get("id")).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("id")));
}
}}

}


};gdjs.onlineCode.eventsList3 = function(runtimeScene) {

};gdjs.onlineCode.eventsList4 = function(runtimeScene) {

{


const keyIteratorReference4 = runtimeScene.getScene().getVariables().get("id");
const valueIteratorReference4 = runtimeScene.getScene().getVariables().get("player");
const iterableReference4 = runtimeScene.getScene().getVariables().get("players");
if(!iterableReference4.isPrimitive()) {
for(
    const iteratorKey4 in 
    iterableReference4.getType() === "structure"
      ? iterableReference4.getAllChildren()
      : iterableReference4.getType() === "array"
        ? iterableReference4.getAllChildrenArray()
        : []
) {
    if(iterableReference4.getType() === "structure")
        keyIteratorReference4.setString(iteratorKey4);
    else if(iterableReference4.getType() === "array")
        keyIteratorReference4.setNumber(iteratorKey4);
    const structureChildVariable4 = iterableReference4.getChild(iteratorKey4)
    valueIteratorReference4.castTo(structureChildVariable4.getType())
    if(structureChildVariable4.isPrimitive()) {
        valueIteratorReference4.setValue(structureChildVariable4.getValue());
    } else if (structureChildVariable4.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference4.replaceChildren(structureChildVariable4.getAllChildren());
    } else if (structureChildVariable4.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference4.replaceChildrenArray(structureChildVariable4.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects2, gdjs.onlineCode.GDplayerObjects4);


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects4.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects4[i].getVariableString(gdjs.onlineCode.GDplayerObjects4[i].getVariables().get("id")) == gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("id")) ) {
        gdjs.onlineCode.condition0IsTrue_0.val = true;
        gdjs.onlineCode.GDplayerObjects4[k] = gdjs.onlineCode.GDplayerObjects4[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects4.length = k;}if (gdjs.onlineCode.condition0IsTrue_0.val)
{
{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects4.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects4[i].setVariableBoolean(gdjs.onlineCode.GDplayerObjects4[i].getVariables().get("remove"), false);
}
}}
}
}

}


{

gdjs.copyArray(gdjs.onlineCode.GDplayerObjects2, gdjs.onlineCode.GDplayerObjects3);


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects3[i].getVariableBoolean(gdjs.onlineCode.GDplayerObjects3[i].getVariables().get("remove"), true) ) {
        gdjs.onlineCode.condition0IsTrue_0.val = true;
        gdjs.onlineCode.GDplayerObjects3[k] = gdjs.onlineCode.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects3.length = k;}if (gdjs.onlineCode.condition0IsTrue_0.val) {
/* Reuse gdjs.onlineCode.GDplayerObjects3 */
{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects3.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects3[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.onlineCode.eventsList5 = function(runtimeScene) {

{


const keyIteratorReference3 = runtimeScene.getScene().getVariables().get("id");
const valueIteratorReference3 = runtimeScene.getScene().getVariables().get("player");
const iterableReference3 = runtimeScene.getScene().getVariables().get("players");
if(!iterableReference3.isPrimitive()) {
for(
    const iteratorKey3 in 
    iterableReference3.getType() === "structure"
      ? iterableReference3.getAllChildren()
      : iterableReference3.getType() === "array"
        ? iterableReference3.getAllChildrenArray()
        : []
) {
    if(iterableReference3.getType() === "structure")
        keyIteratorReference3.setString(iteratorKey3);
    else if(iterableReference3.getType() === "array")
        keyIteratorReference3.setNumber(iteratorKey3);
    const structureChildVariable3 = iterableReference3.getChild(iteratorKey3)
    valueIteratorReference3.castTo(structureChildVariable3.getType())
    if(structureChildVariable3.isPrimitive()) {
        valueIteratorReference3.setValue(structureChildVariable3.getValue());
    } else if (structureChildVariable3.getType() === "structure") {
        // Structures are passed by reference like JS objects
        valueIteratorReference3.replaceChildren(structureChildVariable3.getAllChildren());
    } else if (structureChildVariable3.getType() === "array") {
        // Arrays are passed by reference like JS objects
        valueIteratorReference3.replaceChildrenArray(structureChildVariable3.getAllChildrenArray());
    } else console.warn("Cannot identify type: ", type);

if (true)
{
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("findObject"), false);
}
{ //Subevents: 
gdjs.onlineCode.eventsList2(runtimeScene);} //Subevents end.
}
}
}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.onlineCode.GDplayerObjects1);

for(gdjs.onlineCode.forEachIndex2 = 0;gdjs.onlineCode.forEachIndex2 < gdjs.onlineCode.GDplayerObjects1.length;++gdjs.onlineCode.forEachIndex2) {
gdjs.onlineCode.GDplayerObjects2.length = 0;


gdjs.onlineCode.forEachTemporary2 = gdjs.onlineCode.GDplayerObjects1[gdjs.onlineCode.forEachIndex2];
gdjs.onlineCode.GDplayerObjects2.push(gdjs.onlineCode.forEachTemporary2);
if (true) {
{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects2[i].setVariableBoolean(gdjs.onlineCode.GDplayerObjects2[i].getVariables().get("remove"), true);
}
}
{ //Subevents: 
gdjs.onlineCode.eventsList4(runtimeScene);} //Subevents end.
}
}

}


};gdjs.onlineCode.eventsList6 = function(runtimeScene) {

{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtsExt__GeckosClient__onEvent.func(runtimeScene, "ping", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__GeckosClient__emit.func(runtimeScene, "ping", gdjs.evtsExt__GeckosClient__eventData.func(runtimeScene, "ping", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtsExt__GeckosClient__onEvent.func(runtimeScene, "pong", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
gdjs.copyArray(runtimeScene.getObjects("ping"), gdjs.onlineCode.GDpingObjects2);
{for(var i = 0, len = gdjs.onlineCode.GDpingObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDpingObjects2[i].setString(gdjs.evtsExt__GeckosClient__eventData.func(runtimeScene, "pong", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) + " " + gdjs.evtTools.common.toString(gdjs.evtTools.common.roundTo(gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene), 4)));
}
}}

}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtsExt__GeckosClient__onEvent.func(runtimeScene, "sync:players", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
{gdjs.evtTools.network.jsonToVariableStructure(gdjs.evtsExt__GeckosClient__eventData.func(runtimeScene, "sync:players", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), runtimeScene.getScene().getVariables().get("players"));
}
{ //Subevents
gdjs.onlineCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.onlineCode.eventsList7 = function(runtimeScene) {

{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
{gdjs.onlineCode.conditionTrue_1 = gdjs.onlineCode.condition0IsTrue_0;
gdjs.onlineCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9274212);
}
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__GeckosClient__emit.func(runtimeScene, "ping", gdjs.evtsExt__GeckosClient__eventData.func(runtimeScene, "ping", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


gdjs.onlineCode.eventsList6(runtimeScene);
}


};gdjs.onlineCode.eventsList8 = function(runtimeScene) {

};gdjs.onlineCode.mapOfGDgdjs_46onlineCode_46GDplayer_9595localObjects2Objects = Hashtable.newFrom({"player_local": gdjs.onlineCode.GDplayer_95localObjects2});
gdjs.onlineCode.eventsList9 = function(runtimeScene) {

{


{
gdjs.onlineCode.GDplayer_95localObjects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.onlineCode.mapOfGDgdjs_46onlineCode_46GDplayer_9595localObjects2Objects, 0, 0, "");
}{for(var i = 0, len = gdjs.onlineCode.GDplayer_95localObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayer_95localObjects2[i].returnVariable(gdjs.onlineCode.GDplayer_95localObjects2[i].getVariables().get("id")).setString(gdjs.evtsExt__GeckosClient__getID.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayer_95localObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayer_95localObjects2[i].drawCircle(0, 0, 5);
}
}}

}


};gdjs.onlineCode.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.onlineCode.GDplayerObjects1, gdjs.onlineCode.GDplayerObjects2);


gdjs.onlineCode.condition0IsTrue_0.val = false;
gdjs.onlineCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects2[i].getVariableNumber(gdjs.onlineCode.GDplayerObjects2[i].getVariables().get("moveX")) == 0 ) {
        gdjs.onlineCode.condition0IsTrue_0.val = true;
        gdjs.onlineCode.GDplayerObjects2[k] = gdjs.onlineCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects2.length = k;}if ( gdjs.onlineCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects2.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects2[i].getVariableNumber(gdjs.onlineCode.GDplayerObjects2[i].getVariables().get("moveY")) == 0 ) {
        gdjs.onlineCode.condition1IsTrue_0.val = true;
        gdjs.onlineCode.GDplayerObjects2[k] = gdjs.onlineCode.GDplayerObjects2[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects2.length = k;}}
if (gdjs.onlineCode.condition1IsTrue_0.val) {
/* Reuse gdjs.onlineCode.GDplayerObjects2 */
gdjs.copyArray(gdjs.onlineCode.GDplayer_95localObjects1, gdjs.onlineCode.GDplayer_95localObjects2);

{for(var i = 0, len = gdjs.onlineCode.GDplayer_95localObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayer_95localObjects2[i].setCenterXInScene(gdjs.evtTools.common.lerp((gdjs.onlineCode.GDplayer_95localObjects2[i].getCenterXInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.onlineCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.onlineCode.GDplayerObjects2[0].getVariables()).get("x"))), 0.1));
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayer_95localObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayer_95localObjects2[i].setCenterYInScene(gdjs.evtTools.common.lerp((gdjs.onlineCode.GDplayer_95localObjects2[i].getCenterYInScene()), (gdjs.RuntimeObject.getVariableNumber(((gdjs.onlineCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.onlineCode.GDplayerObjects2[0].getVariables()).get("y"))), 0.1));
}
}}

}


{



}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects1, gdjs.onlineCode.GDplayerObjects2);

gdjs.copyArray(gdjs.onlineCode.GDplayer_95localObjects1, gdjs.onlineCode.GDplayer_95localObjects2);

{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects2[i].returnVariable(gdjs.onlineCode.GDplayerObjects2[i].getVariables().get("moveY")).sub(1);
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayer_95localObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayer_95localObjects2[i].setCenterYInScene(gdjs.onlineCode.GDplayer_95localObjects2[i].getCenterYInScene() - (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "s");
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects1, gdjs.onlineCode.GDplayerObjects2);

gdjs.copyArray(gdjs.onlineCode.GDplayer_95localObjects1, gdjs.onlineCode.GDplayer_95localObjects2);

{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects2[i].returnVariable(gdjs.onlineCode.GDplayerObjects2[i].getVariables().get("moveY")).add(1);
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayer_95localObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayer_95localObjects2[i].setCenterYInScene(gdjs.onlineCode.GDplayer_95localObjects2[i].getCenterYInScene() + (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects1, gdjs.onlineCode.GDplayerObjects2);

gdjs.copyArray(gdjs.onlineCode.GDplayer_95localObjects1, gdjs.onlineCode.GDplayer_95localObjects2);

{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects2[i].returnVariable(gdjs.onlineCode.GDplayerObjects2[i].getVariables().get("moveX")).sub(1);
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayer_95localObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayer_95localObjects2[i].setCenterXInScene(gdjs.onlineCode.GDplayer_95localObjects2[i].getCenterXInScene() - (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects1, gdjs.onlineCode.GDplayerObjects2);

gdjs.copyArray(gdjs.onlineCode.GDplayer_95localObjects1, gdjs.onlineCode.GDplayer_95localObjects2);

{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects2[i].returnVariable(gdjs.onlineCode.GDplayerObjects2[i].getVariables().get("moveX")).add(1);
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayer_95localObjects2.length ;i < len;++i) {
    gdjs.onlineCode.GDplayer_95localObjects2[i].setCenterXInScene(gdjs.onlineCode.GDplayer_95localObjects2[i].getCenterXInScene() + (10 * gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}}

}


{

gdjs.copyArray(gdjs.onlineCode.GDplayerObjects1, gdjs.onlineCode.GDplayerObjects2);


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
{gdjs.onlineCode.conditionTrue_1 = gdjs.onlineCode.condition0IsTrue_0;
gdjs.onlineCode.GDplayerObjects2_1final.length = 0;gdjs.onlineCode.condition0IsTrue_1.val = false;
gdjs.onlineCode.condition1IsTrue_1.val = false;
{
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects1, gdjs.onlineCode.GDplayerObjects3);

for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects3[i].getVariableNumber(gdjs.onlineCode.GDplayerObjects3[i].getVariables().get("moveY")) != 0 ) {
        gdjs.onlineCode.condition0IsTrue_1.val = true;
        gdjs.onlineCode.GDplayerObjects3[k] = gdjs.onlineCode.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects3.length = k;if( gdjs.onlineCode.condition0IsTrue_1.val ) {
    gdjs.onlineCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.onlineCode.GDplayerObjects3.length;j<jLen;++j) {
        if ( gdjs.onlineCode.GDplayerObjects2_1final.indexOf(gdjs.onlineCode.GDplayerObjects3[j]) === -1 )
            gdjs.onlineCode.GDplayerObjects2_1final.push(gdjs.onlineCode.GDplayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects1, gdjs.onlineCode.GDplayerObjects3);

for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects3.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects3[i].getVariableNumber(gdjs.onlineCode.GDplayerObjects3[i].getVariables().get("moveX")) != 0 ) {
        gdjs.onlineCode.condition1IsTrue_1.val = true;
        gdjs.onlineCode.GDplayerObjects3[k] = gdjs.onlineCode.GDplayerObjects3[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects3.length = k;if( gdjs.onlineCode.condition1IsTrue_1.val ) {
    gdjs.onlineCode.conditionTrue_1.val = true;
    for(var j = 0, jLen = gdjs.onlineCode.GDplayerObjects3.length;j<jLen;++j) {
        if ( gdjs.onlineCode.GDplayerObjects2_1final.indexOf(gdjs.onlineCode.GDplayerObjects3[j]) === -1 )
            gdjs.onlineCode.GDplayerObjects2_1final.push(gdjs.onlineCode.GDplayerObjects3[j]);
    }
}
}
{
gdjs.copyArray(gdjs.onlineCode.GDplayerObjects2_1final, gdjs.onlineCode.GDplayerObjects2);
}
}
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
/* Reuse gdjs.onlineCode.GDplayerObjects2 */
{gdjs.evtsExt__GeckosClient__emit.func(runtimeScene, "move", gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.onlineCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.onlineCode.GDplayerObjects2[0].getVariables()).get("moveX")))) + ":" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.onlineCode.GDplayerObjects2.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.onlineCode.GDplayerObjects2[0].getVariables()).get("moveY")))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

/* Reuse gdjs.onlineCode.GDplayerObjects1 */

gdjs.onlineCode.condition0IsTrue_0.val = false;
gdjs.onlineCode.condition1IsTrue_0.val = false;
gdjs.onlineCode.condition2IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects1[i].getVariableNumber(gdjs.onlineCode.GDplayerObjects1[i].getVariables().get("moveY")) == 0 ) {
        gdjs.onlineCode.condition0IsTrue_0.val = true;
        gdjs.onlineCode.GDplayerObjects1[k] = gdjs.onlineCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects1.length = k;}if ( gdjs.onlineCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects1[i].getVariableNumber(gdjs.onlineCode.GDplayerObjects1[i].getVariables().get("moveX")) == 0 ) {
        gdjs.onlineCode.condition1IsTrue_0.val = true;
        gdjs.onlineCode.GDplayerObjects1[k] = gdjs.onlineCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects1.length = k;}if ( gdjs.onlineCode.condition1IsTrue_0.val ) {
{
{gdjs.onlineCode.conditionTrue_1 = gdjs.onlineCode.condition2IsTrue_0;
gdjs.onlineCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(9312204);
}
}}
}
if (gdjs.onlineCode.condition2IsTrue_0.val) {
/* Reuse gdjs.onlineCode.GDplayerObjects1 */
{gdjs.evtsExt__GeckosClient__emit.func(runtimeScene, "move", gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.onlineCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.onlineCode.GDplayerObjects1[0].getVariables()).get("moveX")))) + ":" + gdjs.evtTools.common.toString((gdjs.RuntimeObject.getVariableNumber(((gdjs.onlineCode.GDplayerObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.onlineCode.GDplayerObjects1[0].getVariables()).get("moveY")))), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


};gdjs.onlineCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("player_local"), gdjs.onlineCode.GDplayer_95localObjects2);

for(gdjs.onlineCode.forEachIndex3 = 0;gdjs.onlineCode.forEachIndex3 < gdjs.onlineCode.GDplayer_95localObjects2.length;++gdjs.onlineCode.forEachIndex3) {
gdjs.onlineCode.GDplayer_95localObjects3.length = 0;


gdjs.onlineCode.forEachTemporary3 = gdjs.onlineCode.GDplayer_95localObjects2[gdjs.onlineCode.forEachIndex3];
gdjs.onlineCode.GDplayer_95localObjects3.push(gdjs.onlineCode.forEachTemporary3);
gdjs.onlineCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayer_95localObjects3.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayer_95localObjects3[i].getVariableString(gdjs.onlineCode.GDplayer_95localObjects3[i].getVariables().get("id")) == gdjs.evtsExt__GeckosClient__getID.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.onlineCode.condition0IsTrue_0.val = true;
        gdjs.onlineCode.GDplayer_95localObjects3[k] = gdjs.onlineCode.GDplayer_95localObjects3[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayer_95localObjects3.length = k;}if (gdjs.onlineCode.condition0IsTrue_0.val) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("findPlayerLocal"), true);
}}
}

}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("findPlayerLocal"), false);
}if (gdjs.onlineCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.onlineCode.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("player_local"), gdjs.onlineCode.GDplayer_95localObjects1);

gdjs.onlineCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayer_95localObjects1.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayer_95localObjects1[i].getVariableString(gdjs.onlineCode.GDplayer_95localObjects1[i].getVariables().get("id")) == gdjs.evtsExt__GeckosClient__getID.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.onlineCode.condition0IsTrue_0.val = true;
        gdjs.onlineCode.GDplayer_95localObjects1[k] = gdjs.onlineCode.GDplayer_95localObjects1[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayer_95localObjects1.length = k;}if (gdjs.onlineCode.condition0IsTrue_0.val) {
/* Reuse gdjs.onlineCode.GDplayer_95localObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.onlineCode.GDplayer_95localObjects1.length !== 0 ? gdjs.onlineCode.GDplayer_95localObjects1[0] : null), true, "", 0);
}
{ //Subevents
gdjs.onlineCode.eventsList10(runtimeScene);} //End of subevents
}

}


};gdjs.onlineCode.eventsList12 = function(runtimeScene) {

{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.onlineCode.condition0IsTrue_0.val) {
{gdjs.evtsExt__GeckosClient__connect.func(runtimeScene, "http://dev.floki-community.ga", false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "log");
}}

}


{


gdjs.onlineCode.condition0IsTrue_0.val = false;
{
gdjs.onlineCode.condition0IsTrue_0.val = gdjs.evtsExt__GeckosClient__isConnected.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}if (gdjs.onlineCode.condition0IsTrue_0.val) {

{ //Subevents
gdjs.onlineCode.eventsList7(runtimeScene);} //End of subevents
}

}


{


{
gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.onlineCode.GDplayerObjects1);
{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects1[i].drawCircle(0, 0, 5);
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects1[i].setCenterXInScene((gdjs.RuntimeObject.getVariableNumber(gdjs.onlineCode.GDplayerObjects1[i].getVariables().get("x"))));
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects1[i].setCenterYInScene((gdjs.RuntimeObject.getVariableNumber(gdjs.onlineCode.GDplayerObjects1[i].getVariables().get("y"))));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("player"), gdjs.onlineCode.GDplayerObjects1);

gdjs.onlineCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.onlineCode.GDplayerObjects1.length;i<l;++i) {
    if ( gdjs.onlineCode.GDplayerObjects1[i].getVariableString(gdjs.onlineCode.GDplayerObjects1[i].getVariables().get("id")) == gdjs.evtsExt__GeckosClient__getID.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        gdjs.onlineCode.condition0IsTrue_0.val = true;
        gdjs.onlineCode.GDplayerObjects1[k] = gdjs.onlineCode.GDplayerObjects1[i];
        ++k;
    }
}
gdjs.onlineCode.GDplayerObjects1.length = k;}if (gdjs.onlineCode.condition0IsTrue_0.val) {
/* Reuse gdjs.onlineCode.GDplayerObjects1 */
{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects1[i].returnVariable(gdjs.onlineCode.GDplayerObjects1[i].getVariables().get("moveX")).setNumber(0);
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects1[i].returnVariable(gdjs.onlineCode.GDplayerObjects1[i].getVariables().get("moveY")).setNumber(0);
}
}{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects1[i].drawCircle(0, 0, 4);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("findPlayerLocal"), false);
}{for(var i = 0, len = gdjs.onlineCode.GDplayerObjects1.length ;i < len;++i) {
    gdjs.onlineCode.GDplayerObjects1[i].setOutlineOpacity(100);
}
}
{ //Subevents
gdjs.onlineCode.eventsList11(runtimeScene);} //End of subevents
}

}


};

gdjs.onlineCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.onlineCode.GDpingObjects1.length = 0;
gdjs.onlineCode.GDpingObjects2.length = 0;
gdjs.onlineCode.GDpingObjects3.length = 0;
gdjs.onlineCode.GDpingObjects4.length = 0;
gdjs.onlineCode.GDpingObjects5.length = 0;
gdjs.onlineCode.GDpingObjects6.length = 0;
gdjs.onlineCode.GDpingObjects7.length = 0;
gdjs.onlineCode.GDplayerObjects1.length = 0;
gdjs.onlineCode.GDplayerObjects2.length = 0;
gdjs.onlineCode.GDplayerObjects3.length = 0;
gdjs.onlineCode.GDplayerObjects4.length = 0;
gdjs.onlineCode.GDplayerObjects5.length = 0;
gdjs.onlineCode.GDplayerObjects6.length = 0;
gdjs.onlineCode.GDplayerObjects7.length = 0;
gdjs.onlineCode.GDplayer_95localObjects1.length = 0;
gdjs.onlineCode.GDplayer_95localObjects2.length = 0;
gdjs.onlineCode.GDplayer_95localObjects3.length = 0;
gdjs.onlineCode.GDplayer_95localObjects4.length = 0;
gdjs.onlineCode.GDplayer_95localObjects5.length = 0;
gdjs.onlineCode.GDplayer_95localObjects6.length = 0;
gdjs.onlineCode.GDplayer_95localObjects7.length = 0;

gdjs.onlineCode.eventsList12(runtimeScene);

return;

}

gdjs['onlineCode'] = gdjs.onlineCode;
