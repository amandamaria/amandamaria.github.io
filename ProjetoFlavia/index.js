$(document).ready(function(){
	$('.tabs').tabs();
});

function exibirPerguntasFase1() {	
	gerarHTMLPerguntas(perguntasFase1,  'perguntasFase-1');
	gerarHTMLPerguntas(perguntasFase2,  'perguntasFase-2');
	gerarHTMLPerguntas(perguntasFase2,  'perguntasFase-3');	
}

function gerarHTMLPerguntas(perguntas, idDivParent) {
	var divPerguntas = document.getElementById(idDivParent);
	for(var i=0; i< perguntas.objetivas.length; i++) {
		var pEnunciado = document.createElement('p');
		var enunciadoText = document.createTextNode(perguntas.objetivas[i].enunciado); 
		pEnunciado.appendChild(enunciadoText);
		divPerguntas.appendChild(pEnunciado);
		for(var j=0; j<alternativasABC.alternativas.length; j++) {			
			var p = document.createElement('p');
			var label = document.createElement('label');
			var input = document.createElement('input');
			input.type = "radio";
			input.name = "pergunta"+(i+1);			
			input.classList.add("whit-gap");
			input.value = alternativasABC.alternativas[j].pontuacao;			
			
			var span = document.createElement('span');
			var alternativaText = document.createTextNode(alternativasABC.alternativas[j].alternativa); 
			span.appendChild(alternativaText);
			
			label.appendChild(input);			
			label.appendChild(span);
			p.appendChild(label);			
			divPerguntas.appendChild(p);			
		}
	}
}

$(document).ready(function() {
	exibirPerguntasFase1();
});

