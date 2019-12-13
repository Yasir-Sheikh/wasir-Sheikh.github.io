let grad;

function setup() {
  let cnv = createCanvas(windowWidth-17, 400);
  cnv.parent('can');
  grad = loadImage("/javascript/gradient.png");

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
  background(255, 229, 180);
  fill(0, 0, 255);
  strokeWeight(10);
  fill(newColor[0], newColor[1], newColor[2]);
  rect(500, 50, 200, 300);
  textSize(25);

  image(grad, 100, 400/2, 800, 200);

  hPix = get(mouseX, mouseY);
  for (let i = 0; i < 3; i++) {
    fill(0);
    text(hPix[i], (windowWidth-17) + i * 50, 400);
    text(pixChoice1[i], 0 + i * 50, 50)
    text(pixChoice2[i], 0 + i * 50, 80)
    text(floor(newColor[i]), 0 + i * 50, 110);
  }
  if (clickNum%2 === 0 ) { mix(); }

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
    //console.log(pixChoice2);
  }
  clickNum++;
  console.log(clickNum);

}
