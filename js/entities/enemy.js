import Player from "./player.js";

export default class Enemy extends Player {

    constructor(x, y) {
        super(x, y);

        this.color = "#B0B0B0";
    }

    update() {
        // Por ahora no hace nada.
        // Más adelante tendrá inteligencia artificial.
    }

}