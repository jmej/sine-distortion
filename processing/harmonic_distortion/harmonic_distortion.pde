import processing.video.*;


PImage img;
Capture cam;
int pixelSize;
float frames;
float magnitude = 10;
float rampSpeed = 0.2;
float frequency = 10;

void setup() {
  size(1024, 768);
  img = loadImage("landscape2.png");
  cam = new Capture(this, 1024, 768);
  pixelSize = 4;
  imageMode(CENTER);
  noStroke();
  background(255);
  cam.start();
}

void draw() {

  if (cam.available() == true) {
    cam.read();
  }
  frames += rampSpeed;
    
 
  
  frequency = map(mouseX, 0, width, 1, 10);
  magnitude = map(mouseY, 0, height, 1, 50);

  for (int x = 0; x < width; x += pixelSize){
    for(int y = 0; y < height; y += pixelSize){
      color pix = cam.get(x+pixelSize/2, y+pixelSize/2);
      fill(pix, 128);
      float phase = map(x, 0, width, 0, frequency);
      float wave = sin(frames-phase);
      wave = wave * magnitude;
      rect(x, y+wave, pixelSize, pixelSize);
    }
  }
  
  
}
