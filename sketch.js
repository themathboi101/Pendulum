

var rope1,rope2,rope3,rope4,rope5;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roofObject;
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

	roofObject=new Roof(200,300,100,40);
	roof2=new Roof(300,400,400,40);
	//Creating the Bodies Here
	bobObject1=new Bob(50);
	bobObject2=new Bob(125);
    bobObject3=new Bob(200);
	bobObject4=new Bob(275);
	bobObject5=new Bob(340);

	

	rope1=new Rope(bobObject1.body,roofObject.body,0,0);
	rope2=new Rope(bobObject2.body,roofObject.body,0,0)
	rope3=new Rope(bobObject3.body,roofObject.body,0,0);
	rope4=new Rope(bobObject4.body,roofObject.body,0,0);
	rope5=new Rope(bobObject5.body,roofObject.body,0,0);

}


function draw() {
  
  background(200);
  Engine.run(engine);

  rectMode(CENTER);

  roofObject.display();
  

	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	
	//rope1.display();

	
	drawSprites();
 
}
function keyPressed(){
	if(keyCode===37){
		bobObject1.isStatic=false;
		}
		
		if(keyCode===39){
			bobObject5.isStatic=false;
		}
	
}



