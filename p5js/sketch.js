
let img;
let cam;
let pixelSize = 4;
let frames;
let magnitude = 10;
let rampSpeed = 0.2;
let frequency = 10;

function setup() {
  createCanvas(390, 240);
  cam = createCapture(VIDEO);
  cam.size(390, 240);
  cam.hide();
  //imageMode(CENTER);
  noStroke();
  background(255);
}

function draw() {
  background(0);
  frames += rampSpeed;
  //image(cam, 0, 0, 390, 240);  
  cam.loadPixels();
  frequency = map(mouseX, 0, width, 1, 10);
  magnitude = map(mouseY, 0, height, 1, 50);

  for (let x = 0; x < width; x += 1){
    for(let y = 0; y < height; y += 1){
      let index = 4 * x * y;
      let r = cam.pixels[index];
      let g = cam.pixels[index+1];
      let b = cam.pixels[index+2];
      fill(r, g, b);
      let phase = map(x, 0, width, 0, frequency);
      let wave = sin(frames-phase);
      wave = wave * magnitude;
      rect(x, y+wave, 1, 1);
    }
  }
  
  
}
