
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, chao, direita, esquerda;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ball = Bodies.circle(260,100,20);
	World.add(world,ball);

	chao = new Parede(800,670,1600,20);
	direita = new Parede(1100,600,20,120);
	esquerda = new Parede(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  ellipse(ball.position.x, ball.position.y, 20);

  chao.exibir();
  direita.exibir();
  esquerda.exibir();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:0.07, y:-0.07});
	}
}



