class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png"); // loading the image
    this.visibility = 255; // visibility of the pig
  }

  display(){
    console.log(this.body.speed); // display the speed of the pigs in  console
    if(this.body.speed<3){ // checking the speed of the pig
      super.display(); // the pigs remain the same
    }
    else{

      World .remove(world,this.body); // the pigs disappear
      push ();
      this.visibility = this.visibility- 5; // decreasing the visibility
      tint (255,this.visibility); // visibility of pig after the tint function
      image (this.image,this.body.position.x,this.body.position.y,50,50); // displaying the image
      pop ();
    }
  }

};