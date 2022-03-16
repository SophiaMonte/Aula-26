class Barco {
  constructor(x, y, width, height, posBarco) {
    this.body = Bodies.rectangle(x, y, width, height)
    this.width = width;
    this.height = height;
    this.posBarco = posBarco;
    this.imagembarco = loadImage("assets/boat.png");
    World.add(world, this.body);
  }
  
  remove(indice){
    setTimeout(()=>{
      Matter.World.remove(world, barcos[indice].body);
      delete barcos[indice];
    }, 2000)
  }
  display(){
    var angle = this.body.angle;
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.imagembarco, 0, this.posBarco, this.width, this.height);
    pop();
  }

}
