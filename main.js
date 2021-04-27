//'screen' is name of a function
window.onresize = screen;
window.onload = screen;

//create function named 'screen'

function screen() {
    myWidth = window.innerWidth;
    document.getElementById('size').innerHTML = "Width : " + myWidth + " px"
}