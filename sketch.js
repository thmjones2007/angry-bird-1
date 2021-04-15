const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var option={
    isStatic:true
  }

  ground = Bodies.rectangle(200,400,450,50,option);
  World.add(world,ground);

var bounce={
  restitution:1.0
}

  ball = Bodies.circle(200,200,10,bounce);
  World.add(world,ball);

  //createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,0);  
   Engine.update(engine);
 rectMode(CENTER); 
  rect(ground.position.x,ground.position.y,450,50);
 
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);

}