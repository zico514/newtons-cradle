class Bob {
    constructor(x, y) {
      var options = {
       isStatic:false,
        restitution: 1.2,
        friction: 0.5,
        density: 1.2
      }
      this.body = Bodies.circle(x, y, 25, options);
      this.radius = 50;
      
  
      World.add(world, this.body);
    }
    display() {
      var pos = this.body.position;
      
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke("blue");
      
      fill("red");
      circle(0, 0, this.radius);
      pop();
    }
  }