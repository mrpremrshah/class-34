class Ball {
    constructor(x,y,w,h,angle) {
        var options = {
            density:1,
            frictionAir:0.005
        }

        this.w=w;
        this.h=h;
        this.body = Bodies.rectangle(x,y,w,h,options);
        World.add(world,this.body);
    

    }

    display() {
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipse(0,0,this.w,this.h)
        pop();
    }
}