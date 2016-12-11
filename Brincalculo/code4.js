gdjs.Tela3Code = {};


gdjs.Tela3Code.GDbtn_95ajudaObjects1= [];
gdjs.Tela3Code.GDbtn_95ajudaObjects2= [];
gdjs.Tela3Code.GDbtn_95voltarObjects1= [];
gdjs.Tela3Code.GDbtn_95voltarObjects2= [];
gdjs.Tela3Code.GDbtn_95avancarObjects1= [];
gdjs.Tela3Code.GDbtn_95avancarObjects2= [];
gdjs.Tela3Code.GDpersonagemObjects1= [];
gdjs.Tela3Code.GDpersonagemObjects2= [];
gdjs.Tela3Code.GDbalao_95fala_95esqObjects1= [];
gdjs.Tela3Code.GDbalao_95fala_95esqObjects2= [];
gdjs.Tela3Code.GDbalao_95fala_95dirObjects1= [];
gdjs.Tela3Code.GDbalao_95fala_95dirObjects2= [];
gdjs.Tela3Code.GDbgObjects1= [];
gdjs.Tela3Code.GDbgObjects2= [];
gdjs.Tela3Code.GDpersonagem_95escolaObjects1= [];
gdjs.Tela3Code.GDpersonagem_95escolaObjects2= [];
gdjs.Tela3Code.GDcursorObjects1= [];
gdjs.Tela3Code.GDcursorObjects2= [];
gdjs.Tela3Code.GDbg_95mapaObjects1= [];
gdjs.Tela3Code.GDbg_95mapaObjects2= [];
gdjs.Tela3Code.GDtxt_95introdutorioObjects1= [];
gdjs.Tela3Code.GDtxt_95introdutorioObjects2= [];

gdjs.Tela3Code.conditionTrue_0 = {val:false};
gdjs.Tela3Code.condition0IsTrue_0 = {val:false};
gdjs.Tela3Code.condition1IsTrue_0 = {val:false};
gdjs.Tela3Code.condition2IsTrue_0 = {val:false};

gdjs.Tela3Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Tela3Code.GDbtn_95ajudaObjects1.length = 0;
gdjs.Tela3Code.GDbtn_95ajudaObjects2.length = 0;
gdjs.Tela3Code.GDbtn_95voltarObjects1.length = 0;
gdjs.Tela3Code.GDbtn_95voltarObjects2.length = 0;
gdjs.Tela3Code.GDbtn_95avancarObjects1.length = 0;
gdjs.Tela3Code.GDbtn_95avancarObjects2.length = 0;
gdjs.Tela3Code.GDpersonagemObjects1.length = 0;
gdjs.Tela3Code.GDpersonagemObjects2.length = 0;
gdjs.Tela3Code.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.Tela3Code.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.Tela3Code.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.Tela3Code.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.Tela3Code.GDbgObjects1.length = 0;
gdjs.Tela3Code.GDbgObjects2.length = 0;
gdjs.Tela3Code.GDpersonagem_95escolaObjects1.length = 0;
gdjs.Tela3Code.GDpersonagem_95escolaObjects2.length = 0;
gdjs.Tela3Code.GDcursorObjects1.length = 0;
gdjs.Tela3Code.GDcursorObjects2.length = 0;
gdjs.Tela3Code.GDbg_95mapaObjects1.length = 0;
gdjs.Tela3Code.GDbg_95mapaObjects2.length = 0;
gdjs.Tela3Code.GDtxt_95introdutorioObjects1.length = 0;
gdjs.Tela3Code.GDtxt_95introdutorioObjects2.length = 0;


{


gdjs.Tela3Code.condition0IsTrue_0.val = false;
gdjs.Tela3Code.condition1IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if ( gdjs.Tela3Code.condition0IsTrue_0.val ) {
{
gdjs.Tela3Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
}}
if (gdjs.Tela3Code.condition1IsTrue_0.val) {

{ //Subevents

{

gdjs.Tela3Code.GDbtn_95voltarObjects2.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela3Code.GDbtn_95voltarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela2", false);
}}

}


{

gdjs.Tela3Code.GDbtn_95avancarObjects2.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela3Code.GDbtn_95avancarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela4", false);
}}

}

} //End of subevents
}

}


{


gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Tela3Code.GDbtn_95ajudaObjects1.createFrom(runtimeScene.getObjects("btn_ajuda"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_ajuda", gdjs.Tela3Code.GDbtn_95ajudaObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela3Code.GDbtn_95ajudaObjects1.length ;i < len;++i) {
    gdjs.Tela3Code.GDbtn_95ajudaObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela3Code.GDbtn_95ajudaObjects1.createFrom(runtimeScene.getObjects("btn_ajuda"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_ajuda", gdjs.Tela3Code.GDbtn_95ajudaObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela3Code.GDbtn_95ajudaObjects1.length ;i < len;++i) {
    gdjs.Tela3Code.GDbtn_95ajudaObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela3Code.GDbtn_95avancarObjects1.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela3Code.GDbtn_95avancarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela3Code.GDbtn_95avancarObjects1.length ;i < len;++i) {
    gdjs.Tela3Code.GDbtn_95avancarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela3Code.GDbtn_95avancarObjects1.createFrom(runtimeScene.getObjects("btn_avancar"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_avancar", gdjs.Tela3Code.GDbtn_95avancarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela3Code.GDbtn_95avancarObjects1.length ;i < len;++i) {
    gdjs.Tela3Code.GDbtn_95avancarObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela3Code.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela3Code.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela3Code.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.Tela3Code.GDbtn_95voltarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela3Code.GDbtn_95voltarObjects1.createFrom(runtimeScene.getObjects("btn_voltar"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_voltar", gdjs.Tela3Code.GDbtn_95voltarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela3Code.GDbtn_95voltarObjects1.length ;i < len;++i) {
    gdjs.Tela3Code.GDbtn_95voltarObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Tela3Code.GDpersonagemObjects1.createFrom(runtimeScene.getObjects("personagem"));

gdjs.Tela3Code.condition0IsTrue_0.val = false;
{
gdjs.Tela3Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Tela3Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela3Code.GDpersonagemObjects1.length ;i < len;++i) {
    gdjs.Tela3Code.GDpersonagemObjects1[i].setAnimation(gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)));
}
}}

}


{

gdjs.Tela3Code.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Tela3Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Tela3Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}

return;
}
gdjs['Tela3Code']= gdjs.Tela3Code;
