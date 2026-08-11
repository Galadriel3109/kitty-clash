import Player from "../entities/player.js";
import Input from "./input.js";
import Enemy from "../entities/enemy.js";
import { checkCollision } from "./collision.js";
import HealthBar from "../ui/healthbar.js";

export default class Game {

    constructor() {

        this.canvas = document.getElementById("gameCanvas");

        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = 960;
        this.canvas.height = 540;

        this.input = new Input();

        this.player = new Player(150,350);

        this.enemy = new Enemy(700,350);
        this.playerHealthBar = new HealthBar(
    50,
    30,
    300,
    30
);

this.enemyHealthBar = new HealthBar(
    610,
    30,
    300,
    30
);

    }


    draw(){

        // Fondo
        this.ctx.fillStyle = "#87CEEB";

        this.ctx.fillRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );


        // Suelo
        this.ctx.fillStyle = "#5C913B";

        this.ctx.fillRect(
            0,
            420,
            this.canvas.width,
            120
        );


        // Actualizar personajes

        this.player.update(
            this.input,
            this.canvas.width
        );

        this.enemy.update(this.player);


// Colisiones

// ATAQUE DE MOCHI CONTRA NUBE

if (this.player.attack) {

    if (
        checkCollision(
            this.player.attack.hitbox,
            this.enemy
        )
    ) {

        if (!this.player.attack.hasHit) {

            const knockbackDirection =
                this.player.x < this.enemy.x ? 1 : -1;

            this.enemy.takeDamage(
                this.player.attack.damage,
                12,
                knockbackDirection
            );

            this.player.attack.hasHit = true;

            console.log("Nube recibió daño");

        }

    }

}


// ATAQUE DE NUBE CONTRA MOCHI

if (this.enemy.attack) {

    if (
        checkCollision(
            this.enemy.attack.hitbox,
            this.player
        )
    ) {

        if (!this.enemy.attack.hasHit) {

            const knockbackDirection =
                this.enemy.x < this.player.x ? 1 : -1;

            this.player.takeDamage(
                this.enemy.attack.damage,
                12,
                knockbackDirection
            );

            this.enemy.attack.hasHit = true;

            console.log("Mochi recibió daño");

        }

    }

}
        // Dibujar personajes

        this.player.draw(this.ctx);

        this.enemy.draw(this.ctx);


        // Vida de Nube

        this.ctx.fillStyle = "#000";

        this.ctx.font = "20px Arial";

        this.ctx.fillText(
            "Nube HP: " + this.enemy.health,
            700,
            50
        );
         
        this.ctx.fillStyle = "#000";
        this.ctx.font = "18px Arial";

        this.ctx.fillText(
        "MOCHI",
         50,
         22
        );

        this.ctx.fillText(
        "NUBE",
        610,
        22
        );

        this.playerHealthBar.draw(
        this.ctx,
        this.player.health,
        100
        );

        this.enemyHealthBar.draw(
        this.ctx,
        this.enemy.health,
        100
        );

    }


}