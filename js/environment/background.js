export default class Background {

    constructor(canvasWidth, canvasHeight) {

        this.width = canvasWidth;
        this.height = canvasHeight;

        this.clouds = [
            {
                x: 100,
                y: 80,
                speed: 0.3,
                size: 1
            },
            {
                x: 450,
                y: 130,
                speed: 0.2,
                size: 0.8
            },
            {
                x: 800,
                y: 70,
                speed: 0.25,
                size: 1.2
            }
        ];

    }


    update() {

        for (const cloud of this.clouds) {

            cloud.x += cloud.speed;

            if (cloud.x > this.width + 120) {

                cloud.x = -120;

            }

        }

    }


    draw(ctx) {

        // Cielo

        ctx.fillStyle = "#87CEEB";

        ctx.fillRect(
            0,
            0,
            this.width,
            this.height
        );


        // Sol

        ctx.fillStyle = "#FFD966";

        ctx.beginPath();

        ctx.arc(
            820,
            90,
            40,
            0,
            Math.PI * 2
        );

        ctx.fill();


        // Nubes

        for (const cloud of this.clouds) {

            this.drawCloud(
                ctx,
                cloud.x,
                cloud.y,
                cloud.size
            );

        }


        // Suelo

        ctx.fillStyle = "#5C913B";

        ctx.fillRect(
            0,
            420,
            this.width,
            120
        );

    }


    drawCloud(ctx, x, y, size) {

        ctx.fillStyle = "#FFFFFF";

        ctx.beginPath();

        ctx.arc(
            x,
            y,
            25 * size,
            0,
            Math.PI * 2
        );

        ctx.arc(
            x + 30 * size,
            y - 10 * size,
            32 * size,
            0,
            Math.PI * 2
        );

        ctx.arc(
            x + 65 * size,
            y,
            25 * size,
            0,
            Math.PI * 2
        );

        ctx.fill();

    }

}