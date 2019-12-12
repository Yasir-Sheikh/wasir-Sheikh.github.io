let grad;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  grad = loadImage("img/larsV.jpg");
  //cnv.parent("a");
  //let x = (windowWidth - width) / 2;
  //let y = (windowHeight - height) / 2;
  //cnv.position(x, y);

}


let hPix;
let pixChoice1= [0,0,0];
let pixChoice2= [0,0,0];
let clickNum = 0;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200, 200, 100);
  fill(0, 0, 255);
  strokeWeight(10);
  ellipse(200, 200, 200);

  image(grad, 0, 0, 300, 300);

  hPix = get(mouseX, mouseY);
  for (let i = 0; i < 3; i++) {
    fill(0);
    text(hPix[i], (windowWidth / 2) + i * 30, windowHeight / 2);
    text(pixChoice1[i], 0 + i * 30, 10)
    text(pixChoice2[i], 0 + i * 30, 40)
  }

}

function mouseClicked() {

    if(clickNum%2 === 0)
    {
      pixChoice1 = get(mouseX, mouseY);
    }else
    {
      pixChoice2 = get(mouseX, mouseY);
      //console.log(pixChoice2);
    }
  clickNum++;
  console.log(clickNum);

}
