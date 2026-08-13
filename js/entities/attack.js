export default class Attack {

    constructor(owner) {

        this.owner = owner;

        this.width = 40;
        this.height = 30;

        this.damage = 10;

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


        // -------------------------
        // PATITA
        // -------------------------

        ctx.fillStyle = "#FFFFFF";

        ctx.beginPath();

        ctx.arc(
            this.hitbox.x + this.width / 2,
            this.hitbox.y + 12,
            13,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // -------------------------
        // ALMOHADILLA
        // -------------------------

        ctx.fillStyle = "#ffb6c1";

        ctx.beginPath();

        ctx.arc(
            this.hitbox.x + this.width / 2,
            this.hitbox.y + 15,
            5,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // -------------------------
        // DEDITOS
        // -------------------------

        ctx.beginPath();

        ctx.arc(
            this.hitbox.x + 10,
            this.hitbox.y + 5,
            4,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.beginPath();

        ctx.arc(
            this.hitbox.x + 20,
            this.hitbox.y + 2,
            4,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.beginPath();

        ctx.arc(
            this.hitbox.x + 30,
            this.hitbox.y + 5,
            4,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // -------------------------
        // DESTELLO
        // -------------------------

        ctx.strokeStyle = "#FFD700";

        ctx.lineWidth = 3;

        ctx.beginPath();

        ctx.moveTo(
            this.hitbox.x - 5,
            this.hitbox.y + 5
        );

        ctx.lineTo(
            this.hitbox.x - 12,
            this.hitbox.y - 5
        );

        ctx.stroke();


        ctx.beginPath();

        ctx.moveTo(
            this.hitbox.x + this.width + 5,
            this.hitbox.y + 5
        );

        ctx.lineTo(
            this.hitbox.x + this.width + 12,
            this.hitbox.y - 5
        );

        ctx.stroke();

    }

}