let grad;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  grad = loadImage("Colour-Wheel-Rainbow-Spectrum-Color-Wheel-1740381.jpg");
  //cnv.parent("a");
  //let x = (windowWidth - width) / 2;
  //let y = (windowHeight - height) / 2;
  //cnv.position(x, y);

}


let hPix;
let pixChoice1 = [0, 0, 0];
let pixChoice2 = [0, 0, 0];
let clickNum = 0;
let newColor = [255, 255, 255];

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200, 200, 100);
  fill(0, 0, 255);
  strokeWeight(10);
  ellipse(200, 200, 200);
  fill(newColor[0], newColor[1], newColor[2]);
  rect(500, 100, 200, 200);

  image(grad, windowWidth/2, windowHeight/2, 300, 300);

  hPix = get(mouseX, mouseY);
  for (let i = 0; i < 3; i++) {
    fill(0);
    text(hPix[i], (windowWidth / 2) + i * 30, windowHeight / 2);
    text(pixChoice1[i], 0 + i * 30, 10)
    text(pixChoice2[i], 0 + i * 30, 40)
    text(newColor[i], 0 + i * 30, 60);
  }
  if (clickNum%2 === 0 ) { mix(); }

}

function mix() {


for (let i = 0; i<3; i++)
{
  newColor[i] = (pixChoice1[i] + pixChoice2[i]) / 2
}

}

function mouseClicked() {

  if (clickNum % 2 === 0) {
    pixChoice1 = get(mouseX, mouseY);
  } else {
    pixChoice2 = get(mouseX, mouseY);
    //console.log(pixChoice2);
  }
  clickNum++;
  console.log(clickNum);

}
