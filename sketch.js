
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;


function setup() {
	createCanvas(900, 500);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new Ground(width/2,490,width,20);
	dustbinObj=new dustbin(650,450);
	paper = new Paper(200,450,70);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
  
  groundObject.display();
  dustbinObj.display();
  paper.display();
  
}


function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:75,y:-145});
	}
}