var modal = "";
var span = null;

function abrirModal(idModal, proximaPagina) {
	modal = document.getElementById(idModal);
	spanFechar = modal.firstElementChild.lastElementChild;
	
	modal.style.display = "block";	
	
	spanFechar.onclick = function() {		
		modal.style.display = "none";
		if(proximaPagina != undefined) {
			adicionarConteudo(proximaPagina);
		}
	}
}

//Fechar o modal ao clicar fora
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}