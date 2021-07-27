function changeQtdItem(className, valueToSum, itemRow) {
	var retorno =  false;
	qtdItems.values.forEach(function(item){
		
	});
	return retorno;
}

function clickPictoButton() {	
	if(this.classList.contains(this.name)) {
		this.classList.remove(this.name);
		this.classList.remove("text-invisible");		
	} else {
		this.classList.add(this.name);
		this.classList.add("text-invisible");	
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
			var text = document.createTextNode(classes[j]); 
			col.appendChild(text);			
		} 
		eixoX.appendChild(col);
	}
	area.appendChild(eixoX);	
}
$(document).on("mouseover",".fruta",function(){
	$(this).css("background-image", "url(../imagens/atividades/construirgrafico/fruta.png);")
});