class Bob{
	constructor(x,y,r)
	{
	// assign options to the paper thingy
		this.x=x;
		this.y=y;
		this.width=50;
        this.height=50;
	var options={
		'restitution':0.3,
		'friction': 5,
		'density':1,

	}
		this.body=Bodies.rectangle(this.x, this.y, 50,50, options)
		World.add(world, this.body);

	}
	display()
	{
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("grey");
			//draw the ellipse here to display the rubber ball
            rect(0,0,this.width,this.height);   class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
			pop()
	}

}