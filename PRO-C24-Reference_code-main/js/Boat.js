class Boat{
    constructor(x,y,width,height,boatpos){
  var options={
      restition: 0.8,
      friction: 1,
      density:1.0
  }
   this.body = Bodies.rectangle(x,y,width,height,options)
   this.width = width
   this.height = height
   this.image = loadImage("assets/boat.png")
   this.boatpos = boatpos
   World.add(world,this.body)
    }
  display(){
      var pos= this.body.position
      push()
      translate(pos.x,pos.y)
      imageMode(CENTER)
      image(this.image,0,this.boatpos,this.width,this.height)
      pop()
   }

}