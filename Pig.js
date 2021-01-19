class Pig{
    constructor(x,y){
        var options = {restitution:0.5, friction:1, density:1.5}
        this.body = Bodies.rectangle(x,y,50,50, options);
        this.width = 50;
        this.height = 50;
        World.add(world,this.body)
    }

    display(){
        var b = this.body.position;
        var a = this.body.angle
        push()
        translate(b.x, b.y)
        rotate(a);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("white");
        fill("green");
        rect(0, 0, this.width, this.height);
        pop();
    }
}