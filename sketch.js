let walls = [];
let ray;
let particle

function setup(){
  createCanvas(400, 400);
  for (let i = 0; i < 5; i++){
    let x1 = random(width);
    let y1 = random(height);
    let x2 = random(width);
    let y2 = random(height);

    walls[i] = new Boundary(x1, y1, x2, y2);

  }

  // ray = new Ray(100, 200);
  particle = new Particle();

}

function draw(){
  background(0);

  for (let wall of walls){
    wall.show();

  }
  
  particle.look(walls);

  particle.update(mouseX, mouseY);
  particle.show();

  // ray.show();
  // ray.lookAt(mouseX, mouseY);

  // let pt = ray.cast(wall);
  // // console.log(pt);
  // if (pt){
  //   ellipse(pt.x, pt.y, 8, 8);
  //
  // }

}