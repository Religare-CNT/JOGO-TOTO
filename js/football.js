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

var ritghtPressed = false;
var leftPressed = false;

var goalpostWidth = 150;
var goalpostHeigth = 150;

var homeScore = 0;
var awayScore = 0;

var playerHeigth = 50;
var playerWidth = 50;

var initFlag = true;
var gameOver = false;

var flag1 = 1;
var flag2 = 2;
var drawFlag = true; 

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

var V = SAT.Vector;
var C = SAT.Circle;
var B = SAT.Box;

var Circle;
var Box;

var homePlayer = new Image();
var awayPlayer = new Image();

function int(){
    removeStatus();
    homePlayer.src = 'img/homePlayer.png';
    awayPlayer.src = 'img/awayPlayer.png';

    document.getElementById('startScreen').style['z-index'] = '-1';
    document.getElementById('gameOverScreen').style['z-index'] = '-1';
    document.getElementById('home').innerHTML = '0';
    document.getElementById('away').innerHTML = '0';
    awayScore = 0;
    homeScore = 0;
    gameOver = 0;
    setInitialDelay();

    functionsetDalay(){
        setTimeout(function(){
            drawFlag = true;
            window.requestAnimationFrame(draw);
        },1500);
}

function startTimer(duration){
    var timer = duration,
        minutes, seconds;
    countdown =  setInterval(function(){
        minutes = parseInt(timer / 60, 10)  
        seconds = parseInt(timer % 60, 10)
        
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 : "0" + seconds : seconds;

        document.getElementById('countdown').innerHTML = minutes + ":" + seconds; 

        if (--timer < 0){
            document.getElementById('gameOverScreen').style ['z-index'] = 3;
            gameOver = true;
            if (homeScore > awayScore)
                updateStatus('GAME OVER!! <br> LIVERPOOL WINSS!!!');
        }
    })
}