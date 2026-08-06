export default class Input {

    constructor() {

        this.keys = {};

        window.addEventListener("keydown", (event) => {
            this.keys[event.code] = true;
        });

        window.addEventListener("keyup", (event) => {
            this.keys[event.code] = false;
        });

    }

    isPressed(key) {
        return this.keys[key] === true;
    }

}