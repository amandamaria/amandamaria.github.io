$(document).ready(function() {
	adicionarConteudo("modulos/inicio.html");
});

function adicionarConteudo(pagina) {
	$("#divConteudo").load(pagina);
}

function adicionarMenu() {
	if (typeof($("#divMenu")) !== "undefined") {
		$("#divMenu").load("modulos/menu/menu.html");
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