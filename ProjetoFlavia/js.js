var descricaoFases = {"descricoes":[
	{"nome":"Fase 1 - INTENCIONAL","descricao":"Fase inicial de interação com o jogo e/ou atividade. Fase de ouvir e compreender os comandos para planejar a execução da tarefa."},
	{"nome":"Fase 2 - EXECUTIVA","descricao":"Fase de executar o planejamento para realizar a ação."},
	{"nome":"Fase 3 - AUTORREGULAÇÃO (AUTOAVALIAÇÃO)", "descricao":"Fase final de autoavaliar a execução, logrando ou não êxito. Nessa fase o aluno autorregula-se nas duas tentativas; A segunda tentativa ocorre caso o aluno não obtenha êxito."},
	{"fase4":""},
]
};
var perguntasFase1 = {"objetivas":[
	{"enunciado":"Identifica a natureza do problema?"},
	{"enunciado":"Para e retorna a uma nova informação quando ela não está clara?"},
	{"enunciado":"Antecipa as implicações do problema?"},
	{"enunciado":"Seleciona as estratégias pertinentes de execução?"},
	{"enunciado":"Planeja as estratégias selecionadas?"},
	{"enunciado":"Utiliza conhecimentos extraescolares no planejamento de suas ações?"},
	{"enunciado":"Demonstra autoconfiança para iniciar a tarefa?"},
], 
"discursivas":[
	{"enunciado":"O aluno ouve com atenção? Verbaliza alguma pergunta?"},
	{"enunciado":"O aluno procura por informação? Solicita ajuda? Faz perguntas?"},
	{"enunciado":"O aluno argumenta? Como se prepara para a resolução?"},
	{"enunciado":"O aluno estabelece objetivos? Argumenta verbalmente o que pretende fazer ou como fazer?"},
	{"enunciado":"O aluno estabelece objetivos? Demonstra capacidade de planejamento?"},
	{"enunciado":"O aluno demonstra capacidade de resgatar conhecimentos extraescolares para planejar suas ações?"},
	{"enunciado":"O aluno anima-se com a tarefa ou verbaliza que a mesma é fácil ou que já fez atividade parecida ou que sabe fazer?"},
]};

var alternativasABC = { "alternativas":[ {"alternativa":"Não demonstra esse comportamento"},
	{"alternativa":"Demonstra esse comportamento com mediação"},
	{"alternativa":"Demonstra esse comportamento espontaneamente, sem mediação"}]
};

function exibirPerguntasFase1() {
	var divPerguntas = document.getElementById('perguntasFase1');
	for(var i=0; i< perguntasFase1.objetivas.length; i++) {
		var pEnunciado = document.createElement('p');
		var enunciadoText = document.createTextNode(perguntasFase1.objetivas[i].enunciado); 
		pEnunciado.appendChild(enunciadoText);
		divPerguntas.appendChild(pEnunciado);
		for(var j=0; j<alternativasABC.alternativas.length; j++) {			
			var p = document.createElement('p');
			var label = document.createElement('label');
			var input = document.createElement('input');
			input.type = "radio";
			input.name = "pergunta"+(i+1);
			input.classList.add("whit-gap");
			input.value = alternativasABC.alternativas[j].alternativa;
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