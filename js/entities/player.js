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
}

    draw(ctx) {

    ctx.save();

    if (this.direction === -1) {
        ctx.translate(this.x + this.width, 0);
        ctx.scale(-1, 1);
        ctx.translate(-this.x, 0);
    }

    // Cuerpo
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);

    // Ojos
    ctx.fillStyle = "#000";
    ctx.fillRect(this.x + 15, this.y + 18, 8, 8);
    ctx.fillRect(this.x + 47, this.y + 18, 8, 8);

    // Nariz
    ctx.fillStyle = "#ff69b4";
    ctx.fillRect(this.x + 31, this.y + 35, 8, 6);

    // Orejas
    ctx.fillStyle = "#FFFFFF";

    ctx.beginPath();
    ctx.moveTo(this.x + 8, this.y);
    ctx.lineTo(this.x + 20, this.y - 20);
    ctx.lineTo(this.x + 28, this.y);
    ctx.fill();

    ctx.beginPath();
    ctx.moveTo(this.x + 42, this.y);
    ctx.lineTo(this.x + 50, this.y - 20);
    ctx.lineTo(this.x + 62, this.y);
    ctx.fill();

    ctx.restore();
    if(this.attack){

    this.attack.draw(ctx);

     }
}
   update(input, canvasWidth) {

    const speed = 5;

    if (input.isPressed("ArrowRight")) {
    this.x += speed;
    this.direction = 1;
     } 

     if (input.isPressed("ArrowLeft")) {
    this.x -= speed;
    this.direction = -1;
    }
    this.x += this.velocityX;
    this.velocityX *= 0.8;

    // Evita salir por la izquierda
    if (this.x < 0) {
        this.x = 0;
    }

    // Evita salir por la derecha
    if (this.x + this.width > canvasWidth) {
        this.x = canvasWidth - this.width;
    }
    if (input.isPressed("Space") && this.onGround) {

    this.velocityY = this.jumpForce;

    this.onGround = false;
    }
   
    this.velocityY += this.gravity;

    this.y += this.velocityY;

    if (this.y >= this.ground) {

    this.y = this.ground;

    this.velocityY = 0;

    this.onGround = true;

     }
     if (input.isPressed("KeyX") && this.attack === null) {

      this.attack = new Attack(this);

      }
      if(this.attack){

      this.attack.update();

      if(!this.attack.active){

        this.attack = null;

       }

     }

   }
takeDamage(amount, knockback = 0, direction = 1){

    this.health -= amount;

    if(this.health < 0){

        this.health = 0;

    }

    this.velocityX = knockback * direction;

 }
}