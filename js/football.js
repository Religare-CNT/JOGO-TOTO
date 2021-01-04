var canvas =    document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var x = canvas.width/2;
var y = canvas.heigth/2;

var ballRadius = 6;

var dx = 3;
var dy = -3;

var paddleheigth = 10;
var paddlewidth = 30;

var paddleX = (canvas.width-paddleWidth);