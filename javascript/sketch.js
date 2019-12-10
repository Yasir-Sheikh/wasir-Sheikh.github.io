function setup() {
  var cnv = createCanvas(300, 300);
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
  background(255, 0, 200);
}

function draw() {
  background(200,200,100);
  ellipse(150,150,10);
}
