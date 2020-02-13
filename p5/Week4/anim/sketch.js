var x = 0;

function setup() {
  // put setup code here
  createCanvas(800, 800);
}

function draw() {
  background('blue');
  translate(x, 0);
  hndrx();
  pop();

  x = x + 10;
  if (x > width) {
    x = -400;
  }
}

function hndrx() {
  rect(566, 200, 20, 500);
  fill(200, 82, 45);
  stroke(128, 0, 0);
  ellipse(600, 250, 30, 30);
}
