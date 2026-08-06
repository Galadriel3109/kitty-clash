import Game from "./engine/game.js";

const game = new Game();

function gameLoop() {

    game.draw();

    requestAnimationFrame(gameLoop);

}

gameLoop();