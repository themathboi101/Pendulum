class Roof{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        
        this.roof= Bodies.rectangle(x,y,width,height);
        World.add(world,this.roof);
    }

    display(){
       rectMode(CENTER);
        rect(x,y,width,height);
    }
}
