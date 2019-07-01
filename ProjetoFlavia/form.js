

function gerarRelatorioFase1() {
	var respostasFase1 = [];
	for(var i=1; i<=perguntasFase1.objetivas.length; i++) {
		var name = 'pergunta'+i;
		var resposta = document.querySelector('input[name="'+name+'"]:checked').value;		
	}	
}

function gerarRelatorioFase2() {
	var respostasFase2 = [];
	for(var i=1; i<=perguntasFase1.objetivas.length; i++) {
		var name = 'pergunta'+i;
		var resposta = document.querySelector('input[name="'+name+'"]:checked').value;		
	}	
}


function gerarRelatorioFase3() {
	var respostasFase2 = [];
	for(var i=1; i<=perguntasFase2.objetivas.length; i++) {
		var name = 'pergunta'+i;
		var resposta = document.querySelector('input[name="'+name+'"]:checked').value;		
	}	
}