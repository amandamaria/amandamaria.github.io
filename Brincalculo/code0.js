gdjs.Tela0Code = {};


gdjs.Tela0Code.GDbtn_95ajudaObjects1= [];
gdjs.Tela0Code.GDbtn_95ajudaObjects2= [];
gdjs.Tela0Code.GDbtn_95voltarObjects1= [];
gdjs.Tela0Code.GDbtn_95voltarObjects2= [];
gdjs.Tela0Code.GDbtn_95avancarObjects1= [];
gdjs.Tela0Code.GDbtn_95avancarObjects2= [];
gdjs.Tela0Code.GDpersonagemObjects1= [];
gdjs.Tela0Code.GDpersonagemObjects2= [];
gdjs.Tela0Code.GDbalao_95fala_95esqObjects1= [];
gdjs.Tela0Code.GDbalao_95fala_95esqObjects2= [];
gdjs.Tela0Code.GDbalao_95fala_95dirObjects1= [];
gdjs.Tela0Code.GDbalao_95fala_95dirObjects2= [];
gdjs.Tela0Code.GDbgObjects1= [];
gdjs.Tela0Code.GDbgObjects2= [];
gdjs.Tela0Code.GDpersonagem_95escolaObjects1= [];
gdjs.Tela0Code.GDpersonagem_95escolaObjects2= [];
gdjs.Tela0Code.GDcursorObjects1= [];
gdjs.Tela0Code.GDcursorObjects2= [];
gdjs.Tela0Code.GDbtn_95iniciarObjects1= [];
gdjs.Tela0Code.GDbtn_95iniciarObjects2= [];
gdjs.Tela0Code.GDbtn_95creditosObjects1= [];
gdjs.Tela0Code.GDbtn_95creditosObjects2= [];

gdjs.Tela0Code.conditionTrue_0 = {val:false};
gdjs.Tela0Code.condition0IsTrue_0 = {val:false};
gdjs.Tela0Code.condition1IsTrue_0 = {val:false};
gdjs.Tela0Code.condition2IsTrue_0 = {val:false};

gdjs.Tela0Code.func = function(runtimeScene, context) {
context.startNewFrame();
gdjs.Tela0Code.GDbtn_95ajudaObjects1.length = 0;
gdjs.Tela0Code.GDbtn_95ajudaObjects2.length = 0;
gdjs.Tela0Code.GDbtn_95voltarObjects1.length = 0;
gdjs.Tela0Code.GDbtn_95voltarObjects2.length = 0;
gdjs.Tela0Code.GDbtn_95avancarObjects1.length = 0;
gdjs.Tela0Code.GDbtn_95avancarObjects2.length = 0;
gdjs.Tela0Code.GDpersonagemObjects1.length = 0;
gdjs.Tela0Code.GDpersonagemObjects2.length = 0;
gdjs.Tela0Code.GDbalao_95fala_95esqObjects1.length = 0;
gdjs.Tela0Code.GDbalao_95fala_95esqObjects2.length = 0;
gdjs.Tela0Code.GDbalao_95fala_95dirObjects1.length = 0;
gdjs.Tela0Code.GDbalao_95fala_95dirObjects2.length = 0;
gdjs.Tela0Code.GDbgObjects1.length = 0;
gdjs.Tela0Code.GDbgObjects2.length = 0;
gdjs.Tela0Code.GDpersonagem_95escolaObjects1.length = 0;
gdjs.Tela0Code.GDpersonagem_95escolaObjects2.length = 0;
gdjs.Tela0Code.GDcursorObjects1.length = 0;
gdjs.Tela0Code.GDcursorObjects2.length = 0;
gdjs.Tela0Code.GDbtn_95iniciarObjects1.length = 0;
gdjs.Tela0Code.GDbtn_95iniciarObjects2.length = 0;
gdjs.Tela0Code.GDbtn_95creditosObjects1.length = 0;
gdjs.Tela0Code.GDbtn_95creditosObjects2.length = 0;


{

gdjs.Tela0Code.GDbtn_95iniciarObjects1.createFrom(runtimeScene.getObjects("btn_iniciar"));

gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_iniciar", gdjs.Tela0Code.GDbtn_95iniciarObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela0Code.GDbtn_95iniciarObjects1.length ;i < len;++i) {
    gdjs.Tela0Code.GDbtn_95iniciarObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela0Code.GDbtn_95iniciarObjects1.createFrom(runtimeScene.getObjects("btn_iniciar"));

gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela0Code.GDbtn_95iniciarObjects1.length ;i < len;++i) {
    gdjs.Tela0Code.GDbtn_95iniciarObjects1[i].setAnimation(1);
}
}
{ //Subevents

{

gdjs.Tela0Code.GDbtn_95creditosObjects2.createFrom(runtimeScene.getObjects("btn_creditos"));

gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_creditos", gdjs.Tela0Code.GDbtn_95creditosObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TelaCreditos", false);
}{gdjs.evtTools.sound.playSound(runtimeScene, "158643__pleasurethepriestess__finger-snap-1.wav", false, 100, 1);
}{runtimeScene.getGame().getVariables().get("cliqueCreditos").setNumber(1);
}}

}


