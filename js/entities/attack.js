export default class Attack {

    constructor(player) {

        this.width = 40;
        this.height = 30;

        this.damage = 10;

        this.active = true;

        this.duration = 10;

        this.player = player;

    }


    update() {

        this.duration--;

        if (this.duration <= 0) {

            this.active = false;

        }

    }


    get hitbox() {

        return {

            x: this.player.x + this.player.width,

            y: this.player.y + 20,

            width: this.width,

            height: this.height

        };

    }


    draw(ctx) {

        const box = this.hitbox;


        ctx.fillStyle = "#ffcc00";


        ctx.fillRect(
            box.x,
            box.y,
            box.width,
            box.height
        );

    }

}