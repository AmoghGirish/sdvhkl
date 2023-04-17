
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground;
var left;
var right;
var top_wall;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(2000, 2000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		restitution: 0.95
	  }
	
	  ball = Bodies.circle(200,100,20,ball_options);
	  World.add(world,ball);
	  ground =new Ground(200,390,2000,20);
	  right = new Ground(900,355,20,100);
	  left = new Ground(700,355,20,100);
	  btn1 = createImg('right.png');
	  btn1.position(220,30);
	  btn1.size(50,50);
	  btn1.mouseClicked(hForce);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20);
  ground.show();
 
  left.show();
  right.show();
  drawSprites();
 
}


function hForce()
{
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.009,y:0});
}







