import processing.video.*;


PImage img;
Capture cam;
int pixelSize;
int frames;
float magnitude = 10;
float rampSpeed = 20;
float frequency = 10;

void setup() {
  size(640, 480);
  img = loadImage("landscape2.png");
  cam = new Capture(this, 640, 480);
  pixelSize = 10;
  imageMode(CENTER);
  noStroke();
  background(255);
  cam.start();
}

void draw() {

  if (cam.available() == true) {
    cam.read();
  }
  frames+= rampSpeed; 
  frames = frames % 360;

  frequency = map(mouseX, 0, width, 1, 100);
  magnitude = map(mouseY, 0, height, 1, 50);

  for (int x = 0; x < width; x++){
    for(int y = 0; y < height; y++){
      color pix = cam.get(x, y);
      fill(pix, 128);
      float phase = map(x, 0, width, 0, frequency);
      float wave = sin(frames-phase);
      wave = wave * magnitude;
      rect(x, y+wave, pixelSize, pixelSize);
    }
  }
  
  
}
