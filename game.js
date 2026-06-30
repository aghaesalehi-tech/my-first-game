import Bird from "./bird.js";
import Pipe from "./pipe.js";
import {GAME} from "./config.js";

export default class Game{

constructor(canvas){

this.ctx=canvas.getContext("2d");

this.bird=new Bird();

this.pipes=[];

this.score=0;

this.frame=0;

this.over=false;

}

spawn(){

if(this.frame%120===0){

this.pipes.push(new Pipe());

}

}

collision(pipe){

if(

this.bird.x+this.bird.r>pipe.x &&
this.bird.x-this.bird.r<pipe.x+GAME.pipeWidth

){

if(

this.bird.y-this.bird.r<pipe.top ||

this.bird.y+this.bird.r>
pipe.top+GAME.pipeGap

){

this.over=true;

}

}

}

update(){

if(this.over)return;

this.frame++;

this.spawn();

this.bird.update();

if(this.bird.y>GAME.height) this.over=true;

for(const pipe of this.pipes){

pipe.update();

this.collision(pipe);

if(!pipe.passed && pipe.x+GAME.pipeWidth<this.bird.x){

pipe.passed=true;

this.score++;

}

}

this.pipes=this.pipes.filter(p=>!p.offscreen());

}

draw(){

this.ctx.clearRect(0,0,GAME.width,GAME.height);

this.bird.draw(this.ctx);

this.pipes.forEach(p=>p.draw(this.ctx));

}

}
