gdjs.Tela4Code = {};


gdjs.Tela4Code.GDbtn_95ajudaObjects1= [];
gdjs.Tela4Code.GDbtn_95ajudaObjects2= [];
gdjs.Tela4Code.GDbtn_95voltarObjects1= [];
gdjs.Tela4Code.GDbtn_95voltarObjects2= [];
gdjs.Tela4Code.GDbtn_95avancarObjects1= [];
gdjs.Tela4Code.GDbtn_95avancarObjects2= [];
gdjs.Tela4Code.GDpersonagemObjects1= [];
gdjs.Tela4Code.GDpersonagemObjects2= [];
gdjs.Tela4Code.GDbalao_95fala_95esqObjects1= [];
gdjs.Tela4Code.GDbalao_95fala_95esqObjects2= [];
gdjs.Tela4Code.GDbalao_95fala_95dirObjects1= [];
gdjs.Tela4Code.GDbalao_95fala_95dirObjects2= [];
gdjs.Tela4Code.GDbgObjects1= [];
gdjs.Tela4Code.GDbgObjects2= [];
gdjs.Tela4Code.GDpersonagem_95escolaObjects1= [];
gdjs.Tela4Code.GDpersonagem_95escolaObjects2= [];
gdjs.Tela4Code.GDcursorObjects1= [];
gdjs.Tela4Code.GDcursorObjects2= [];
gdjs.Tela4Code.GDbg_95salaObjects1= [];
gdjs.Tela4Code.GDbg_95salaObjects2= [];
gdjs.Tela4Code.GDpersonagem_95maeObjects1= [];
gdjs.Tela4Code.GDpersonagem_95maeObjects2= [];
gdjs.Tela4Code.GDtxt_95mesadaObjects1= [];
gdjs.Tela4Code.GDtxt_95mesadaObjects2= [];

gdjs.Tela4Code.conditionTrue_0 = {val:false};
gdjs.Tela4Code.condition0IsTrue_0 = {val:false};
gdjs.Tela4Code.condition1IsTrue_0 = {val:false};
gdjs.Tela4Code.condition2IsTrue_0 = {val:false};

gdjs.Tela4Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Tela4Code.GDbtn_95ajudaObjects1.length = 0;
gdjs.Tela4Code.GDbtn_95ajudaObjects2.length = 0;
gdjs.Tela4Code.GDbtn_95voltarObjects1.length = 0;
gdjs.Tela4Code.GDbtn_95voltarObjects2.length = 0;
gdjs.Tela4Code.GDbtn_95avancarObjects1.length = 0;
gdjs.Tela4Code.GDbtn_95avancarObjects2.length = 0;
gdjs.Tela4Code.GDpersonagemObjects1.length = 0;
gdjs.Tela4Code.GDpersonagemObjects2.length = 0;
gdjs.Tela4Code.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.Tela4Code.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.Tela4Code.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.Tela4Code.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.Tela4Code.GDbgObjects1.length = 0;
gdjs.Tela4Code.GDbgObjects2.length = 0;
gdjs.Tela4Code.GDpersonagem_95escolaObjects1.length = 0;
gdjs.Tela4Code.GDpersonagem_95escolaObjects2.length = 0;
gdjs.Tela4Code.GDcursorObjects1.length = 0;
gdjs.Tela4Code.GDcursorObjects2.length = 0;
gdjs.Tela4Code.GDbg_95salaObjects1.length = 0;
gdjs.Tela4Code.GDbg_95salaObjects2.length = 0;
gdjs.Tela4Code.GDpersonagem_95maeObjects1.length = 0;
gdjs.Tela4Code.GDpersonagem_95maeObjects2.length = 0;
gdjs.Tela4Code.GDtxt_95mesadaObjects1.length = 0;
gdjs.Tela4Code.GDtxt_95mesadaObjects2.length = 0;


{

gdjs.Tela4Code.GDpersonagemObjects1.createFrom(runtimeScene.getObjects("personagem"));
gdjs.Tela4Code.GDpersonagem_95maeObjects1.createFrom(runtimeScene.getObjects("personagem_mae"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela4Code.GDpersonagemObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDpersonagemObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Tela4Code.GDpersonagem_95maeObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDpersonagem_95maeObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}{for(var i = 0, len = gdjs.Tela4Code.GDpersonagem_95maeObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDpersonagem_95maeObjects1[i].pauseAnimation();
}
}}

}


{


gdjs.Tela4Code.condition0IsTrue_0.val = false;
gdjs.Tela4Code.condition1IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Tela4Code.condition0IsTrue_0.val ) {
{
gdjs.Tela4Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Tela4Code.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.Tela4Code.GDbtn_95avancarObjects2.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela4Code.GDbtn_95avancarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela5", false);
}}

}


{

gdjs.Tela4Code.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela4Code.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela3", false);
}}

}

} //End of subevents
}

}


{


gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Tela4Code.GDbtn_95ajudaObjects1.createFrom(runtimeScene.getObjects("btn_ajuda"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_ajuda", gdjs.Tela4Code.GDbtn_95ajudaObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela4Code.GDbtn_95ajudaObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDbtn_95ajudaObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela4Code.GDbtn_95ajudaObjects1.createFrom(runtimeScene.getObjects("btn_ajuda"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_ajuda", gdjs.Tela4Code.GDbtn_95ajudaObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela4Code.GDbtn_95ajudaObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDbtn_95ajudaObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela4Code.GDbtn_95avancarObjects1.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela4Code.GDbtn_95avancarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela4Code.GDbtn_95avancarObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDbtn_95avancarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela4Code.GDbtn_95avancarObjects1.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela4Code.GDbtn_95avancarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela4Code.GDbtn_95avancarObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDbtn_95avancarObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela4Code.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela4Code.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela4Code.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDbtn_95voltarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela4Code.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela4Code.condition0IsTrue_0.val = false;
{
gdjs.Tela4Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela4Code.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela4Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela4Code.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDbtn_95voltarObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela4Code.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Tela4Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Tela4Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}

return;
}
gdjs['Tela4Code']= gdjs.Tela4Code;
