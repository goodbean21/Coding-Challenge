let walls = [];
let ray;
let particle

let xoff = 0;
let yoff = 10000;

const sceneWidth = 400;
const sceneHeight = 400;

let sliderFOV;

function keyPressed(){
  if (key == 'A'){
    particle.rotate(0.1);

  }else if(key == 'S'){
    particle.rotate(-0.1);

  }
}

function changeFOV(){
  const fov = sliderFOV.value();
  particle.updateFOV(fov);

}

function setup(){
  createCanvas(800, 400);
  for (let i = 0; i < 5; i++){
    let x1 = random(sceneWidth);
    let y1 = random(sceneHeight);
    let x2 = random(sceneWidth);
    let y2 = random(sceneHeight);

    walls[i] = new Boundary(x1, y1, x2, y2);

  }

  sliderFOV = createSlider(0, 360, 45);
  sliderFOV.input(changeFOV);

  walls.push( new Boundary(0, 0, sceneWidth, 0));
  walls.push( new Boundary(sceneWidth, 0, sceneWidth, sceneHeight));
  walls.push( new Boundary(sceneWidth, sceneHeight, 0, sceneHeight));
  walls.push( new Boundary(0, sceneHeight, 0, 0));

  // ray = new Ray(100, 200);
  particle = new Particle();

}

function draw(){
  background(0);

  if(keyIsDown(LEFT_ARROW))         particle.rotate(-0.05);
  else if(keyIsDown(RIGHT_ARROW))   particle.rotate(0.05);
  else if(keyIsDown(UP_ARROW))      particle.move(1);
  else if(keyIsDown(DOWN_ARROW))    particle.move(-1);

  for (let wall of walls){
    wall.show();

  }

  const scene = particle.look(walls);
  const widthOfScene = sceneWidth/ scene.length;

  push();
  translate(sceneWidth, 0);

  for (let i = 0; i < scene.length; i++){
    noStroke();
    const sq = scene[i]*scene[i];
    const wSq = sceneWidth * sceneWidth;

    const b = map(sq, 0, wSq, 255, 0);
    const h = map(scene[i], 0, sceneWidth, sceneHeight, 0)

    rectMode(CENTER);
    rect(i*widthOfScene + widthOfScene/2, sceneHeight/2, widthOfScene + 1, h);

    fill(b);

  }

  pop();

  // particle.update(mouseX, mouseY);

  // particle.update(noise(xoff) * sceneWidth, noise(yoff) * sceneHeight);
  //
  // xoff += 0.01;
  // yoff += 0.01;

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
