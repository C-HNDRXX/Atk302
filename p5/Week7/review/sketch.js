var myState = 0;

function setup() {
  // put setup code here
  createcanvas(800, 800) ;
}

function draw() {
  // put drawing code here
  background('black') ;

switch(myState) {

  case 0:
  text("why did the chicken?", 100, 100) ;
  break ;

  case 1:
  text()
  break ;


}

}


function mouseReleased() {
  myState = myState + 1 ;
  if (myState > 1) {
    myState = 0 ;
  }
}
