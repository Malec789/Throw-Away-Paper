
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var rec1, rec2, rec3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600, height, 1200, 20);
	paper = new Paper(300, 200, 20);
	 
	
	rec1 = createSprite(width/2, height-60, 20, 100);
	rec1.shapeColor = color("red");

	rec2 = createSprite(500, height-20, 210, 20);
	rec2.shapeColor = color("red");

	rec3 = createSprite(600, height-60, 20, 100);
	rec3.shapeColor = color("red")

	rec1 = Bodies.rectangle(300, 500, 20, 100);
	World.add(world, rec1);

	rec2 = Bodies.rectangle(300, 400, 20, 100);
	World.add(world, rec2);

	rec3 = Bodies.rectangle(300, 400, 20, 100);
	World.add(world, rec3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();

  drawSprites();	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: 20, y: -20});
	}
}



