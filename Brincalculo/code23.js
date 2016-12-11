gdjs.Tela18aCode = {};


gdjs.Tela18aCode.GDbtn_95ajudaObjects1= [];
gdjs.Tela18aCode.GDbtn_95ajudaObjects2= [];
gdjs.Tela18aCode.GDbtn_95ajudaObjects3= [];
gdjs.Tela18aCode.GDbtn_95voltarObjects1= [];
gdjs.Tela18aCode.GDbtn_95voltarObjects2= [];
gdjs.Tela18aCode.GDbtn_95voltarObjects3= [];
gdjs.Tela18aCode.GDbtn_95avancarObjects1= [];
gdjs.Tela18aCode.GDbtn_95avancarObjects2= [];
gdjs.Tela18aCode.GDbtn_95avancarObjects3= [];
gdjs.Tela18aCode.GDpersonagemObjects1= [];
gdjs.Tela18aCode.GDpersonagemObjects2= [];
gdjs.Tela18aCode.GDpersonagemObjects3= [];
gdjs.Tela18aCode.GDbalao_95fala_95esqObjects1= [];
gdjs.Tela18aCode.GDbalao_95fala_95esqObjects2= [];
gdjs.Tela18aCode.GDbalao_95fala_95esqObjects3= [];
gdjs.Tela18aCode.GDbalao_95fala_95dirObjects1= [];
gdjs.Tela18aCode.GDbalao_95fala_95dirObjects2= [];
gdjs.Tela18aCode.GDbalao_95fala_95dirObjects3= [];
gdjs.Tela18aCode.GDbgObjects1= [];
gdjs.Tela18aCode.GDbgObjects2= [];
gdjs.Tela18aCode.GDbgObjects3= [];
gdjs.Tela18aCode.GDpersonagem_95escolaObjects1= [];
gdjs.Tela18aCode.GDpersonagem_95escolaObjects2= [];
gdjs.Tela18aCode.GDpersonagem_95escolaObjects3= [];
gdjs.Tela18aCode.GDcursorObjects1= [];
gdjs.Tela18aCode.GDcursorObjects2= [];
gdjs.Tela18aCode.GDcursorObjects3= [];
gdjs.Tela18aCode.GDbg_95escolaObjects1= [];
gdjs.Tela18aCode.GDbg_95escolaObjects2= [];
gdjs.Tela18aCode.GDbg_95escolaObjects3= [];
gdjs.Tela18aCode.GDtxt_95colegasObjects1= [];
gdjs.Tela18aCode.GDtxt_95colegasObjects2= [];
gdjs.Tela18aCode.GDtxt_95colegasObjects3= [];

gdjs.Tela18aCode.conditionTrue_0 = {val:false};
gdjs.Tela18aCode.condition0IsTrue_0 = {val:false};
gdjs.Tela18aCode.condition1IsTrue_0 = {val:false};
gdjs.Tela18aCode.condition2IsTrue_0 = {val:false};

