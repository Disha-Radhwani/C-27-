class Chain{

constructor(bodyA,bodyB){

    var options = {

        length : 3,
        stiffness :  0.3,
        bodyA : bodyA,
    
        bodyB : bodyB


    }
 this.chain = Matter.Constraint.create(options) 
World.add(world,this.chain);


}

display(){


    line(this.chain.bodyA.position.x,
        this.chain.bodyA.position.y,
        this.chain.bodyB.position.x,
       this.chain.bodyB.position.y);

}



}