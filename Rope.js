class Rope{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX=offsetX;
        this.offsetY=offsetY
        var options={
        bodyA:bodyA,
        bodyB:bodyB,
        pointB:{x:this.offsetX,y:this.offsetY},
        }
        this.chain= Matter.Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var Apos=this.chain.bodyA.position;
        var Bpos=this.chain.bodyB.position;

        strokeWeight(6);
        line(Apos.x,Apos.y,Bpos.x,Bpos.y);
    }
}
