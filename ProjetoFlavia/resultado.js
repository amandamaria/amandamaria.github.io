var urlString = window.location.href;

$(document).ready(function(){	
	exibirResultado();
});

function exibirResultado() {
	var url = new URL(urlString);
	var divResultado = document.getElementById('resultado');	
	for(var i=0; i<perguntasFase1.objetivas.length; i++){
		var paramValue = url.searchParams.get("pergunta"+(i+1));
		var p = document.createElement('p');
		var texto = document.createTextNode(paramValue);
		p.appendChild(texto);
		divResultado.appendChild(p);
	}
};