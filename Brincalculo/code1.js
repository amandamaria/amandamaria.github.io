gdjs.TelaCreditosCode = {};


gdjs.TelaCreditosCode.GDbtn_95ajudaObjects1= [];
gdjs.TelaCreditosCode.GDbtn_95ajudaObjects2= [];
gdjs.TelaCreditosCode.GDbtn_95voltarObjects1= [];
gdjs.TelaCreditosCode.GDbtn_95voltarObjects2= [];
gdjs.TelaCreditosCode.GDbtn_95avancarObjects1= [];
gdjs.TelaCreditosCode.GDbtn_95avancarObjects2= [];
gdjs.TelaCreditosCode.GDpersonagemObjects1= [];
gdjs.TelaCreditosCode.GDpersonagemObjects2= [];
gdjs.TelaCreditosCode.GDbalao_95fala_95esqObjects1= [];
gdjs.TelaCreditosCode.GDbalao_95fala_95esqObjects2= [];
gdjs.TelaCreditosCode.GDbalao_95fala_95dirObjects1= [];
gdjs.TelaCreditosCode.GDbalao_95fala_95dirObjects2= [];
gdjs.TelaCreditosCode.GDbgObjects1= [];
gdjs.TelaCreditosCode.GDbgObjects2= [];
gdjs.TelaCreditosCode.GDpersonagem_95escolaObjects1= [];
gdjs.TelaCreditosCode.GDpersonagem_95escolaObjects2= [];
gdjs.TelaCreditosCode.GDcursorObjects1= [];
gdjs.TelaCreditosCode.GDcursorObjects2= [];
gdjs.TelaCreditosCode.GDbg_95creditosObjects1= [];
gdjs.TelaCreditosCode.GDbg_95creditosObjects2= [];
gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1= [];
gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects2= [];
gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1= [];
gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects2= [];
gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1= [];
gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects2= [];
gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1= [];
gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects2= [];
gdjs.TelaCreditosCode.GDbtn1Objects1= [];
gdjs.TelaCreditosCode.GDbtn1Objects2= [];
gdjs.TelaCreditosCode.GDbtn2Objects1= [];
gdjs.TelaCreditosCode.GDbtn2Objects2= [];
gdjs.TelaCreditosCode.GDbtn3Objects1= [];
gdjs.TelaCreditosCode.GDbtn3Objects2= [];
gdjs.TelaCreditosCode.GDDesign2Objects1= [];
gdjs.TelaCreditosCode.GDDesign2Objects2= [];

gdjs.TelaCreditosCode.conditionTrue_0 = {val:false};
gdjs.TelaCreditosCode.condition0IsTrue_0 = {val:false};
gdjs.TelaCreditosCode.condition1IsTrue_0 = {val:false};
gdjs.TelaCreditosCode.condition2IsTrue_0 = {val:false};

gdjs.TelaCreditosCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.TelaCreditosCode.GDbtn_95ajudaObjects1.length = 0;
gdjs.TelaCreditosCode.GDbtn_95ajudaObjects2.length = 0;
gdjs.TelaCreditosCode.GDbtn_95voltarObjects1.length = 0;
gdjs.TelaCreditosCode.GDbtn_95voltarObjects2.length = 0;
gdjs.TelaCreditosCode.GDbtn_95avancarObjects1.length = 0;
gdjs.TelaCreditosCode.GDbtn_95avancarObjects2.length = 0;
gdjs.TelaCreditosCode.GDpersonagemObjects1.length = 0;
gdjs.TelaCreditosCode.GDpersonagemObjects2.length = 0;
gdjs.TelaCreditosCode.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.TelaCreditosCode.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.TelaCreditosCode.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.TelaCreditosCode.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.TelaCreditosCode.GDbgObjects1.length = 0;
gdjs.TelaCreditosCode.GDbgObjects2.length = 0;
gdjs.TelaCreditosCode.GDpersonagem_95escolaObjects1.length = 0;
gdjs.TelaCreditosCode.GDpersonagem_95escolaObjects2.length = 0;
gdjs.TelaCreditosCode.GDcursorObjects1.length = 0;
gdjs.TelaCreditosCode.GDcursorObjects2.length = 0;
gdjs.TelaCreditosCode.GDbg_95creditosObjects1.length = 0;
gdjs.TelaCreditosCode.GDbg_95creditosObjects2.length = 0;
gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1.length = 0;
gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects2.length = 0;
gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1.length = 0;
gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects2.length = 0;
gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1.length = 0;
gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects2.length = 0;
gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1.length = 0;
gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects2.length = 0;
gdjs.TelaCreditosCode.GDbtn1Objects1.length = 0;
gdjs.TelaCreditosCode.GDbtn1Objects2.length = 0;
gdjs.TelaCreditosCode.GDbtn2Objects1.length = 0;
gdjs.TelaCreditosCode.GDbtn2Objects2.length = 0;
gdjs.TelaCreditosCode.GDbtn3Objects1.length = 0;
gdjs.TelaCreditosCode.GDbtn3Objects2.length = 0;
gdjs.TelaCreditosCode.GDDesign2Objects1.length = 0;
gdjs.TelaCreditosCode.GDDesign2Objects2.length = 0;


