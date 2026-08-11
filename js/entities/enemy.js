import Player from "./player.js";
import Attack from "./attack.js";

export default class Enemy extends Player {

    constructor(x, y) {

        super(x, y);

        this.color = "#B0B0B0";
        this.attack = null;
        this.attackCooldown = 0;

    }


    update(player) {

    const distance = player.x - this.x;

    const followSpeed = 2;

    // Perseguir a Mochi

    if (Math.abs(distance) > 100) {

        if (distance > 0) {

            this.x += followSpeed;
            this.direction = 1;

        } else {

            this.x -= followSpeed;
            this.direction = -1;

        }

    }
    if (Math.abs(distance) <= 100) {

    if (this.attack === null && this.attackCooldown <= 0) {

        this.attack = new Attack(this);

        this.attackCooldown = 60;

    }

}
if (this.attackCooldown > 0) {

    this.attackCooldown--;

}

if (this.attack) {

    this.attack.update();

    if (!this.attack.active) {

        this.attack = null;

    }

}

    // Knockback

    this.x += this.velocityX;

    this.velocityX *= 0.8;


    // Evitar salir del canvas

    if (this.x < 0) {

        this.x = 0;
        this.velocityX = 0;

    }

    if (this.x + this.width > 960) {

        this.x = 960 - this.width;
        this.velocityX = 0;

    }

}

}