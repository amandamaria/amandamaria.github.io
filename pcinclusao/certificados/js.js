var url = 'https://spreadsheets.google.com/feeds/list/1DZDX0pLYGvQipaRk1RsEOZWxNmkxxy9a2zAER4vJpj4/1/public/full?alt=json';

function verificarCertificado() {	
	var cpf = $('#cpf').val();	
	
	$.getJSON(url,function(result){
		var dados = result.feed.entry;
		var valido = false;
		for(var i=0; i<dados.length; i++) {
			var cpfNaLista = dados[i].gsx$cpfnumbers.$t;			
			if(cpfNaLista === cpf) {
				valido = true;
				break;
			}
		}
		if(valido) {
			alert('CERTIFICADO VALIDADO');
		} else {
			alert('CERTIFICADO INVÁLIDO');
		}
	});
}

function gerarCertificado() {	
	var cpf = $('#cpf').val();	
	
	$.getJSON(url,function(result){
		var dados = result.feed.entry;
		var valido = false;
		for(var i=0; i<dados.length; i++) {
			var cpfNaLista = dados[i].gsx$cpfnumbers.$t;			
			if(cpfNaLista === cpf) {
				valido = true;
				break;
			}
		}
		if(valido) {
			var linkCertificado = '<a target="_blank" href="files/CERTIFICADO_####.pdf">BAIXAR CERTIFICADO</a>';
			linkCertificado = linkCertificado.replace('####',cpf);
			$('#divLinkCertificado').html(linkCertificado);			
		} else {
			alert('CPF INVÁLIDO');
		}
	});
}

