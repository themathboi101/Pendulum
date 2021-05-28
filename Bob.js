class Bob{
	constructor(x)
	{
	
		this.x=x;
		
	var options={
		'restitution':0.3,
		'friction': 5,
		'density':1,
		isStatic:true,

	}
	this.y=500;
	this.r=100;	
	    
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("pink");
			
            
            ellipse(pos.x,pos.y,50);  
			pop(); 
	}
}
