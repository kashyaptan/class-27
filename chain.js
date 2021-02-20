class chain {
    constructor(a, b){

        var options ={
            bodyA: a,
            bodyB: b,
            length: 10,
            stiffness: 0.1,
        }
        this.chain = Matter.Constraint.create(options)
        World.add(world, this.chain)
    }
    
    display(){
        var bodya = this.chain.bodyA.position
        var bodyb = this.chain.bodyB.position

        line(bodya.x, bodya.y, bodyb.x, bodyb.y)
    }
}
