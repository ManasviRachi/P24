
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var paperObject,dustbinObj1,dustbinObj2,dustbinObj3, ground;
var world;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
  rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    paperObject = new Paper(200,450,40);
    dustbinObj1 = new Dustbin(1200,650);
    
    ground = new Ground(width/2,670,width,20);

    var render = Render.create({
      element: document.body,
      engine: engine,
      options: {
        width: 1200,
        height: 700,
        wireframes: false
      }
    }
    )
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperObject.display();
  dustbinObj1.display();
         
  ground.display();
 
  //drawSprites();
  //keyPressed();
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}



