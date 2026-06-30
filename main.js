import Game from "./game.js";

const canvas=document.getElementById("canvas");

const score=document.getElementById("score");

const gameOver=document.getElementById("gameOver");

const restart=document.getElementById("restart");

let game=new Game(canvas);

function loop(){

game.update();

game.draw();

score.textContent=game.score;

if(game.over){

gameOver.classList.remove("hide");

return;

}

requestAnimationFrame(loop);

}

loop();

function jump(){

if(!game.over)

game.bird.jump();

}

window.addEventListener("keydown",e=>{

if(e.code==="Space") jump();

});

canvas.addEventListener("click",jump);

canvas.addEventListener("touchstart",e=>{

e.preventDefault();

jump();

});

restart.onclick=()=>{

location.reload();

};
