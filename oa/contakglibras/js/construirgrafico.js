function gerarGrid() {
	var classes = ["","refri","fruta","pave","cookie","iogurte"];
	var area = document.getElementById("pictografico");
	var x = 5;
	for(var i=0; i < 5; i++) {
		var row = document.createElement("div");
		row.classList.add("row");
		for(var j=0; j < 6; j++) {			
			var col = document.createElement("div");
			col.classList.add("column");
			if(j==0){
				var textButton = document.createTextNode(x);  
				col.classList.add("eixo-x");
				col.appendChild(textButton);				
				x=x-1;
			}
			if(j>0){
				var button = document.createElement("button");
				var textButton = document.createTextNode("+");  
				button.classList.add("picto-button");
				button.classList.add(classes[j]);
				button.appendChild(textButton);				
				col.appendChild(button);
			} 
			row.appendChild(col);
		}
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