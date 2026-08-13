import Attack from "./attack.js";

export default class Player {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.width = 70;
        this.height = 70;

        this.color = "#FFFFFF";

        this.velocityX = 0;
        this.velocityY = 0;

        this.gravity = 0.8;
        this.jumpForce = -15;

        this.ground = 350;

        this.onGround = true;
        this.direction = 1;

        this.health = 100;

        this.attack = null;
        this.attackAnimation = 0;
        this.tailAnimation = 0;
    }


    draw(ctx) {

        ctx.save();

        // Dirección

        if (this.direction === -1) {

            ctx.translate(this.x + this.width, 0);
            ctx.scale(-1, 1);
            ctx.translate(-this.x, 0);

        }


        // Animación de ataque

        let bodyOffsetX = 0;

        if (this.attackAnimation > 0) {

            bodyOffsetX = this.direction * 6;

        }


        const centerX =
            this.x + this.width / 2 + bodyOffsetX;

        const centerY =
            this.y + this.height / 2;

// -------------------------
// COLA ANIMADA
// -------------------------

const tailWave =
    Math.sin(this.tailAnimation) * 5;

ctx.strokeStyle = this.color;
ctx.lineWidth = 12;
ctx.lineCap = "round";

ctx.beginPath();

ctx.moveTo(
    this.x + 60,
    this.y + 55
);

ctx.quadraticCurveTo(
    this.x + 85,
    this.y + 70 + tailWave,
    this.x + 75,
    this.y + 40
);

ctx.quadraticCurveTo(
    this.x + 70,
    this.y + 25,
    this.x + 85,
    this.y + 20 + tailWave
);

ctx.stroke();
        // -------------------------
        // CUERPO
        // -------------------------

        ctx.fillStyle = this.color;

        ctx.beginPath();

        ctx.ellipse(
            centerX,
            centerY + 8,
            32,
            30,
            0,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // -------------------------
        // OREJA IZQUIERDA
        // -------------------------

        ctx.beginPath();

        ctx.moveTo(this.x + 8, this.y + 15);

        ctx.lineTo(
            this.x + 18,
            this.y - 5
        );

        ctx.lineTo(
            this.x + 30,
            this.y + 12
        );

        ctx.closePath();

        ctx.fill();


        // -------------------------
        // OREJA DERECHA
        // -------------------------

        ctx.beginPath();

        ctx.moveTo(
            this.x + 40,
            this.y + 12
        );

        ctx.lineTo(
            this.x + 52,
            this.y - 5
        );

        ctx.lineTo(
            this.x + 62,
            this.y + 15
        );

        ctx.closePath();

        ctx.fill();


        // -------------------------
        // OJOS
        // -------------------------

        ctx.fillStyle = "#222";

        ctx.beginPath();

        ctx.arc(
            this.x + 22,
            this.y + 25,
            5,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.beginPath();

        ctx.arc(
            this.x + 48,
            this.y + 25,
            5,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // -------------------------
        // NARIZ
        // -------------------------

        ctx.fillStyle = "#ff69b4";

        ctx.beginPath();

        ctx.arc(
            centerX,
            this.y + 38,
            5,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // -------------------------
        // MEJILLAS
        // -------------------------

        ctx.fillStyle = "#ffb6c1";

        ctx.beginPath();

        ctx.arc(
            this.x + 12,
            this.y + 38,
            6,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.beginPath();

        ctx.arc(
            this.x + 58,
            this.y + 38,
            6,
            0,
            Math.PI * 2
        );

        ctx.fill();


        ctx.restore();


        // -------------------------
        // ATAQUE
        // -------------------------

        if (this.attack) {

            this.attack.draw(ctx);

        }

    }


    update(input, canvasWidth) {

        const speed = 5;


        // -------------------------
        // MOVIMIENTO
        // -------------------------

        if (input.isPressed("ArrowRight")) {

            this.x += speed;

            this.direction = 1;

        }


        if (input.isPressed("ArrowLeft")) {

            this.x -= speed;

            this.direction = -1;

        }


        // Knockback

        this.x += this.velocityX;

        this.velocityX *= 0.8;


        // -------------------------
        // LIMITES DEL CANVAS
        // -------------------------

        if (this.x < 0) {

            this.x = 0;

        }


        if (this.x + this.width > canvasWidth) {

            this.x =
                canvasWidth - this.width;

        }


        // -------------------------
        // SALTO
        // -------------------------

        if (
            input.isPressed("Space") &&
            this.onGround
        ) {

            this.velocityY =
                this.jumpForce;

            this.onGround = false;

        }


        this.velocityY += this.gravity;

        this.y += this.velocityY;


        if (this.y >= this.ground) {

            this.y = this.ground;

            this.velocityY = 0;

            this.onGround = true;

        }


        // -------------------------
        // ATAQUE
        // -------------------------

        if (
            input.isPressed("KeyX") &&
            this.attack === null
        ) {

            this.attack =
                new Attack(this);

            this.attackAnimation = 8;

        }


        if (this.attack) {

            this.attack.update();

            if (!this.attack.active) {

                this.attack = null;

            }

        }


        // -------------------------
        // ANIMACIÓN
        // -------------------------

        if (this.attackAnimation > 0) {

            this.attackAnimation--;

        }
        this.tailAnimation += 0.08;

    }


    takeDamage(
        amount,
        knockback = 0,
        direction = 1
    ) {

        this.health -= amount;


        if (this.health < 0) {

            this.health = 0;

        }


        this.velocityX =
            knockback * direction;

    }

}