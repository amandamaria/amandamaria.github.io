loadDoc("http://www.projetos.unijui.edu.br/matematica/fabrica_virtual/dentes_prontos/objeto_rived/index.html", myFunction1);

loadDoc("http://www.noas.com.br/educacao-infantil/matematica/sete-erros/111", myFunction1);

function loadDoc(url, cFunction) {
  var xhttp;
  xhttp=new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      cFunction(this);	  
    } else {
		alert('Deu errado');
	}
 };
  xhttp.open("GET", url, true);
  xhttp.send(null);
}

function myFunction1(xhttp) {
  alert('Deu certo');
} 
function myFunction2(xhttp) {
  // action goes here
}