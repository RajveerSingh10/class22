const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground,ball;
function setup() {
  createCanvas(800,400);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  var options={
    isStatic:true
  }
  ground=Bodies.rectangle(400,380,800,20,options);
  World.add(myWorld,ground);

  var options={
   restitution:0.5
  }
  ball=Bodies.circle(100,200,20,options);
  World.add(myWorld,ball);
  console.log(ball);

}

function draw() {
  background(0);  
  Engine.update(myEngine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}