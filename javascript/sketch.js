function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  //grad = loadImage("img/larsV.jpg");
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
let n = 1;

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

  //image(grad, 0, 0, 300, 300);

  hPix = get(mouseX, mouseY);
  for (let i = 0; i < 3; i++) {
    fill(0);
    text(hPix[i], (windowWidth / 2) + i * 30, windowHeight / 2);
    text(pixChoice1[i], 0 + i * 30, 10)
    text(pixChoice2[i], 0 + i * 30, 40)
  }
  if (clickNum === 2 * n) {
    mix(pixChoice1, pixChoice2, newColor);
    n++;
  }
  text(newColor[0] + "   " + newColor[1] + "       " + newColor[2], 0, 70);
}

function mix(color1, color2, color3) {

  color3[0] = (color1[0] + color2[0]) / 2
  color3[1] = (color1[1] + color2[1]) / 2
  color3[2] = (color1[2] + color2[2]) / 2

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
