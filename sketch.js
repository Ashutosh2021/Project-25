
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperObject;
var dustbinimg;
var db;

function preload(){

	dustbinimg=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(100,200,20);
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	db=createSprite(1200,525,40,30);
	db.addImage(dustbinimg);
	db.scale=0.9;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  paperObject.display();

	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:3,y:-4}); 
	}

 drawSprites();
}

