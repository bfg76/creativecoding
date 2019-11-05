var xOne = 200;
var yTwo = 190;
var xTwo = 138;
var yThree = 150;
var xfive = 150;
var yfive = 150;
var movementone;
var movementtwo;
var movementthree;
var movementfour;
var movementfive;
var sizeText= 32;
var sizeTextchange= 32;
function setup() {
  createCanvas(400, 400);
  movementone = Math.floor(Math.random() * 10) + 1;
  movementtwo = Math.floor(Math.random() * -10) -1;
  movementthree = Math.floor(Math.random() * -10) -1;
  movementfour = Math.floor(Math.random() * 10) + 1;
  movementfive = Math.floor(Math.random() * 10) + 1;
}

function draw() {
  background(125,150,25);
  circle(xOne,200,300);
  circle(xfive,yfive,50);circle(250,150,50);
circle(xTwo,150,25);circle(238,yThree,25);
ellipse(200,yTwo,50,75);
   triangle(200, 300, 275, 245, 125, 245);
  line(147, 260, 175, 260);line(225, 260, 254, 260)
  line(25, 100, 375, 100)
   textSize(sizeText);
    text('Colton and his hat', 10, 30);
   textSize(sizeText);
    text('By: Colton Keintz', 130, 380);
  
  
  if(xOne >= 400 || xOne <= 0)
  { 
    movementone *= -1;
}
xOne += movementone;
  
  if(yTwo >= 400 || yTwo <= 0)
  { 
    movementtwo *= -1;
}
yTwo += movementtwo;


if(sizeText >= 160 || sizeText <= 32)
  { 
    sizeTextchange *= -1;
}
sizeText += sizeTextchange;
  
  if(xTwo >= 400 || xTwo <= 0)
  { 
    movementthree *= -1;
}
xTwo += movementthree;
  
   if(yThree >= 400 || yThree <= 0)
  { 
    movementfour *= -1;
}
yThree += movementfour;
  
  
  
  if(xfive >= 400 || xfive <= 0)
  { 
    movementfive *= -1;
}
xfive += movementfive;
  
  if(yfive >= 400 || yfive <= 0)
  { 
    movementfive *= -1;
}
yfive += movementfive;
  
  
}
