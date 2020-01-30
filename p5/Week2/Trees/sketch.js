function setup() {
  // put setup code here
  createCanvas(720, 400);
   background(76, 200, 210);
 }

function draw() {
  // put drawing code here
noStroke();
   fill(222,184,135);
   rect(566,200,20,500);
   fill(200,82,45);
   stroke(128,0,0);
   ellipse(600,250,30,30);
   ellipse(552,250,30,30);
   fill(222,184,135);
   fill(255,255,0)
   ellipse(45,50,210,210);

fill(255,255,255);
ellipse(600,100,300,100);



stroke(29, 156, 165);
 fill(29, 156, 165);
 rect(0,380,720,500);

 fill(0,100,0);
 translate(580, 200);
 //noStroke();
 strokeWeight(2.2);
 stroke(11, 58, 16);
 for (var i = 0; i < 10; i ++) {
   ellipse(0, 30, 20, 80);
   rotate(PI/5);
 }

}
