let grad;

function preload() {
  grad = loadImage("/javascript/gradient.png");
  boldRobert = loadFont('/javascript/Roboto-Bold.ttf');
}

function setup() {
  let cnv = createCanvas(windowWidth-17, 400);
  cnv.parent('can');
}


let hPix;
let pixChoice1 = [0, 0, 0];
let pixChoice2 = [0, 0, 0];
let clickNum = 0;
let newColor = [255, 255, 255];

function windowResized() {
  resizeCanvas(windowWidth-17, 400);

}

function draw() {
  fill (255, 255, 255);//WHITE
  rect (11, 11, 111, 111); //WHITE SQUARE
  background(255, 229, 180);
  strokeWeight(10);
  fill(newColor[0], newColor[1], newColor[2]); //COLOR
  rect(4*(windowWidth-17)/5, 50, 200, 300); //OUTPUT RECTANGLE
  textFont(boldRobert, 25); //FONT LOADING

  rect(18,88,windowWidth/2-155,205,5); //background to IMAGE
  image(grad, 20, 90, windowWidth/2-160, 200);//IMG BORDER

  hPix = get(mouseX, mouseY);
  fill(0);
  text("Hovering: ", ((windowWidth)/6)-120, 390);
  text("Selection 1: ", windowWidth/2, 150);
  text("Selection 2: ", windowWidth/2, 250);
  text("Output: ", (4*(windowWidth)/4.7)-120, 390);
  for (let i = 0; i < 3; i++) {
    text(hPix[i], 17 + ((windowWidth)/6) + i * 50, 390); //HOVERING PIXEL RGB
    text(pixChoice1[i], (windowWidth/2)+160 + i * 50, 150) //1rst Choice
    text(pixChoice2[i], (windowWidth/2)+160 + i * 50, 250) //2nd choice
    text(floor(newColor[i]), (4*(windowWidth-17)/4.7) + i * 50, 390); //Combined COLOR
  }

  if (clickNum%2 === 0 )
  {
    strokeWeight(2);
    fill(255,255,255,100);
    mix();
    rect((windowWidth)/2-10, 115, 340, 50);
  }else{
    strokeWeight(2);
    fill(255,255,255,100);
    rect((windowWidth)/2-10, 220, 340, 50);
  }

}

function mix() {

  for (let i = 0; i<3; i++)
  {
    newColor[i] = (pixChoice1[i] + pixChoice2[i]) / 2;
  }

}

function mouseClicked() {

  if (clickNum % 2 === 0) {
    pixChoice1 = get(mouseX, mouseY);
  } else {
    pixChoice2 = get(mouseX, mouseY);
  }
  clickNum++;
}
