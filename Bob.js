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
		this.r=50;	
	    
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
		

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x, pos.y);
			
			strokeWeight(4);
			stroke("black");
			fill("pink");
			
            ellipseMode(CENTER);
            ellipse(0,0,50,50);  
			pop(); 
	}
}
