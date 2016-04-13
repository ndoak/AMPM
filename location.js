//Eric Westcott
window.onload = pageLoaded;

function pageLoaded(){
//location page

var queenWest = "<div id=\"Map\"><a href=\"https://www.google.com/maps/dir//700+queen+street+west/\"><img src=\"http://maps.googleapis.com/maps/api/staticmap?center=700+queen+street+west&zoom=16&scale=false&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C700+queen+street+west\" alt=\"Google Map of 700 queen street west\"></a></div>";
	queenWest += "<div id=\"QWhours\"><p>Located in the heart of Downtown Toronto, AM/PM is the perfect place for lunch, after work drinks and date nights. </p></div>";
	

var queenEast = "<div id=\"Map\"><a href=\"https://www.google.com/maps/dir//2100+queen+street+east/\"><img src=\"http://maps.googleapis.com/maps/api/staticmap?center=2100+queen+street+east&zoom=16&scale=false&size=600x300&maptype=roadmap&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:1%7C2100+queen+street+east\" alt=\"Google Map of 2100 queen street east\"></a></div>";
	queenEast += "<div id=\"QWhours\"><p>Nested in Toronto's 'The Beaches' neighbourhood, AM/PM's second location is minutes walk from the beach and lake Ontario. A perfect family neighbourhood AM/PM Queen East is perfect to goes as a family and with your friends.</p></div>";
	

	getLink = location.search;

	if(getLink === "?QE"){
		var changeText = document.getElementById("locationInfo");
		changeText.innerHTML = queenEast;
	}

	if(getLink === "?QW"){
		var changeText = document.getElementById("locationInfo");
		changeText.innerHTML = queenWest;
	}


}

//The about page

jQuery(document).ready(function (){
	$('.about').hide();

$('.headings').click(function(){
	$(this).next('.about').slideToggle();
})
	
});