gdjs.Tela18aCode.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Tela18aCode.GDbtn_95ajudaObjects1.length = 0;
gdjs.Tela18aCode.GDbtn_95ajudaObjects2.length = 0;
gdjs.Tela18aCode.GDbtn_95ajudaObjects3.length = 0;
gdjs.Tela18aCode.GDbtn_95voltarObjects1.length = 0;
gdjs.Tela18aCode.GDbtn_95voltarObjects2.length = 0;
gdjs.Tela18aCode.GDbtn_95voltarObjects3.length = 0;
gdjs.Tela18aCode.GDbtn_95avancarObjects1.length = 0;
gdjs.Tela18aCode.GDbtn_95avancarObjects2.length = 0;
gdjs.Tela18aCode.GDbtn_95avancarObjects3.length = 0;
gdjs.Tela18aCode.GDpersonagemObjects1.length = 0;
gdjs.Tela18aCode.GDpersonagemObjects2.length = 0;
gdjs.Tela18aCode.GDpersonagemObjects3.length = 0;
gdjs.Tela18aCode.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.Tela18aCode.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.Tela18aCode.GDbalao_95fala_95esqObjects3.length = 0;
gdjs.Tela18aCode.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.Tela18aCode.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.Tela18aCode.GDbalao_95fala_95dirObjects3.length = 0;
gdjs.Tela18aCode.GDbgObjects1.length = 0;
gdjs.Tela18aCode.GDbgObjects2.length = 0;
gdjs.Tela18aCode.GDbgObjects3.length = 0;
gdjs.Tela18aCode.GDpersonagem_95escolaObjects1.length = 0;
gdjs.Tela18aCode.GDpersonagem_95escolaObjects2.length = 0;
gdjs.Tela18aCode.GDpersonagem_95escolaObjects3.length = 0;
gdjs.Tela18aCode.GDcursorObjects1.length = 0;
gdjs.Tela18aCode.GDcursorObjects2.length = 0;
gdjs.Tela18aCode.GDcursorObjects3.length = 0;
gdjs.Tela18aCode.GDbg_95escolaObjects1.length = 0;
gdjs.Tela18aCode.GDbg_95escolaObjects2.length = 0;
gdjs.Tela18aCode.GDbg_95escolaObjects3.length = 0;
gdjs.Tela18aCode.GDtxt_95colegasObjects1.length = 0;
gdjs.Tela18aCode.GDtxt_95colegasObjects2.length = 0;
gdjs.Tela18aCode.GDtxt_95colegasObjects3.length = 0;


{

gdjs.Tela18aCode.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Tela18aCode.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Tela18aCode.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}


{

gdjs.Tela18aCode.GDpersonagem_95escolaObjects1.createFrom(runtimeScene.getObjects("personagem_escola"));

gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Clique").setNumber(0);
}{for(var i = 0, len = gdjs.Tela18aCode.GDpersonagem_95escolaObjects1.length ;i < len;++i) {
    gdjs.Tela18aCode.GDpersonagem_95escolaObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.Tela18aCode.GDtxt_95colegasObjects1.createFrom(runtimeScene.getObjects("txt_colegas"));

gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 1;
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela18aCode.GDtxt_95colegasObjects1.length ;i < len;++i) {
    gdjs.Tela18aCode.GDtxt_95colegasObjects1[i].setString("Muito obrigada pelos presentes, Kamila!!");
}
}}

}


{



{

gdjs.Tela18aCode.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela18aCode.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela18aCode.GDbtn_95voltarObjects2.length ;i < len;++i) {
    gdjs.Tela18aCode.GDbtn_95voltarObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Tela18aCode.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela18aCode.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela18aCode.GDbtn_95voltarObjects2.length ;i < len;++i) {
    gdjs.Tela18aCode.GDbtn_95voltarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.Tela18aCode.GDbtn_95avancarObjects2.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela18aCode.GDbtn_95avancarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela18aCode.GDbtn_95avancarObjects2.length ;i < len;++i) {
    gdjs.Tela18aCode.GDbtn_95avancarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.Tela18aCode.GDbtn_95avancarObjects2.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela18aCode.GDbtn_95avancarObjects2).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela18aCode.GDbtn_95avancarObjects2.length ;i < len;++i) {
    gdjs.Tela18aCode.GDbtn_95avancarObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Tela18aCode.condition0IsTrue_0.val = false;
gdjs.Tela18aCode.condition1IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Tela18aCode.condition0IsTrue_0.val ) {
{
gdjs.Tela18aCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Tela18aCode.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.Tela18aCode.GDbtn_95voltarObjects3.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela18aCode.GDbtn_95voltarObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela17", false);
}}

}


{

gdjs.Tela18aCode.GDbtn_95avancarObjects3.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela18aCode.condition0IsTrue_0.val = false;
{
gdjs.Tela18aCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela18aCode.GDbtn_95avancarObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela18aCode.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela19", false);
}}

}

} //End of subevents
}

}


}

return;
}
gdjs['Tela18aCode']= gdjs.Tela18aCode;
