var computador = new Jogador("Adversário", "Feminino", "Computador");
var humano;
var intervalo;
var partida;
var partidas = [];
var opcaoAdversario;

function Jogador(nome, sexo, tipoJogador){
	this.nome = nome;
	this.sexo = sexo;
	this.tipoJogador = tipoJogador;
	this.opcaoSelecionada = function () {
		if(tipoJogador == "Computador") {
			 return opcaoSelecionaToString(opcaoAdversario);
		}
	}
}

function opcaoSelecionaToString(opcao) {
	if(opcao == 1) {
		return "Pedra";
	} else if(opcao == 2) {
		return "Papel";
	} else {
		return "Tesoura";
	}
}

function Partida(jogador1, jogador2, pontosJogador1, pontosJogador2, opcaoJogador1, opcaoJogador2, tempo) {
	this.jogador1 = jogador1;
	this.jogador2 = jogador2;
	this.pontosJogador1 = pontosJogador1;
	this.pontosJogador2 = pontosJogador2;
	this.tempo = tempo;
	this.getOpcaoJogador1 = function () {
		return opcaoSelecionaToString(opcaoJogador1);
	}
	
	this.getOpcaoJogador2 = function () {
		return opcaoSelecionaToString(opcaoJogador2);
	} 
	
	this.getVencedor = function () {
		if(pontosJogador1 > pontosJogador2) {
			return jogador1.nome;
		} else if(pontosJogador1 < pontosJogador2) {
			return jogador2.nome;
		} else {
			return "Empate";
		} 
	}
}

window.onload = function() {
  /*var elementos_jogo = document.getElementById("elementos_jogo");
  elementos_jogo.hidden = true;*/
  desabilitarBotoesOpcoes(true);
};

function desabilitarBotoesOpcoes(controle) {
	var btn_pedra = document.getElementsByName("btn_opcao")[0];
	var btn_papel = document.getElementsByName("btn_opcao")[1];
	var btn_tesoura = document.getElementsByName("btn_opcao")[2];
	
	btn_pedra.disabled = controle;
	btn_papel.disabled = controle;
	btn_tesoura.disabled = controle;	
}

function iniciarPartida() {
	var nome = document.getElementsByName("nome")[0].value;
	var sexo = getSexoSelecionado();
	limparImagensOpcoes();
	if(nome.trim() != "" && sexo.trim() != "") {
		humano = new Jogador(nome, sexo, "humano");
		iniciarCronometro();
		/*elementos_jogo.hidden = false;*/
		desabilitarBotoesOpcoes(false);
	} else {
		window.alert("Informe nome e sexo para iniciar a partida.");
	}
	
}

function limparImagensOpcoes() {
	document.getElementById("imd_opcao_escolhida").src = "imagens/blank.png";
	document.getElementById("imd_opcao_adversario").src = "imagens/blank.png";
}

function getSexoSelecionado() {
	var sexo = "";
	if(document.getElementById("radio_fem").checked) {
		sexo = "Feminino";
	} else if(document.getElementById("radio_masc").checked) {
		sexo = "Masculino";
	} else if(document.getElementById("radio_outro").checked){
		sexo = "Outro";
	}
	return sexo;
}

function iniciarCronometro() {	
	var s = 1;
	var m = 0;
	var h = 0;
	var textoSeg = "";
	var textoMin = "";
	var textoHora = "";
	document.getElementsByName("cronometro")[0].innerHTML = "00:00:00";
	intervalo = window.setInterval(function() {
		if (s == 60) { 
			m++; 
			s = 0; 
		}
		if (m == 60) { 
			h++; 
			s = 0; 
			m = 0; 
		}
		if (h < 10) {
			textoHora = "0" + h;
		} else {
			textoHora = h;
		}
		if (s < 10) {
			textoSeg = "0" + s; 
		} else {
			textoSeg = s;
		}
		if (m < 10) {
			textoMin = "0" + m; 
		} else {
			textoMin = m;
		}			
		document.getElementsByName("cronometro")[0].innerHTML = textoHora.concat(":").concat(textoMin).concat(":").concat(textoSeg);
		s++;
		
	},1000);
}

function escolherOpcao(opcaoEscolhida) {
	/*Legenda das opções
		1 - Pedra
		2 - Papel
		3 - Tesoura
	*/	
	opcaoAdversario = sortearOpcaoAdversario();
	var resultado = verificarResultado(opcaoEscolhida, opcaoAdversario);
	mostrarOpcoesSelecionadas(opcaoEscolhida, opcaoAdversario);
	mostrarOpcoesResultado(resultado);
	var pontosAdversario;
	if(resultado == 0) {
		pontosAdversario = 3;
	} else if(resultado == 3) {
		pontosAdversario = 0;
	} else {
		pontosAdversario = resultado;
	}
	partida = new Partida(humano, computador, resultado, pontosAdversario, opcaoEscolhida, opcaoAdversario, document.getElementsByName("cronometro")[0].textContent);
	finalizarPartida();
}

function mostrarOpcoesResultado(resultado) {
	if(resultado == 0) {
		document.getElementById("resultado").innerHTML = "Resultado: Você perdeu!";
	} else if (resultado == 1) {
		document.getElementById("resultado").innerHTML = "Resultado: Empate!";
	} else if (resultado == 3) {
		document.getElementById("resultado").innerHTML = "Resutltado: Você venceu!";
	}
}

