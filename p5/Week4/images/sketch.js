var kobe1 ;
var kobe2 ;
var kobe3 ;

function setup() {
  // put setup code here
  createCanvas(windowWidth,windowHeight);

imageMode(CENTER) ;

  kobe1 = loadImage("assests/kobe1.jpg") ;
  kobe2 = loadImage("assests/kobe2.jpg") ;
  kobe3 = loadImage("assests/kobe3.jpg") ;

}

function draw() {
  // put drawing code here
image(kobe1, width/2,0,200,200) ;
image(kobe2, width/2,200,200,200) ;
image(kobe3, width/2, 400, 200, 200) ;
}
