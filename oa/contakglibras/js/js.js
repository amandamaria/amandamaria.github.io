$(document).ready(function() {
	adicionarConteudo("modulos/inicio.html");
});

function adicionarConteudo(pagina) {
	$("#divConteudo").load(pagina);
}

function adicionarMenu() {
	if (typeof($("#divMenu")) !== "undefined") {
		$("#divMenu").load("modulos/menu/menu.html",setStatusBotaoLibras);
	}
}

function gerarGraficoPizza(containerId, tituloGrafico) {
	// Load google charts
	google.charts.load('current', {'packages':['corechart']});
	google.charts.setOnLoadCallback(drawChart);

	// Draw the chart and set the chart values
	function drawChart() {
	  var data = google.visualization.arrayToDataTable([
	  ['Task', 'Hours per Day'],
	  ['Work', 8],
	  ['Eat', 2],
	  ['TV', 4],
	  ['Gym', 2],
	  ['Sleep', 8]
	]);

	  // Optional; add a title and set the width and height of the chart
	  var options = {'width':"100%", 'height':400, 'backgroundColor': 'transparent'};

	  // Display the chart inside the <div> element with id="containerId"
	  var chart = new google.visualization.PieChart(document.getElementById(containerId));
	  chart.draw(data, options);
	}
}

function avancarAtividade(proximaTela){
	var respostaCerta = document.getElementById("resposta-certa").checked
	if(respostaCerta) {
		abrirModal('feedbackAcerto',proximaTela);
		//adicionarConteudo(proximaTela);		
	} else {
		//exibir feedback
		abrirModal("feedbackErro");
	}
}

function ativarLibras() {
	var isActive = false;	
	var styles = Array.from(document.styleSheets);
	styles.map(function(styleSheet){
		if(styleSheet.href.includes("tooltiplibras-1.0.0.css")) {
			styleSheet.disabled = !styleSheet.disabled;
			isActive = !styleSheet.disabled;
		}
	});
	
	mudarAparenciaBotao(isActive);
}

function setStatusBotaoLibras() {
	var isDisabled = false;
	var styles = Array.from(document.styleSheets);
	styles.map(function(styleSheet){
		if(styleSheet.href.includes("tooltiplibras-1.0.0.css")) {
			isDisabled = styleSheet.disabled;
		}
	});
	mudarAparenciaBotao(!isDisabled);
}

function mudarAparenciaBotao(isActive) {
	var btLibras = document.getElementById("bt-libras");
	if(isActive) {
		btLibras.classList.remove("btn-libras-disabled");
		if(!btLibras.classList.contains("btn-libras-active"))
			btLibras.classList.add("btn-libras-active");
	} else {
		btLibras.classList.remove("btn-libras-active");
		btLibras.classList.add("btn-libras-disabled");
	}
}