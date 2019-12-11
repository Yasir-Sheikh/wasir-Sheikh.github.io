function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  //let x = (windowWidth - width) / 2;
  //let y = (windowHeight - height) / 2;
  //cnv.position(x, y);

}
let pix;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(200, 200, 100);
  fill(255,0,0);
  strokeWeight(10);
  ellipse(200,200,200);
  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      //console.log("X: " + clickX);
      //console.log("Y: " + clickY);
      pix = get(mouseX, mouseY);
      for(let i = 0; i<3; i++){
      fill(0);
      text(pix[i], (windowWidth/2)+ i*30, windowHeight/2);
      }


    }
  }
}
