export default class Attack {

    constructor(owner) {

        this.owner = owner;

        this.width = 40;
        this.height = 30;

        this.damage = 10;

        this.speed = 8;

        this.active = true;

        this.hasHit = false;

        this.life = 10;

        this.hitbox = {
            x: 0,
            y: 0,
            width: this.width,
            height: this.height
        };

    }


    update() {

        // La posición del ataque depende
        // de quién lo está realizando

        if (this.owner.direction === 1) {

            this.hitbox.x =
                this.owner.x + this.owner.width;

        } else {

            this.hitbox.x =
                this.owner.x - this.width;

        }

        this.hitbox.y =
            this.owner.y + 20;


        this.life--;

        if (this.life <= 0) {

            this.active = false;

        }

    }


    draw(ctx) {

        if (!this.active) {
            return;
        }

        ctx.fillStyle = "#FFD700";

        ctx.fillRect(
            this.hitbox.x,
            this.hitbox.y,
            this.hitbox.width,
            this.hitbox.height
        );

    }

}