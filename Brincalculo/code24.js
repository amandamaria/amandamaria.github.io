gdjs.Tela18bCode = {};


gdjs.Tela18bCode.GDbtn_95ajudaObjects1= [];
gdjs.Tela18bCode.GDbtn_95ajudaObjects2= [];
gdjs.Tela18bCode.GDbtn_95ajudaObjects3= [];
gdjs.Tela18bCode.GDbtn_95voltarObjects1= [];
gdjs.Tela18bCode.GDbtn_95voltarObjects2= [];
gdjs.Tela18bCode.GDbtn_95voltarObjects3= [];
gdjs.Tela18bCode.GDbtn_95avancarObjects1= [];
gdjs.Tela18bCode.GDbtn_95avancarObjects2= [];
gdjs.Tela18bCode.GDbtn_95avancarObjects3= [];
gdjs.Tela18bCode.GDpersonagemObjects1= [];
gdjs.Tela18bCode.GDpersonagemObjects2= [];
gdjs.Tela18bCode.GDpersonagemObjects3= [];
gdjs.Tela18bCode.GDbalao_95fala_95esqObjects1= [];
gdjs.Tela18bCode.GDbalao_95fala_95esqObjects2= [];
gdjs.Tela18bCode.GDbalao_95fala_95esqObjects3= [];
gdjs.Tela18bCode.GDbalao_95fala_95dirObjects1= [];
gdjs.Tela18bCode.GDbalao_95fala_95dirObjects2= [];
gdjs.Tela18bCode.GDbalao_95fala_95dirObjects3= [];
gdjs.Tela18bCode.GDbgObjects1= [];
gdjs.Tela18bCode.GDbgObjects2= [];
gdjs.Tela18bCode.GDbgObjects3= [];
gdjs.Tela18bCode.GDpersonagem_95escolaObjects1= [];
gdjs.Tela18bCode.GDpersonagem_95escolaObjects2= [];
gdjs.Tela18bCode.GDpersonagem_95escolaObjects3= [];
gdjs.Tela18bCode.GDcursorObjects1= [];
gdjs.Tela18bCode.GDcursorObjects2= [];
gdjs.Tela18bCode.GDcursorObjects3= [];
gdjs.Tela18bCode.GDbg_95escolaObjects1= [];
gdjs.Tela18bCode.GDbg_95escolaObjects2= [];
gdjs.Tela18bCode.GDbg_95escolaObjects3= [];
gdjs.Tela18bCode.GDtxt_95colegasObjects1= [];
gdjs.Tela18bCode.GDtxt_95colegasObjects2= [];
gdjs.Tela18bCode.GDtxt_95colegasObjects3= [];

gdjs.Tela18bCode.conditionTrue_0 = {val:false};
gdjs.Tela18bCode.condition0IsTrue_0 = {val:false};
gdjs.Tela18bCode.condition1IsTrue_0 = {val:false};
gdjs.Tela18bCode.condition2IsTrue_0 = {val:false};

gdjs.Tela18bCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Tela18bCode.GDbtn_95ajudaObjects1.length = 0;
gdjs.Tela18bCode.GDbtn_95ajudaObjects2.length = 0;
gdjs.Tela18bCode.GDbtn_95ajudaObjects3.length = 0;
gdjs.Tela18bCode.GDbtn_95voltarObjects1.length = 0;
gdjs.Tela18bCode.GDbtn_95voltarObjects2.length = 0;
gdjs.Tela18bCode.GDbtn_95voltarObjects3.length = 0;
gdjs.Tela18bCode.GDbtn_95avancarObjects1.length = 0;
gdjs.Tela18bCode.GDbtn_95avancarObjects2.length = 0;
gdjs.Tela18bCode.GDbtn_95avancarObjects3.length = 0;
gdjs.Tela18bCode.GDpersonagemObjects1.length = 0;
gdjs.Tela18bCode.GDpersonagemObjects2.length = 0;
gdjs.Tela18bCode.GDpersonagemObjects3.length = 0;
gdjs.Tela18bCode.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.Tela18bCode.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.Tela18bCode.GDbalao_95fala_95esqObjects3.length = 0;
gdjs.Tela18bCode.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.Tela18bCode.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.Tela18bCode.GDbalao_95fala_95dirObjects3.length = 0;
gdjs.Tela18bCode.GDbgObjects1.length = 0;
gdjs.Tela18bCode.GDbgObjects2.length = 0;
gdjs.Tela18bCode.GDbgObjects3.length = 0;
gdjs.Tela18bCode.GDpersonagem_95escolaObjects1.length = 0;
gdjs.Tela18bCode.GDpersonagem_95escolaObjects2.length = 0;
gdjs.Tela18bCode.GDpersonagem_95escolaObjects3.length = 0;
gdjs.Tela18bCode.GDcursorObjects1.length = 0;
gdjs.Tela18bCode.GDcursorObjects2.length = 0;
gdjs.Tela18bCode.GDcursorObjects3.length = 0;
gdjs.Tela18bCode.GDbg_95escolaObjects1.length = 0;
gdjs.Tela18bCode.GDbg_95escolaObjects2.length = 0;
gdjs.Tela18bCode.GDbg_95escolaObjects3.length = 0;
gdjs.Tela18bCode.GDtxt_95colegasObjects1.length = 0;
gdjs.Tela18bCode.GDtxt_95colegasObjects2.length = 0;
gdjs.Tela18bCode.GDtxt_95colegasObjects3.length = 0;


{

gdjs.Tela18bCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Tela18bCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Tela18bCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}


{

gdjs.Tela18bCode.GDpersonagem_95escolaObjects1.createFrom(runtimeScene.getObjects("personagem_escola"));

gdjs.Tela18bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18bCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Tela18bCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Clique").setNumber(0);
}{for(var i = 0, len = gdjs.Tela18bCode.GDpersonagem_95escolaObjects1.length ;i < len;++i) {
    gdjs.Tela18bCode.GDpersonagem_95escolaObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{



{

gdjs.Tela18bCode.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela18bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18bCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela18bCode.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela18bCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela18bCode.GDbtn_95voltarObjects2.length ;i < len;++i) {
    gdjs.Tela18bCode.GDbtn_95voltarObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Tela18bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18bCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Tela18bCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Tela18bCode.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela18bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18bCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela18bCode.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela18bCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela18bCode.GDbtn_95voltarObjects2.length ;i < len;++i) {
    gdjs.Tela18bCode.GDbtn_95voltarObjects2[i].setAnimation(1);
}
}}

}


{


gdjs.Tela18bCode.condition0IsTrue_0.val = false;
gdjs.Tela18bCode.condition1IsTrue_0.val = false;
{
gdjs.Tela18bCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Tela18bCode.condition0IsTrue_0.val ) {
{
gdjs.Tela18bCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Tela18bCode.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.Tela18bCode.GDbtn_95voltarObjects3.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela18bCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18bCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela18bCode.GDbtn_95voltarObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela18bCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela17", false);
}}

}

} //End of subevents
}

}


}

return;
}
gdjs['Tela18bCode']= gdjs.Tela18bCode;
