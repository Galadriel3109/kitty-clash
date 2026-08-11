import Player from "./player.js";

export default class Enemy extends Player {

    constructor(x, y) {

        super(x, y);

        this.color = "#B0B0B0";

    }


    update() {

    console.log("Nube se mueve:", this.velocityX);

    this.x += this.velocityX;

    this.velocityX *= 0.8;

    if(this.x < 0){

        this.x = 0;
        this.velocityX = 0;

    }

    if(this.x + this.width > 960){

        this.x = 960 - this.width;
        this.velocityX = 0;

    }

}

}