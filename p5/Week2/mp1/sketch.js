function setup() {
  // put setup code here
  createCanvas(1000, 800);
  rectMode(CENTER);
  ellipseMode(CENTER);
}

function draw() {
  // put drawing code here
  background(76, 200, 210);
  // stuff that we always want to show
  fill("saddlebrown");
  circle(500, 365, 500);
  fill("white");
  circle(400,300,100);
  circle(600,300,100);
  fill("black");
  circle(400,342,20);
  circle(600,342,20);
  if (mouseIsPressed) {
    // stuff that shows when the mouse is pressed
    ellipse(50, 50, 50, 50);

(165,42,42)
  }

  fill(0);
  textSize(40);
  text(mouseX.toFixed(0) + ", " + mouseY, 40, 40);
}



function mouseReleased() {
  console.log(mouseX + ", " + mouseY);
}
