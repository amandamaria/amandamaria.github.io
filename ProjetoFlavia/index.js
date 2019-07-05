var urlString = window.location.href;
var url = new URL(urlString);

$(document).ready(function(){
	$('.tabs').tabs();
	$('.datepicker').datepicker();
	if(verificarRespostas()) {
		exibirPerguntasFases();
		setarRespostas();
	} else {
		exibirPerguntasFases();
	}
});

function exibirPerguntasFases() {	
	gerarHTMLPerguntas(perguntasFase1,  'perguntasFase-1', 'Fase1');
	gerarHTMLPerguntas(perguntasFase2,  'perguntasFase-2', 'Fase2');
	gerarHTMLPerguntas(perguntasFase3,  'perguntasFase-3', 'Fase3');	
}

function gerarHTMLPerguntas(perguntas, idDivParent, nameParam) {
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
			input.name = "pergunta"+nameParam+(i+1);			
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

function verificarRespostas() {	
	var params = urlString.split("?");
	if(params.length >= 2){
		return true;
	} else {
		return false;
	}
}

function setarRespostas() {		
	var nomeAluno = url.searchParams.get("nomeAluno");
	var atividade = url.searchParams.get("nomeAtividade");
	var diagnostico = url.searchParams.get("diagnostico");
	var dataNascimento = url.searchParams.get("dataNascimento");
	
	$("#nome-aluno").val(nomeAluno);
	$("#nome-atividade").val(diagnostico);
	$("#diagnostico").val(diagnostico);
	$("#data-nascimento").val(dataNascimento);
	
	respostaPorFase(perguntasFase1.objetivas, 1);
	respostaPorFase(perguntasFase2.objetivas, 2);
	respostaPorFase(perguntasFase3.objetivas, 3);

}

function respostaPorFase(perguntas, numFase) {
	var paramValue;
	var radiosFase;
	for (var i=1; i<=perguntas.length; i++) {
		radiosFase = document.getElementsByName("perguntaFase"+numFase+""+i);
		paramValue = url.searchParams.get("perguntaFase"+numFase+""+i);
		for (var j=0;j < radiosFase.length; j++) {			
			if(radiosFase[j].value == paramValue) {
				radiosFase[j].checked = true;
				break;
			}
		}
	}	
}