{

gdjs.TelaCreditosCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}


{

gdjs.TelaCreditosCode.GDDesign2Objects1.createFrom(runtimeScene.getObjects("Design2"));
gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1.createFrom(runtimeScene.getObjects("participante_fabiana"));
gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1.createFrom(runtimeScene.getObjects("participante_fabiana1"));
gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1.createFrom(runtimeScene.getObjects("participante_jackson"));
gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1.createFrom(runtimeScene.getObjects("participante_rodrigo"));

{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDDesign2Objects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDDesign2Objects1[i].hide();
}
}
}


{


gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
gdjs.TelaCreditosCode.condition1IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.TelaCreditosCode.condition0IsTrue_0.val ) {
{
gdjs.TelaCreditosCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.TelaCreditosCode.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.TelaCreditosCode.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.TelaCreditosCode.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela0", false);
}}

}

} //End of subevents
}

}


{

gdjs.TelaCreditosCode.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.TelaCreditosCode.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.TelaCreditosCode.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDbtn_95voltarObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.TelaCreditosCode.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.TelaCreditosCode.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.TelaCreditosCode.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDbtn_95voltarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.TelaCreditosCode.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1.createFrom(runtimeScene.getObjects("participante_fabiana"));
gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1.createFrom(runtimeScene.getObjects("participante_fabiana1"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn1", gdjs.TelaCreditosCode.GDbtn1Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1[i].hide(false);
}
}}

}


{

gdjs.TelaCreditosCode.GDbtn1Objects1.createFrom(runtimeScene.getObjects("btn1"));
gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1.createFrom(runtimeScene.getObjects("participante_fabiana"));
gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1.createFrom(runtimeScene.getObjects("participante_fabiana1"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn1", gdjs.TelaCreditosCode.GDbtn1Objects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95fabianaObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95fabiana1Objects1[i].hide();
}
}}

}


{

gdjs.TelaCreditosCode.GDDesign2Objects1.createFrom(runtimeScene.getObjects("Design2"));
gdjs.TelaCreditosCode.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1.createFrom(runtimeScene.getObjects("participante_jackson"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn2", gdjs.TelaCreditosCode.GDbtn2Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDDesign2Objects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDDesign2Objects1[i].hide(false);
}
}}

}


{

gdjs.TelaCreditosCode.GDDesign2Objects1.createFrom(runtimeScene.getObjects("Design2"));
gdjs.TelaCreditosCode.GDbtn2Objects1.createFrom(runtimeScene.getObjects("btn2"));
gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1.createFrom(runtimeScene.getObjects("participante_jackson"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn2", gdjs.TelaCreditosCode.GDbtn2Objects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95jacksonObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.TelaCreditosCode.GDDesign2Objects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDDesign2Objects1[i].hide();
}
}}

}


{

gdjs.TelaCreditosCode.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1.createFrom(runtimeScene.getObjects("participante_rodrigo"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn3", gdjs.TelaCreditosCode.GDbtn3Objects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1[i].hide(false);
}
}}

}


{

gdjs.TelaCreditosCode.GDbtn3Objects1.createFrom(runtimeScene.getObjects("btn3"));
gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1.createFrom(runtimeScene.getObjects("participante_rodrigo"));

gdjs.TelaCreditosCode.condition0IsTrue_0.val = false;
{
gdjs.TelaCreditosCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn3", gdjs.TelaCreditosCode.GDbtn3Objects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.TelaCreditosCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1.length ;i < len;++i) {
    gdjs.TelaCreditosCode.GDparticipante_95rodrigoObjects1[i].hide();
}
}}

}

return;
}
gdjs['TelaCreditosCode']= gdjs.TelaCreditosCode;
