import Player from "../entities/player.js";
import Input from "./input.js";
import Enemy from "../entities/enemy.js";

export default class Game {

    constructor() {
        
        this.canvas = document.getElementById("gameCanvas");

        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = 960;
        this.canvas.height = 540;
        this.input = new Input();
        this.player = new Player(150, 350);
        this.player.update(this.input, this.canvas.width);
        this.velocityY = 0;
        this.gravity = 0.8;
        this.jumpForce = -15;

        this.ground = 350;

        this.onGround = true;
        this.enemy = new Enemy(700, 350);

    }

   draw() {

    this.ctx.fillStyle = "#87CEEB";
    this.ctx.fillRect(
        0,
        0,
        this.canvas.width,
        this.canvas.height
    );
    this.ctx.fillStyle = "#5C913B";

this.ctx.fillRect(
    0,
    420,
    this.canvas.width,
    120
);
    this.player.update(this.input);
    
    this.player.draw(this.ctx);
    this.enemy.draw(this.ctx);

}

}