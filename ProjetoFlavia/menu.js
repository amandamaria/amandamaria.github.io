$(document).ready(function(){
	inserirMenu();
	$('.sidenav').sidenav();	
});

function inserirMenu() {
	var menuHTML = '<div class="navbar-fixed">'+
		'<nav>'+
			'<div class="nav-wrapper">'+
				'<a href="#!" class="brand-logo">PROAMETA</a>'+
				'<ul class="right hide-on-med-and-down">'+
					'<li><a href="sass.html">Sobre</a></li>'+
					'<li><a href="badges.html">Ajuda</a></li>'+
				'</ul>'+
			'</div>'+
		'</nav>'
	'</div>';
	var divMenu = document.getElementById('menu');
	divMenu.innerHTML = menuHTML;
}