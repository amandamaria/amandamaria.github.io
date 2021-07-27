$(document).on("mouseover", "[tooltip]", function() {	
	var gif = $(this).attr('tooltip');
	var styles = Array.from(document.styleSheets);
	styles.map(function(styleSheet){
		if(styleSheet.href.includes("tooltiplibras-1.0.0.css")) {
			styleSheet.addRule('[tooltip]::after','background-image: url("'+gif+'");')
		}
	});
});

