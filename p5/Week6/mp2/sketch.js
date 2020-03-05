var myState = 0;
var timer = 0 ;
var long ;
var kid ;


function preload() {
  long = loadFont("assets/Long_Shot.ttf") ;

}

function setup() {
  // put setup code here
  createCanvas(800, 800);
    textFont(long, 50) ;
    kid = loadImage("assets/Kid.jpg") ;
    SI = loadImage("assets/SI.jpg") ;
    draft =loadImage("assets/draft.jpg") ;
    rook = loadImage("assets/rook.jpg") ;
    mvp = loadImage("assets/mvp.jpg") ;
    heat = loadImage("assets/heat.jpg") ;
    clev = loadImage("assets/clev.jpg") ;
    lake = loadImage("assets/lake.jpg") ;
    trophy = loadImage("assets/trophy.jpg") ;
    old = loadImage("assets/old.jpg") ;
}

function draw() {
  // put drawing code here


  switch (myState) {
    case 0:
      background('gray');
      textSize(15)
      text("Lebron James was born December 30, 1984", 100, 100);
image(kid, 250, 200, 500, 500) ;
      timer = timer + 1 ;
      if (timer > 200) {
        myState = 1 ;
        timer = 0 ;
      }
      break;

    case 1:
    background('yellow') ;

    text("He was recognized as the next huge basketball star since he was in 8th grade", 100, 100) ;
image(old, 250, 200, 500, 500)
      break;

    case 2:
    background('green')
    text("When he was 16 he was on the cover of Sports Illustrated and got the nickname The Chosen One", 100, 100) ;
image(SI, 250, 200, 500, 500) ;
      break;

    case 3:
    background('blue') ;
    text("He was selected #1 overall in the 2003 NBA Draft by the Cleveland Cavaliers", 25, 100) ;
image(draft, 250, 200, 500, 500) ;
      break;

    case 4:
    background('orange') ;
    text("He won Nba Rookie of the year averaging 20.9 pts, 5.5 rb, 5.9 ast, and 1.6 stls", 25, 100) ;
image(rook, 250, 200, 500, 500) ;
      break;

    case 5:
    background('blue') ;
    text("Lebron won his first MVP in the 2008-09 season and would go on to win 3 more", 25, 100) ;
image(mvp, 250, 200, 500, 500) ;
        break;

    case 6:
    background('red') ;
    text("He joined the Miami Heat in 2010 and would win 2 championships in 2012 and 2013", 25, 100, 600, 600 ) ;
image(heat, 250, 200, 500, 500) ;
          break;

    case 7:
    background('white') ;
    text("After the 2013-14 season he left the Miami Heat and returned to the Cleveland Cavaleiers where he helped win a chamipnship in 2016 ", 25, 100, 700, 600) ;
image(clev, 250, 200, 500, 500) ;
            break;

    case 8:
    background('purple') ;
    text("Lebron is in 17th season and is now a member of the Lakers, He is regarded as one of the best basketball players of all time", 25, 100) ;
image(lake, 250, 200, 500, 500) ;
image(trophy, 40, 200, 300, 300) ;
              break;
  }

}



function mouseReleased() {
  myState = myState + 1;
  if (myState > 8) {
    myState = 0;
  }
}
