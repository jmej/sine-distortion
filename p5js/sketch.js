
let img;
let cam;
let pixelSize;
let frames;
let magnitude = 10;
let rampSpeed = 0.2;
let frequency = 10;

function setup() {
  size(390, 240);
  cam = createCapture(VIDEO);
  cam.size(390, 240);
  pixelSize = 4;
  imageMode(CENTER);
  noStroke();
  background(255);
}

function draw() {

  frames += rampSpeed;
    
 
  
  frequency = map(mouseX, 0, width, 1, 10);
  magnitude = map(mouseY, 0, height, 1, 50);

  for (let x = 0; x < width; x += pixelSize){
    for(let y = 0; y < height; y += pixelSize){
      color pix = cam.get(x+pixelSize/2, y+pixelSize/2);
      fill(pix, 128);
      let phase = map(x, 0, width, 0, frequency);
      let wave = sin(frames-phase);
      wave = wave * magnitude;
      rect(x, y+wave, pixelSize, pixelSize);
    }
  }
  
  
}
