class Sling {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 200
        }
        this.pointB = pointB;
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }
    attach(body) {
        this.sling.bodyA = body;
    }

    /*fly() {
        this.sling.bodyA = null;
    }*/

}