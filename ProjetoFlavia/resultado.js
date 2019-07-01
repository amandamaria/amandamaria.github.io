var urlString = window.location.href;
var _respostaA = 0;
var _respostaB = 1;
var _respostaC = 2;

$(document).ready(function(){	
	exibirResultado();
});

function exibirResultado() {
	var url = new URL(urlString);		
	var contRespostaA = 0;
	var contRespostaB = 0;
	var contRespostaC = 0;	
	var faseParamValue = url.searchParams.get("paramFase");	
	var perguntasFase = [];
	
	if(faseParamValue=="fase1") {
		perguntasFase = perguntasFase1;
	} else if(faseParamValue=="fase2") {
		perguntasFase = perguntasFase2;
	} else if(faseParamValue=="fase3") {
		perguntasFase = perguntasFase3;
	}
	
	for(var i=0; i<perguntasFase.objetivas.length; i++){
		var respostaValue = url.searchParams.get("pergunta"+(i+1));		
		if(respostaValue == _respostaA) {
			contRespostaA++;
		}  else if(respostaValue == _respostaB) {
			contRespostaB++;
		} else if(respostaValue == _respostaC) {
			contRespostaC++;
		}
	}
	
	if(faseParamValue=="fase1") {
		exibirRelatorioFase1(contRespostaA, contRespostaB, contRespostaC);
	} else if(faseParamValue=="fase2") {
		exibirRelatorioFase2(contRespostaA, contRespostaB, contRespostaC);
	} else if(faseParamValue=="fase3") {
		exibirRelatorioFase3(contRespostaA, contRespostaB, contRespostaC);
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
		feedback = "Estudante necessita ser estimulado a ativar os conhecimentos espontâneos. Necessita vivenciar diferentes situações-problema "+
		"para diversificar as estratégias para executar a atividade cognitiva, para modificar as estratégias de execução para obter êxito na "+
		"conclusão de uma atividade. Necessita desenvolver o automonitoramento e identificar seus erros na execução da atividade.";
	}  else if(totalB >= 6) {
		feedback = "Necessário provocar conflitos sóciocognitivos para gerar autonomia e ativar conhecimento espontâneos. Necessário vivenciar "+
		"situações-problemas semelhantes, diversas vezes.";
	} else if(totalC >= 7) {
		feedback = "Executa o planejamento para realizar a ação. Realiza a tarefa de forma autônoma.";
	}	
	var p = document.createElement('p');
	var texto = document.createTextNode(feedback);
			
	p.appendChild(texto);		
	divResultado.appendChild(p);	
}