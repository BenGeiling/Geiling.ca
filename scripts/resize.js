//Global variables
var BODY_HEIGHT;
var BODY_WIDTH;
var SCALE;

//Setup calls to scale everything to window size
window.onload = function() {getScale();}
window.onresize = function() {getScale();}

//Get the scale factor and then call pageLoad
function getScale() {
	//Get height and width of screen
	BODY_HEIGHT = getDocHeight();
	BODY_WIDTH = getDocWidth();

	//Set SCALE factor to the smaller of the two
	if (BODY_HEIGHT > BODY_WIDTH) {SCALE = BODY_WIDTH;} else {SCALE = BODY_HEIGHT;}

	//Call pageLoad function (must be included somewhere else)
	pageLoad();
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function getDocWidth() {
    var D = document;
    return Math.max(
        D.body.scrollWidth, D.documentElement.scrollWidth,
        D.body.offsetWidth, D.documentElement.offsetWidth,
        D.body.clientWidth, D.documentElement.clientWidth
    );
}
