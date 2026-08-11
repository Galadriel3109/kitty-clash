export default class HealthBar {

    constructor(x, y, width, height) {

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

    }

    draw(ctx, currentHealth, maxHealth) {

        // Fondo de la barra
        ctx.fillStyle = "#333";

        ctx.fillRect(
            this.x,
            this.y,
            this.width,
            this.height
        );


        // Porcentaje de vida
        const healthPercentage = currentHealth / maxHealth;


        // Vida actual
        ctx.fillStyle = "#e74c3c";

        ctx.fillRect(
            this.x,
            this.y,
            this.width * healthPercentage,
            this.height
        );


        // Borde
        ctx.strokeStyle = "#000";

        ctx.lineWidth = 3;

        ctx.strokeRect(
            this.x,
            this.y,
            this.width,
            this.height
        );

    }

}