var myState = 0;

function setup() {

  createCanvas(800, 800);


}

function draw() {
  rectMode(CENTER); // Set rectMode to CENTER
  fill('yellow');
rect(width/2, height/2, 160,320); // Draw gray rect using CENTER mode
fill(255,204,0) ;
circle(width/2, height/2,100,200) ;
fill('green') ;
circle(width/2, height/2+100,100,200) ;
fill('red') ;
circle(width/2, height/2-100,100,200) ;

  switch (myState) {
    case 0:
      break;

    case 1: // hanging out and listening to music state
      break;

    case 2:
      break;

    case 3:
      break;

    case 3:
      break;

    case 4:
      break;
  }

}
