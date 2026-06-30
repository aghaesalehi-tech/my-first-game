import {GAME} from "./config.js";

export default class Pipe{

constructor(){

this.x=GAME.width;

this.top=Math.random()*220+80;

this.passed=false;

}

update(){

this.x-=GAME.pipeSpeed;

}

draw(ctx){

ctx.fillStyle="#2E8B57";

ctx.fillRect(this.x,0,GAME.pipeWidth,this.top);

ctx.fillRect(
this.x,
this.top+GAME.pipeGap,
GAME.pipeWidth,
GAME.height
);

}

offscreen(){

return this.x+GAME.pipeWidth<0;

}

}
