termos = [{"grupo": "1", "resposta":"", "imagem":""}, {}, {}];

function abrirImagensDoGrupo(grupo) {
	window.location="grupos.html"; 
	var htmlGrupos = "";
	for(var i=0; i < termos.length; i++) {
		htmlGrupos = htmlGrupos.concat("<div class='col s4 m2'>"+
							"<div class='card hoverable'>"+
								"<div class='card-image'>"+
									"<a href='#'> <img src='"+termos[i].imagem+"'/>"+
									"</a>"+					
								"</div>"+
							"</div>"+
						"</div>");
	}
}