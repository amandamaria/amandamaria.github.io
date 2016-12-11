gdjs.Tela7bCode = {};


gdjs.Tela7bCode.GDbtn_95ajudaObjects1= [];
gdjs.Tela7bCode.GDbtn_95ajudaObjects2= [];
gdjs.Tela7bCode.GDbtn_95voltarObjects1= [];
gdjs.Tela7bCode.GDbtn_95voltarObjects2= [];
gdjs.Tela7bCode.GDbtn_95avancarObjects1= [];
gdjs.Tela7bCode.GDbtn_95avancarObjects2= [];
gdjs.Tela7bCode.GDpersonagemObjects1= [];
gdjs.Tela7bCode.GDpersonagemObjects2= [];
gdjs.Tela7bCode.GDbalao_95fala_95esqObjects1= [];
gdjs.Tela7bCode.GDbalao_95fala_95esqObjects2= [];
gdjs.Tela7bCode.GDbalao_95fala_95dirObjects1= [];
gdjs.Tela7bCode.GDbalao_95fala_95dirObjects2= [];
gdjs.Tela7bCode.GDbgObjects1= [];
gdjs.Tela7bCode.GDbgObjects2= [];
gdjs.Tela7bCode.GDpersonagem_95escolaObjects1= [];
gdjs.Tela7bCode.GDpersonagem_95escolaObjects2= [];
gdjs.Tela7bCode.GDcursorObjects1= [];
gdjs.Tela7bCode.GDcursorObjects2= [];
gdjs.Tela7bCode.GDbg_95salaObjects1= [];
gdjs.Tela7bCode.GDbg_95salaObjects2= [];
gdjs.Tela7bCode.GDpersonagem_95maeObjects1= [];
gdjs.Tela7bCode.GDpersonagem_95maeObjects2= [];
gdjs.Tela7bCode.GDtxt_95mae1Objects1= [];
gdjs.Tela7bCode.GDtxt_95mae1Objects2= [];

gdjs.Tela7bCode.conditionTrue_0 = {val:false};
gdjs.Tela7bCode.condition0IsTrue_0 = {val:false};
gdjs.Tela7bCode.condition1IsTrue_0 = {val:false};
gdjs.Tela7bCode.condition2IsTrue_0 = {val:false};

gdjs.Tela7bCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Tela7bCode.GDbtn_95ajudaObjects1.length = 0;
gdjs.Tela7bCode.GDbtn_95ajudaObjects2.length = 0;
gdjs.Tela7bCode.GDbtn_95voltarObjects1.length = 0;
gdjs.Tela7bCode.GDbtn_95voltarObjects2.length = 0;
gdjs.Tela7bCode.GDbtn_95avancarObjects1.length = 0;
gdjs.Tela7bCode.GDbtn_95avancarObjects2.length = 0;
gdjs.Tela7bCode.GDpersonagemObjects1.length = 0;
gdjs.Tela7bCode.GDpersonagemObjects2.length = 0;
gdjs.Tela7bCode.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.Tela7bCode.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.Tela7bCode.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.Tela7bCode.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.Tela7bCode.GDbgObjects1.length = 0;
gdjs.Tela7bCode.GDbgObjects2.length = 0;
gdjs.Tela7bCode.GDpersonagem_95escolaObjects1.length = 0;
gdjs.Tela7bCode.GDpersonagem_95escolaObjects2.length = 0;
gdjs.Tela7bCode.GDcursorObjects1.length = 0;
gdjs.Tela7bCode.GDcursorObjects2.length = 0;
gdjs.Tela7bCode.GDbg_95salaObjects1.length = 0;
gdjs.Tela7bCode.GDbg_95salaObjects2.length = 0;
gdjs.Tela7bCode.GDpersonagem_95maeObjects1.length = 0;
gdjs.Tela7bCode.GDpersonagem_95maeObjects2.length = 0;
gdjs.Tela7bCode.GDtxt_95mae1Objects1.length = 0;
gdjs.Tela7bCode.GDtxt_95mae1Objects2.length = 0;


{

gdjs.Tela7bCode.GDpersonagemObjects1.createFrom(runtimeScene.getObjects("personagem"));
gdjs.Tela7bCode.GDpersonagem_95maeObjects1.createFrom(runtimeScene.getObjects("personagem_mae"));

gdjs.Tela7bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela7bCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Tela7bCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela7bCode.GDpersonagemObjects1.length ;i < len;++i) {
    gdjs.Tela7bCode.GDpersonagemObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Tela7bCode.GDpersonagem_95maeObjects1.length ;i < len;++i) {
    gdjs.Tela7bCode.GDpersonagem_95maeObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{


gdjs.Tela7bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela7bCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Tela7bCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Tela7bCode.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela7bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela7bCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela7bCode.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela7bCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela7bCode.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.Tela7bCode.GDbtn_95voltarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela7bCode.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela7bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela7bCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela7bCode.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela7bCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela7bCode.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.Tela7bCode.GDbtn_95voltarObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela7bCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Tela7bCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Tela7bCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}


{


gdjs.Tela7bCode.condition0IsTrue_0.val = false;
gdjs.Tela7bCode.condition1IsTrue_0.val = false;
{
gdjs.Tela7bCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Tela7bCode.condition0IsTrue_0.val ) {
{
gdjs.Tela7bCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Tela7bCode.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.Tela7bCode.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela7bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela7bCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela7bCode.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela7bCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela6", false);
}}

}

} //End of subevents
}

}

return;
}
gdjs['Tela7bCode']= gdjs.Tela7bCode;
