var urlString = window.location.href;
var _respostaA = 0;
var _respostaB = 1;
var _respostaC = 2;

$(document).ready(function(){	
	exibirDadosGerais();
	exibirResultado();
});

function exibirDadosGerais() {
	var url = new URL(urlString);
	var nomeAluno = url.searchParams.get("nomeAluno");
	var atividade = url.searchParams.get("nomeAtividade");
	var diagnostico = url.searchParams.get("diagnostico");
	var dataNascimento = url.searchParams.get("dataNascimento");
	var idade = getIdade(dataNascimento);
	var htmlDados = "<p><h5>DADOS GEERAIS</h5></p><p><b>Atividade: </b>"+atividade+"</p>"+
	"<p><b>Aluno: </b>"+nomeAluno+"</p>"+	
	"<p><b>Idade: </b>"+idade+" anos </p>"+
	"<p><b>Diagnóstico: </b>"+diagnostico+"</p>";	
	var divResultado = document.getElementById('dadosAluno');
	divResultado.innerHTML = htmlDados;	
}

function getIdade(dataStr) {
	var hoje = new Date;
	var nascimento = new Date(dataStr);
    var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();

    if (new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < 
         new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()) )
        diferencaAnos--;
	if(diferencaAnos < 0) 
		return 0;
	else 
		return diferencaAnos;
}

function exibirResultado() {
	var url = new URL(urlString);
	var contRespostaA = 0;
	var contRespostaB = 0;
	var contRespostaC = 0;	
	var perguntasFase = [];
	
	for(var fase = 1; fase<=3; fase++) {	
		if(fase==1) {
			perguntasFase = perguntasFase1;
		} else if(fase==2) {
			perguntasFase = perguntasFase2;
		} else if(fase==3) {
			perguntasFase = perguntasFase3;
		}
		
		for(var i=0; i<perguntasFase.objetivas.length; i++){
			var respostaValue = url.searchParams.get("perguntaFase"+fase+""+(i+1));		
			if(respostaValue == _respostaA) {
				contRespostaA++;
			}  else if(respostaValue == _respostaB) {
				contRespostaB++;
			} else if(respostaValue == _respostaC) {
				contRespostaC++;
			}		
		}
		
		if(fase==1) {
			exibirRelatorioFase1(contRespostaA, contRespostaB, contRespostaC);
		} else if(fase==2) {
			exibirRelatorioFase2(contRespostaA, contRespostaB, contRespostaC);
		} else if(fase==3) {
			exibirRelatorioFase3(contRespostaA, contRespostaB, contRespostaC);
		}
		contRespostaA = 0;
		contRespostaB = 0;
		contRespostaC = 0;
	}	
};

function exibirRelatorioFase1(totalA, totalB, totalC) {
	var divResultado = document.getElementById('resultado');
	var feedback = "";
	if(totalA >= 4 ) {
		feedback = "Necessita desenvolver a capacidade de identificar a natureza do problema, selecionar estratégias de solução, "+
		"planejar soluções e ter autoconfiança para buscar soluções.";
	}  else if(totalB >= 4) {
		feedback = "Necessita ter autonomia em suas tomadas de decisão. Fomentar a capacidade de resgatar conhecimentos extraescolares "+
		"para planejar suas ações.";
	} else if(totalC >= 4) {
		feedback = "Estudante apresenta estratégias metacognitivas para identificar um problema, antecipar as implicações das decisões "+
		"tomadas, seleciona estratégias de solução e planeja suas ações para solução. É autoconfiante.";
	}	
	var p = document.createElement('p');
	var texto = document.createTextNode(feedback);
			
	p.appendChild(texto);		
	divResultado.appendChild(p);	
}

function exibirRelatorioFase2(totalA, totalB, totalC) {
	var divResultado = document.getElementById('resultado');
	var feedback = "";
	if(totalA >= 6 ) {
		feedback = "Estudante necessita ser estimulado a ativar os conhecimentos espontâneos. Necessita vivenciar diferentes situações-problema "+
		"para diversificar as estratégias para executar a atividade cognitiva, para modificar as estratégias de execução para obter êxito na "+
		"conclusão de uma atividade. Necessita desenvolver o automonitoramento e identificar seus erros na execução da atividade.";
	}  else if(totalB >= 6) {
		feedback = "Necessário provocar conflitos sóciocognitivos para gerar autonomia e ativar conhecimento espontâneos. Necessário vivenciar "+
		"situações-problemas semelhantes, diversas vezes.";
	} else if(totalC >= 6) {
		feedback = "Executa o planejamento para realizar a ação. Realiza a tarefa de forma autônoma.";
	}	
	var p = document.createElement('p');
	var texto = document.createTextNode(feedback);
			
	p.appendChild(texto);		
	divResultado.appendChild(p);	
}

function exibirRelatorioFase3(totalA, totalB, totalC) {
	var divResultado = document.getElementById('resultado');
	var feedback = "";
	if(totalA >= 5 ) {
		feedback = "Necessita desenvolver a autorreflexão. Desenvolver a transferência e aplicação da aprendizagem para outros contextos. "+
		"Desenvolver o ajuste de ações. Aprender a descrever e avaliar as suas ações.";
	}  else if(totalB >= 6) {
		feedback = "Estudante necessita desenvolver sua autorreflexão. Ser exposto a diversificadas estratégias metacognitivas. Necessita "+
		"desenvolver a narrativa verbal.";
	} else if(totalC >= 7) {
		feedback = "Realiza a autorreflexão. Transfere e aplica a aprendizagem para outros contextos. Ajusta ações. Descreve e avalia as suas ações.";
	}	
	var p = document.createElement('p');
	var texto = document.createTextNode(feedback);
			
	p.appendChild(texto);		
	divResultado.appendChild(p);	
}

function voltarParaFormulario() {
	var url = urlString.split("?");
	window.location.replace('index.html?'+url[1]);
}