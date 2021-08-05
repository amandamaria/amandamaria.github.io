function iniciarDados() {
	jQuery.each(columnsItems, function(key, val) { columnsItems[key] = 0});
}

var expectations = {
	"refri":3,
	"pave":5,
	"fruta":2,
	"iogurte":4,
	"cookie":2
};

var columnsItems = {
	"refri":0,
	"pave":0,
	"fruta":0,
	"iogurte":0,
	"cookie":0
};

var namesToShow = {
	"refri":"Refrigerante",
	"pave":"Pavê",
	"fruta":"Maçã",
	"iogurte":"Iogurte",
	"cookie":"Biscoito"
}

var actionAdd = "add";
var actionRemove = "remove";
function controlItems(element, action) {
	var row = element.id.charAt(element.id.length-1);
	var qtdAtual = columnsItems[element.name];	
	if(qtdAtual == row && action == actionAdd) {
		columnsItems[element.name] = qtdAtual+1;
		return true;
	} else if(action == actionRemove) {		
		if(qtdAtual-1  == row) {
			columnsItems[element.name] = qtdAtual-1;
			return true;
		}
	}
	return false;
}

function clickPictoButton() {	
	if(this.classList.contains(this.name)) {
		if(controlItems(this, actionRemove)) {
			this.classList.remove(this.name);
			this.classList.remove("text-invisible");	
		}		
	} else {
		if(controlItems(this, actionAdd)) {
			this.classList.add(this.name);
			this.classList.add("text-invisible");	
		}
	}
}

function gerarGrid() {
	var classes = ["","refri","fruta","pave","cookie","iogurte"];
	var area = document.getElementById("pictografico");
	var eixoYValue = 5;
	var rowNumber = 4;
	for(var i=0; i < 5; i++) {
		var row = document.createElement("div");
		row.classList.add("row");
		for(var j=0; j < 6; j++) {			
			var col = document.createElement("div");
			col.classList.add("column");
			if(j==0){
				var textButton = document.createTextNode(eixoYValue);  
				col.classList.add("eixo-x");
				col.appendChild(textButton);				
				eixoYValue=eixoYValue-1;
			}
			if(j>0){
								
				var button = document.createElement("button");
				var textButton = document.createTextNode("+");
				button.classList.add("picto-button");
				button.id =classes[j]+"-"+rowNumber;
				button.name = classes[j];
				button.onclick = clickPictoButton.bind(button);
				button.appendChild(textButton);					
				
				col.appendChild(button);
				console.log(rowNumber);
			} 
			row.appendChild(col);
		}
		rowNumber = rowNumber - 1;
		area.appendChild(row)
	}
	var eixoX = document.createElement("div");
	eixoX.classList.add("row");	
	for(var j=0; j < 6; j++) {			
		var col = document.createElement("div");
		col.classList.add("column");
		col.classList.add("eixo-x");
		if(j>0){			
			var text = document.createTextNode(namesToShow[classes[j]]); 
			col.appendChild(text);			
		} 
		eixoX.appendChild(col);
	}
	area.appendChild(eixoX);	
}

function corrigirAtividade(proximaTela){
	var respostaCerta = verificarResposta();
	if(respostaCerta) {
		abrirModal('feedbackAcerto',proximaTela);
	} else {
		//exibir feedback
		abrirModal("feedbackErro");
	}
}

function verificarResposta() {	
	return JSON.stringify(expectations) == JSON.stringify(columnsItems);
}

$(document).on("mouseover",".fruta",function(){
	$(this).css("background-image", "url(../imagens/atividades/construirgrafico/fruta.png);")
});