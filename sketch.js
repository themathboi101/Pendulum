
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

	//Creating the Bodies Here
	bobObject1=new Bob(50);
	bobObject2=new Bob(125);
    bobObject3=new Bob(200);
	bobObject4=new Bob(275);
	bobObject5=new Bob(340);

	roofObject=new Roof(200,200,100,40);

	rope1=new Rope(bobObject1.body,roofObject.body,0,0);
	rope2=new Rope(bobObject2.body,roofObject.body,0,0)
	rope3=new Rope(bobObject3.body,roofObject.body,0,0)
	rope4=new Rope(bobObject4.body,roofObject.body,0,0);
	rope5=new Rope(bobObject5.body,roofObject.body,0,0)
  
}


function draw() {
  
  background(200);
  Engine.run(engine);

  rectMode(CENTER);

if(keyDown("left")){
 bobObject1.isStatic=false;
}
if(keyDown("right")){
	bobObject5.isStatic=false;
}
bobObject1.display();
bobObject2.display();
bobObject3.display();
bobObject4.display();
bobObject5.display();

rope1.display();
  
  drawSprites();
 
}



