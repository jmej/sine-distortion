
PImage img;
int pixelSize;
int frames;
float magnitude = 20;
float speed = 20;

void setup() {
  size(645, 640);
  img = loadImage("landscape2.png");
  pixelSize = 10;
  imageMode(CENTER);
  noStroke();
  background(255);
}

void draw() {
  frames+= speed; 
  frames = frames % 360;

  for (int x = 0; x < width; x++){
    for(int y = 0; y < height; y++){
      color pix = img.get(x, y);
      fill(pix, 128);
      float phase = map(x, 0, width, 0, 360);
      float wave = sin(radians(frames-phase));
      wave = wave * magnitude;
      rect(x, y+wave, pixelSize, pixelSize);
    }
  }
  
  
  
}