function mostrarOpcoesSelecionadas(opcaoEscolhida, opcaoAdversario){
	if(opcaoEscolhida == 1) {
		document.getElementById("imd_opcao_escolhida").src = "imagens/pedra_hand.png";
	} else if(opcaoEscolhida == 2) {
		document.getElementById("imd_opcao_escolhida").src = "imagens/papel_hand.png";
	} else if(opcaoEscolhida == 3) {
		document.getElementById("imd_opcao_escolhida").src = "imagens/tesoura_hand.png";
	}
	
	if(opcaoAdversario == 1) {
		document.getElementById("imd_opcao_adversario").src = "imagens/pedra_hand.png";
	} else if(opcaoAdversario == 2) {
		document.getElementById("imd_opcao_adversario").src = "imagens/papel_hand.png";
	} else if(opcaoAdversario == 3) {
		document.getElementById("imd_opcao_adversario").src = "imagens/tesoura_hand.png";
	}
}
function finalizarPartida() {
	partidas[partidas.length] = partida;
	window.clearInterval(intervalo);
	inserirInformacoesNaTabelas();
	atualizarResultadoGeral();
	limparDadosJogador();
	/*elementos_jogo.hidden = true;*/
	desabilitarBotoesOpcoes(true);
}

function limparDadosJogador() {
	var nome = document.getElementsByName("nome")[0];
	nome.value = "";
	var sexoFem = document.getElementsByName("sexo")[0];
	sexoFem.checked = false;
	var sexoMasc = document.getElementsByName("sexo")[1];
	sexoMasc.checked = false;
	var sexoOutro = document.getElementsByName("sexo")[2];
	sexoOutro.checked = false;
}

function atualizarResultadoGeral() {
	var totalDePontosHumano = 0;
	var totalDePontosComputador = 0;
	var tempoTotal = "";
	var resultadoFinal = "";
	var totalDePartidas = 0;
	
	for(var i=0; i< partidas.length; i++) {
		if(isJogadorDaPartida(partidas[i].jogador1)) {
			totalDePontosHumano += partidas[i].pontosJogador1;
			totalDePontosComputador += partidas[i].pontosJogador2;
			totalDePartidas++;
		}
	}
	if(totalDePontosHumano > totalDePontosComputador) {
		resultadoFinal = "Vitória!";		
	} else if(totalDePontosHumano < totalDePontosComputador) {
		resultadoFinal = "Derrota!";
	} else {
		resultadoFinal = "Empate!";
	}
	/*window.alert("Nome: "+ partida.jogador1.nome+
				"\nSexo: "+partida.jogador1.sexo+
				"\nPontos obtidos: "+totalDePontosHumano+
				"\nResultado: "+resultadoFinal);*/
	var quadroGeral = document.getElementById("resultado_geral");
	quadroGeral.innerHTML = "<div> <h5>Seu desempenho</h5>"+
				"Nome: "+ partida.jogador1.nome+
				"<br/>Sexo: "+partida.jogador1.sexo+
				"<br/>Pontos obtidos: "+totalDePontosHumano+
				"<br/>Número de partidas: "+totalDePartidas+
				"<br/>Resultado: "+resultadoFinal+
				"</div>";
}

function sortearOpcaoAdversario() {
    var x = Math.floor((Math.random() * 3) + 1);
	return x;
}

function verificarResultado(opcaoEscolhida, opcaoAdversario) {
	var pontos = 0;
	if(opcaoEscolhida == opcaoAdversario) {
		pontos = 1;
	} else if (opcaoEscolhida == 1 && opcaoAdversario == 2) {
		pontos = 0;
	} else if (opcaoEscolhida == 1 && opcaoAdversario == 3) {
		pontos = 3;
	} else if (opcaoEscolhida == 2 && opcaoAdversario == 1) {
		pontos = 3;
	} else if (opcaoEscolhida == 2 && opcaoAdversario == 3) {
		pontos = 0;
	} else if (opcaoEscolhida == 3 && opcaoAdversario == 1) {
		pontos = 0;
	} else if (opcaoEscolhida == 3 && opcaoAdversario == 2) {
		pontos = 3;
	}
	return pontos;
}

function inserirInformacoesNaTabelas() {
	var tabela = document.getElementById("resultados");
	var linha = tabela.insertRow();
	
	var cellVencedor = linha.insertCell(0);
	cellVencedor.innerHTML = partida.getVencedor();
	
	var cellResultado = linha.insertCell(1);
	cellResultado.innerHTML = partida.jogador1.nome.concat(" ").concat("<b>"+partida.pontosJogador1+"</b>").concat(" X ").concat(partida.jogador2.nome).concat(" ").concat("<b>"+partida.pontosJogador2+"</b>");
	
	var cellOpcaoSelecionada = linha.insertCell(2);
	cellOpcaoSelecionada.innerHTML = partida.getOpcaoJogador1();
	
	var cellOpcaoAdversario = linha.insertCell(3);
	cellOpcaoAdversario.innerHTML = partida.getOpcaoJogador2();	
	
	var cellDuracao = linha.insertCell(4);
	cellDuracao.innerHTML = partida.tempo;
}

function encerrarJogo() {
	var quadroGeral = document.getElementById("resultado_geral");
	quadroGeral.innerHTML = "";
	window.clearInterval(intervalo);
	document.getElementsByName("cronometro")[0].innerHTML = "00:00:00";
	limparDadosJogador();
}

function isJogadorDaPartida(jogador) {
	if(partida.jogador1.nome == jogador.nome && partida.jogador1.sexo == jogador.sexo) {
		return true;
	} else {
		return false;
	}
}



 $(document).ready(function(){
	// the "href" attribute of the modal trigger must specify the modal ID that wants to be triggered
	$('.modal').modal();
});