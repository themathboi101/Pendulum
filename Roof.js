class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY

        var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:this.offsetY},
        }

        this.roof= Matter.Constraint.create(options);
        World.add(world,this.roof);
    }

    display(){
        var firstPos=this.roof.bodyA.position;
        var secondPos=this.roof.bodyB.position;
        var thirdPos=pointB.x+this.offsetX;
        var fourthPos=pointB.y+this.offsetY;

        strokeWeight(5);
        line(firstPos,secondPos,thirdPos,fourthPos);

    }
}
