class Particle{
  constructor(){
    this.pos = createVector(width/2, height/2);

    this.rays = []
    for(let a = 0; a < 360; a += 10){
      this.rays.push(new Ray(this.pos, radians(a)));
    }
  }

  update(x, y){
    this.pos.set(x, y);

  }

  look(walls){
    for (let ray of this.rays){
      let closestPoint = null;
      let record = Infinity;

      for(let wall of walls){
        const point = ray.cast(wall);
        
        if(point){
          const distance = p5.Vector.dist(this.pos, point);

          if(distance < record){
            record = distance;
            closestPoint = point;
          }

          if(closestPoint){
            line(this.pos.x, this.pos.y, closestPoint.x, closestPoint.y);

          }
        }
      }
    }

  }

    show(){
      fill(255);
      ellipse(this.pos.x, this.pos.y, 16);
      for(let ray of this.rays){
        ray.show();
      }
    }
  }
