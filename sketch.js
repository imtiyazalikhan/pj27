const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var boxIMG, boxSprite
var ground

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;

	ball = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	log=new log(130,150,30,10);
	
	ball=new ball(150,350,20,20);
	rope= new rope(ball.body,log.body);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



