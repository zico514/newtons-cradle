
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
b1=new Bob(200,100)
c1 = new Chain(b1.body,{x:200, y:50});

b2=new Bob(250,100)
c2 = new Chain(b2.body,{x:250, y:50});

b3=new Bob(300,100)
c3 = new Chain(b3.body,{x:300, y:50});

b4=new Bob(350,100)
c4 = new Chain(b4.body,{x:350, y:50});

b5=new Bob(400,100)
c5 = new Chain(b5.body,{x:400, y:50});
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(120);
  b1.display();
  c1.display();

  b2.display();
  c2.display();

  b3.display();
  c3.display();

  b4.display();
  c4.display();

  b5.display();
  c5.display();
start();
  drawSprites();
 
}



function start(){
	if(keyDown (UP_ARROW)){
     Matter.Body.applyForce(b1.body,b1.body.position,{x:-45,y:-55});

	}
}