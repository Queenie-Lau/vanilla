var og_location = 0;
var isPlaying = false;
var circ = document.getElementById("circle");
var circleInterval;
var scale = 1;

function circleAnimation(time) {
  og_location++;
  scale++;
  circ.style.width = scale*20 + "px";
  circ.style.left = og_location + "px";
  circleInterval = requestAnimationFrame(circleAnimation);
}

function mouseClicked(){
  if(isPlaying){
    isPLaying = false;
    circ.style.backgroundColor = "#79B0E8";
    cancelAnimationFrame(circleInterval);
  }else{
    isPlaying = true;
    circ.style.backgroundColor = "#E89279";
    circleInterval = requestAnimationFrame(circleAnimation);
  }
}

circ.addEventListener("click", mouseClicked);
circ.style.backgroundColor = "#E89279";

var canvas = document.getElementById('animated-canvas');
var context = canvas.getContext('2d');
var canvasInterval = requestAnimationFrame(canvasAnimation);
var circle_xpos = 60;


function cnavasAnimation(){
  circle_xpos++;
  drawCircle(circle_xpos, canvas.height/2, 25);
  canvasInterval = requestAnimationFrame(canvasAnimation);
}


function drawCircle(x, y, s){
  context.fillStyle =  "#85FFA4";
  context.beginPath();
  context.arc(x, y, s, 0, 2*Math.PI);
  context.fill();
}

drawCircle();