{

gdjs.Tela0Code.GDbtn_95iniciarObjects2.createFrom(gdjs.Tela0Code.GDbtn_95iniciarObjects1);

gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_iniciar", gdjs.Tela0Code.GDbtn_95iniciarObjects2).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().get("cliqueCreditos").setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "131660__bertrof__game-sound-correct.wav", false, 100, 1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Tela1", false);
}}

}

} //End of subevents
}

}


{

gdjs.Tela0Code.GDbtn_95creditosObjects1.createFrom(runtimeScene.getObjects("btn_creditos"));

gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_creditos", gdjs.Tela0Code.GDbtn_95creditosObjects1).getEventsObjectsMap(), runtimeScene, true, true);
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela0Code.GDbtn_95creditosObjects1.length ;i < len;++i) {
    gdjs.Tela0Code.GDbtn_95creditosObjects1[i].setAnimation(0);
}
}}

}


{

gdjs.Tela0Code.GDbtn_95creditosObjects1.createFrom(runtimeScene.getObjects("btn_creditos"));

gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_creditos", gdjs.Tela0Code.GDbtn_95creditosObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela0Code.GDbtn_95creditosObjects1.length ;i < len;++i) {
    gdjs.Tela0Code.GDbtn_95creditosObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = !(gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left"));
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{

gdjs.Tela0Code.GDbtn_95iniciarObjects1.createFrom(runtimeScene.getObjects("btn_iniciar"));

gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(context.clearEventsObjectsMap().addObjectsToEventsMap("btn_iniciar", gdjs.Tela0Code.GDbtn_95iniciarObjects1).getEventsObjectsMap(), runtimeScene, true, false);
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{for(var i = 0, len = gdjs.Tela0Code.GDbtn_95iniciarObjects1.length ;i < len;++i) {
    gdjs.Tela0Code.GDbtn_95iniciarObjects1[i].setAnimation(1);
}
}}

}


{


gdjs.Tela0Code.condition0IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.Tela0Code.condition0IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(2).setNumber(gdjs.random(32)+27);
}{runtimeScene.getGame().getVariables().get("nota20").setNumber(0);
}{runtimeScene.getGame().getVariables().get("notas10").setNumber(0);
}{runtimeScene.getGame().getVariables().get("notas5").setNumber(0);
}{runtimeScene.getGame().getVariables().get("notas2").setNumber(0);
}{runtimeScene.getGame().getVariables().get("moedas").setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}}

}


{

gdjs.Tela0Code.GDcursorObjects1.createFrom(runtimeScene.getObjects("cursor"));

{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Tela0Code.GDcursorObjects1.length ;i < len;++i) {
    gdjs.Tela0Code.GDcursorObjects1[i].setPosition(gdjs.evtTools.input.getMouseX(runtimeScene, "", 0)-80,gdjs.evtTools.input.getMouseY(runtimeScene, "", 0));
}
}
}


{


gdjs.Tela0Code.condition0IsTrue_0.val = false;
gdjs.Tela0Code.condition1IsTrue_0.val = false;
{
gdjs.Tela0Code.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if ( gdjs.Tela0Code.condition0IsTrue_0.val ) {
{
gdjs.Tela0Code.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().get("cliqueCreditos")) == 0;
}}
if (gdjs.Tela0Code.condition1IsTrue_0.val) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "cool_funny_bounce_music_mp3cut.ogg", 1, true, 50, 1);
}}

}

return;
}
gdjs['Tela0Code']= gdjs.Tela0Code;
