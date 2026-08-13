export default class HitEffect {

    constructor(x, y) {

        this.x = x;
        this.y = y;

        this.life = 12;
        this.maxLife = 12;

    }

    update() {

        this.life--;

    }

    draw(ctx) {

        if (this.life <= 0) {
            return;
        }

        const progress =
            1 - this.life / this.maxLife;

        const radius =
            8 + progress * 18;

        const alpha =
            this.life / this.maxLife;

        ctx.save();

        ctx.globalAlpha = alpha;

        ctx.strokeStyle = "#FFD700";
        ctx.lineWidth = 3;

        // Círculo de impacto

        ctx.beginPath();

        ctx.arc(
            this.x,
            this.y,
            radius,
            0,
            Math.PI * 2
        );

        ctx.stroke();


        // Rayos

        for (let i = 0; i < 8; i++) {

            const angle =
                (Math.PI * 2 / 8) * i;

            const innerRadius =
                radius + 3;

            const outerRadius =
                radius + 12;

            ctx.beginPath();

            ctx.moveTo(
                this.x +
                Math.cos(angle) * innerRadius,
                this.y +
                Math.sin(angle) * innerRadius
            );

            ctx.lineTo(
                this.x +
                Math.cos(angle) * outerRadius,
                this.y +
                Math.sin(angle) * outerRadius
            );

            ctx.stroke();

        }

        ctx.restore();

    }

    get active() {

        return this.life > 0;

    }

}