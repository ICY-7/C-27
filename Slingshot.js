class Slingshot {
    constructor(bodyA, bodyB) {
        var options = {
            bodyA : bodyA,
            bodyB : bodyB,
            stiffness: 2,
            length: 5
        }
        this.slingshot = Matter.Constraint.create(options);
        World.add(world, this.slingshot);
    }
    display(){
        var pointA = this.slingshot.bodyA.position;
        var pointB = this.slingshot.bodyB.position;

        strokeWeight(3);

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}