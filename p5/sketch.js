let img;
let pixelSize;
let frames = 0;
let magnitude = 20;
let speed = 20;
let imagePixels = [];
let newImage = true;

function preload() {
  img = loadImage("assets/landscape2.png");
}

function setup() {
  createCanvas(645, 640);
  pixelSize = 10;
  noStroke();
  background(255);
}

function draw() {
  frames+= speed; 
  frames = frames % 360;

  if (newImage){ //only re-fill the pixels array when we need to
  	imageMode(CORNER);
  	image(img, 0, 0);
  	loadPixels();
  	//get() seems to be slower than using the pixels array directly fwiw
  	for (let i = 0; i < pixels.length; i++){
  		imagePixels.push(color(pixels[i], pixels[i + 1], pixels[i + 2])); // get colors
  	}
  	newImage = false; //need to flip this each frame if using video
  }
  
  console.log(frames);
  for (let x = 0; x < width; x++){
    for(let y = 0; y < height; y++){
      let loc = (width - x - 1) + y*width;
      fill(imagePixels[loc], 128);
      let phase = map(x, 0, width, 0, 360);
      let wave = sin(radians(frames-phase));
      wave = wave * magnitude;
      rect(x, y+wave, pixelSize, pixelSize);
    }
  }

  
  
}