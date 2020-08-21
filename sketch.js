const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paperObject , dustbin , dustbin2 , dustbin3 , ground;

function preload()
{
 	
}

function setup() {
	createCanvas(900, 500);

    engine = Engine.create();
	world = engine.world;

	ground=createSprite(width/2, height-35, width,10);
	//ground=createSprite(900,450,15,400);
    ground.shapeColor=color(255)
	//Create a Ground
	ground = Bodies.rectangle(width/2, 450, width, 10 , {isStatic:true} );
 	World.add(world, ground);



	paperObject = new Paper(100,100,50);
	paperObject.shapeColor=color("purple");

	dustbin = createSprite(800,450,100,15);
    dustbin.shapeColor=color("white");

	dustbin2 = createSprite(750,400,15,100);
	dustbin2.shapeColor=color("white");
	
	dustbin3 = createSprite(850,400,15,100);
	dustbin3.shapeColor=color("white");
	//Create the Bodies Here.
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperObject.display();
  dustbin.display();
  dustbin2.display();
  dustbin3.display();
  //ground.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})
	}
}

//Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85})

