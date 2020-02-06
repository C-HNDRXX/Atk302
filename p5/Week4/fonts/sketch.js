var long ;

function preload() {
  long = loadFont("assets/long.ttf") ;

}
function setup() {
  // put setup code here
  createCanvas(800,800) ;

}

function draw() {
  // put drawing code here
  textFont(long, 28) ;
  text("What's Up!", 100, 100) ;
}
