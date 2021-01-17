
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground,ball;
var bottomBin,leftBin,rightBin;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,350,width,20);
	ball = new Paper(100,100,40);
	bottomBin = new Dustbin(1000,330,200,20);
	leftBin = new Dustbin(900,290,20,100);
	rightBin = new Dustbin(1100,290,20,100);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  ball.display();
  bottomBin.display();
  leftBin.display();
  rightBin.display();
  
  drawSprites();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}



