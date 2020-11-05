class Roof{
    constructor(x,y,width,height){
        this.body=Bodies.circle(x,y,width,height,(isStatic=true));
        this.width=width;
        this.height=height;
        World.add(world,this.body);
    }
    display(){
        push();
        ellipseMode(RADIUS);
        fill(128,128,128);
        ellipse (this.body.position.x,this.body.position.y,this.width,this.height);
        pop ();
    }
}