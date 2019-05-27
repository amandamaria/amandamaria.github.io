

function gerarRelatorio() {
	var respostasFase1 = [];
	for(var i=1; i<=perguntasFase1.objetivas.length; i++) {
		var name = 'pergunta'+i;
		var resposta = document.querySelector('input[name="'+name+'"]:checked').value;		
	}	
}

function is_checked(e) {
	
}