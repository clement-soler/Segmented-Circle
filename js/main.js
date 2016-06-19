console.log("it's all right");

var segmented = new Array( "topright", "middleright", "bottomright", "bottomleft","middleleft", "topleft" );

segmented.forEach(function(entry) {
	document.querySelector(".circle").innerHTML = document.querySelector(".circle").innerHTML + '<img src="img/' + entry + '.svg" alt="' + entry + '" class="' + entry + ' element">';
});

