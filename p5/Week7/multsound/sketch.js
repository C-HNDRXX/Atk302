var song1, song2, song3;
var myState = 0 ;

function preload() {
  song1 = loadSound('assets/donkey.mp3');
  song2 = loadsound('assests/skate.mp3') ;
  song3 = loadsound('assests/thrill.mp3') ;
}

function setup() {

  createCanvas(720, 200);
  background(255, 0, 0);


}
function draw() {
switch(myState) {
  case 0:
    song1.play();  // this is what starts the sound
    myState = 1;
  break;

  case 1:// hanging out and listening to music state
  break;

  case 2:
  song2.play();
  myState = 3
  break;

  case 3:
  break;

  case 3:
  break;

  case 4:
  break;
}

}


function mouseReleased() {

  song1.pause
}
