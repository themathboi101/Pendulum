
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here
	bobObject1=new Bob(30,720);
	bobObject2=new Bob(100,250);
    bobObject3=new Bob(160,720);
	bobObject4=new Bob(240,720);
	bobObject5=new Bob(400,720);

	roofObject=new Roof(400,520,300);

	ropw1=new Rope(bobObject1.body,roofObject.body,bob.Width*2);
	Engine.run(engine);
  
}


function draw() {
  
  background(200);

  rectMode(CENTER);

  if(keyDown(left)){
	  bobObject1.isStatic=false
  }
  
  drawSprites();
 
}



