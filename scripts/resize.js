//Global variables
var BODY_HEIGHT;
var BODY_WIDTH;
var SCALE;

//Setup calls to scale everything to window size
window.onload = function() {getScale();}
$(window).resize(function() {getScale();});

//Get the scale factor and then call pageLoad
function getScale() {
	//Get height and width of screen
	BODY_HEIGHT = $(document).height();
	BODY_WIDTH = $(document).width();

	//Set SCALE factor to the smaller of the two
	if (BODY_HEIGHT > BODY_WIDTH) {SCALE = BODY_WIDTH;} else {SCALE = BODY_HEIGHT;}

	//Call pageLoad function (must be included somewhere else)
	pageLoad();
}
