$(document).on("mouseover", "[tooltip]", function() {
	
		var gif = $(this).attr('tooltip');
		var teste = Array.from(document.styleSheets);
		teste.map(function(styleSheet){
			if(styleSheet.href.includes("tooltiplibras-1.0.0.css")) {
				styleSheet.addRule('[tooltip]::after','background-image: url("'+gif+'");')
			}
		});
	});

