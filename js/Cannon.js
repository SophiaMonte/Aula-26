class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.imagemcanhao = loadImage("assets/cannon.png");
    this.imagembasec = loadImage("assets/cannonBase.png");
  }
  
  display(){
    image(this.imagembasec, 70, 20, 200, 200);
    push();
    translate(this.x, this.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.imagemcanhao, 0, 0, this.width, this.height);
    pop();
    if (keyIsDown(DOWN_ARROW) && this.angle<70 ) 
    { this.angle += 1; } 
    if (keyIsDown(UP_ARROW) && this.angle>-30 ) 
    { this.angle -= 1; }
  }

}
