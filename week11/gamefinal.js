var yOne = 200;
var yTwo = 150;
var movementone;
var movementtwo;
var mousex = 0;
    var mousey = 0;
function setup() {
}

function draw() {
  background(220);
}var x = 50;
    var y = 50;
    var diameter = 15;
    function setup()
    {
        createCanvas(800,600);
        movementone = Math.floor(Math.random() * 10) + 1;
      movementtwo = Math.floor(Math.random() * -10) -1;
    }
    function draw()
    {
        background(75,25,100);
        fill(24,200,29);
        circle(x,y,diameter);
        circle(450,yOne,45);
      line(700,0,700,800);
      fill(75,74,200);
     circle(250,yTwo,15);
      fill(150,25,75);
       ellipse(mousex, mousey, 15, 50);

  if(yOne >= 600 || yOne <= 0)
  {
    movementone *= -1;
  }
yOne += movementone;


        if(yTwo >= 600 || yTwo <= 0)
  {
    movementtwo *= -1;
  }
yTwo += movementtwo;
      if (keyIsDown(83))
      {
        y += 10;
      }
      else if (keyIsDown(87))
      {
        y -= 10;
      }

      if (y >= 600)
      {
        y = 0;
      }
      if (x >=800)
        {
          x = 0;
          }
        if (x <=0)
        {
          x = 800;
          } if(x == 700)
    { // opening curly brace
        // body of the if statement
        console.log("YOU WIN");
    }// closing curly brace

      if (diameter < 50)
      {
        diameter += 2;
      }
      else if (diameter >= 50)
      {
        diameter = 15;
      }
    }

    function keyPressed()
    {
      if (key == 'd')
      {
        x += 25;
      }
      else if (key == 'a')
      {
        x -= 25;
      }
        if (key == 'w')
        {
          y +=10
        }
        else if (key == 's')
        {
          y -=10
        }
      function mouseClicked()
    {
      mousex = 400;
      mousey = 400;

    }


  }
