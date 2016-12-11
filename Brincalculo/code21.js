gdjs.Tela16Code = {};


gdjs.Tela16Code.GDbtn_95ajudaObjects1= [];
gdjs.Tela16Code.GDbtn_95ajudaObjects2= [];
gdjs.Tela16Code.GDbtn_95ajudaObjects3= [];
gdjs.Tela16Code.GDbtn_95voltarObjects1= [];
gdjs.Tela16Code.GDbtn_95voltarObjects2= [];
gdjs.Tela16Code.GDbtn_95voltarObjects3= [];
gdjs.Tela16Code.GDbtn_95avancarObjects1= [];
gdjs.Tela16Code.GDbtn_95avancarObjects2= [];
gdjs.Tela16Code.GDbtn_95avancarObjects3= [];
gdjs.Tela16Code.GDpersonagemObjects1= [];
gdjs.Tela16Code.GDpersonagemObjects2= [];
gdjs.Tela16Code.GDpersonagemObjects3= [];
gdjs.Tela16Code.GDbalao_95fala_95esqObjects1= [];
gdjs.Tela16Code.GDbalao_95fala_95esqObjects2= [];
gdjs.Tela16Code.GDbalao_95fala_95esqObjects3= [];
gdjs.Tela16Code.GDbalao_95fala_95dirObjects1= [];
gdjs.Tela16Code.GDbalao_95fala_95dirObjects2= [];
gdjs.Tela16Code.GDbalao_95fala_95dirObjects3= [];
gdjs.Tela16Code.GDbgObjects1= [];
gdjs.Tela16Code.GDbgObjects2= [];
gdjs.Tela16Code.GDbgObjects3= [];
gdjs.Tela16Code.GDpersonagem_95escolaObjects1= [];
gdjs.Tela16Code.GDpersonagem_95escolaObjects2= [];
gdjs.Tela16Code.GDpersonagem_95escolaObjects3= [];
gdjs.Tela16Code.GDcursorObjects1= [];
gdjs.Tela16Code.GDcursorObjects2= [];
gdjs.Tela16Code.GDcursorObjects3= [];
gdjs.Tela16Code.GDbg_95escolaObjects1= [];
gdjs.Tela16Code.GDbg_95escolaObjects2= [];
gdjs.Tela16Code.GDbg_95escolaObjects3= [];
gdjs.Tela16Code.GDNewObject2Objects1= [];
gdjs.Tela16Code.GDNewObject2Objects2= [];
gdjs.Tela16Code.GDNewObject2Objects3= [];

gdjs.Tela16Code.conditionTrue_0 = {val:false};
gdjs.Tela16Code.condition0IsTrue_0 = {val:false};
gdjs.Tela16Code.condition1IsTrue_0 = {val:false};
gdjs.Tela16Code.condition2IsTrue_0 = {val:false};

gdjs.Tela16Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Tela16Code.GDbtn_95ajudaObjects1.length = 0;
gdjs.Tela16Code.GDbtn_95ajudaObjects2.length = 0;
gdjs.Tela16Code.GDbtn_95ajudaObjects3.length = 0;
gdjs.Tela16Code.GDbtn_95voltarObjects1.length = 0;
gdjs.Tela16Code.GDbtn_95voltarObjects2.length = 0;
gdjs.Tela16Code.GDbtn_95voltarObjects3.length = 0;
gdjs.Tela16Code.GDbtn_95avancarObjects1.length = 0;
gdjs.Tela16Code.GDbtn_95avancarObjects2.length = 0;
gdjs.Tela16Code.GDbtn_95avancarObjects3.length = 0;
gdjs.Tela16Code.GDpersonagemObjects1.length = 0;
gdjs.Tela16Code.GDpersonagemObjects2.length = 0;
gdjs.Tela16Code.GDpersonagemObjects3.length = 0;
gdjs.Tela16Code.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.Tela16Code.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.Tela16Code.GDbalao_95fala_95esqObjects3.length = 0;
gdjs.Tela16Code.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.Tela16Code.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.Tela16Code.GDbalao_95fala_95dirObjects3.length = 0;
gdjs.Tela16Code.GDbgObjects1.length = 0;
gdjs.Tela16Code.GDbgObjects2.length = 0;
gdjs.Tela16Code.GDbgObjects3.length = 0;
gdjs.Tela16Code.GDpersonagem_95escolaObjects1.length = 0;
gdjs.Tela16Code.GDpersonagem_95escolaObjects2.length = 0;
gdjs.Tela16Code.GDpersonagem_95escolaObjects3.length = 0;
gdjs.Tela16Code.GDcursorObjects1.length = 0;
gdjs.Tela16Code.GDcursorObjects2.length = 0;
gdjs.Tela16Code.GDcursorObjects3.length = 0;
gdjs.Tela16Code.GDbg_95escolaObjects1.length = 0;
gdjs.Tela16Code.GDbg_95escolaObjects2.length = 0;
gdjs.Tela16Code.GDbg_95escolaObjects3.length = 0;
gdjs.Tela16Code.GDNewObject2Objects1.length = 0;
gdjs.Tela16Code.GDNewObject2Objects2.length = 0;
gdjs.Tela16Code.GDNewObject2Objects3.length = 0;


{

gdjs.Tela16Code.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Tela16Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Tela16Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}


{

gdjs.Tela16Code.GDpersonagem_95escolaObjects1.createFrom(runtimeScene.getObjects("personagem_escola"));

gdjs.Tela16Code.condition0IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Tela16Code.condition0IsTrue_0.val) {
{runtimeScene.getVariables().get("Clique").setNumber(0);
}{for(var i = 0, len = gdjs.Tela16Code.GDpersonagem_95escolaObjects1.length ;i < len;++i) {
    gdjs.Tela16Code.GDpersonagem_95escolaObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{



{

gdjs.Tela16Code.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela16Code.condition0IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela16Code.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela16Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela16Code.GDbtn_95voltarObjects2.length ;i < len;++i) {
    gdjs.Tela16Code.GDbtn_95voltarObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Tela16Code.condition0IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Tela16Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Tela16Code.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela16Code.condition0IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela16Code.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela16Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela16Code.GDbtn_95voltarObjects2.length ;i < len;++i) {
    gdjs.Tela16Code.GDbtn_95voltarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.Tela16Code.GDbtn_95avancarObjects2.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela16Code.condition0IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela16Code.GDbtn_95avancarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela16Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela16Code.GDbtn_95avancarObjects2.length ;i < len;++i) {
    gdjs.Tela16Code.GDbtn_95avancarObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.Tela16Code.GDbtn_95avancarObjects2.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela16Code.condition0IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela16Code.GDbtn_95avancarObjects2).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela16Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela16Code.GDbtn_95avancarObjects2.length ;i < len;++i) {
    gdjs.Tela16Code.GDbtn_95avancarObjects2[i].setAnimation(0);
}
}}

}


{


gdjs.Tela16Code.condition0IsTrue_0.val = false;
gdjs.Tela16Code.condition1IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Tela16Code.condition0IsTrue_0.val ) {
{
gdjs.Tela16Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Tela16Code.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.Tela16Code.GDbtn_95voltarObjects3.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela16Code.condition0IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela16Code.GDbtn_95voltarObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela16Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela15", false);
}}

}


{

gdjs.Tela16Code.GDbtn_95avancarObjects3.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela16Code.condition0IsTrue_0.val = false;
{
gdjs.Tela16Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela16Code.GDbtn_95avancarObjects3).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela16Code.condition0IsTrue_0.val) {
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
gdjs['Tela16Code']= gdjs.Tela16Code;
