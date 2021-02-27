var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight=300;
var score =0;
var particle;
var turn = 0;

var gamestate = "play";

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Division (k, height-divisionHeight/2, 10, divisionHeight));
   }
  

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50)    
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  text("Score : "+score,700,30);
  textSize(10)
  
  text("50",30,550);
  text("50",753,550);
  text("100",115,550);
  text("100",668,550);
  text("250",190,550);
  text("250",593,550);
  text("500",513,550);
  text("500",275,550);
  text("1000",433,550);
  text("1000",352,550);
  
  Engine.update(engine);
 
  if (particle!= null){
    particle.display();
  if (particle.Matter.body.position.x < 80 && particle.Matter.body.position.y > 545){
 score = score + 50;
 particle = null;
 if (turn>= 5){
   gamestate = "end";
 }
  }
  if (particle.Matter.body.position.x > 81 && particle.Matter.body.position.x < 160 && particle.Matter.body.position.y > 545){
score = score+ 100;
particle = null;
if (turn>= 5){
  gamestate = "end";
}
  }
  if (particle.Matter.body.position.x > 161 && particle.Matter.body.position.x < 240 && particle.Matter.body.position.y > 545){
    score = score + 250;
    particle = null;
    if (turn>= 5){
      gamestate = "end";
    }
  }
  if (particle.Matter.body.position.x > 241 && particle.Matter.body.position.x < 320 && particle.Matter.body.position.y > 545){
    score = score + 500;
    particle = null;
    if (turn>= 5){
      gamestate = "end";
    }
  }
  if (particle.Matter.body.position.x > 321 && particle.Matter.body.position.x < 400 && particle.Matter.body.position.y > 545){
    score = score + 1000;
    particle = null;
    if (turn>= 5){
      gamestate = "end";
    }
  }
  if (particle.Matter.body.position.x > 401 && particle.Matter.body.position.x < 480 && particle.Matter.body.position.y > 545){
    score = score + 500
  };
  particle = null;
  if (turn>= 5){
    gamestate = "end";
  }
  if (particle.Matter.body.position.x > 481 && particle.Matter.body.position.x < 560 && particle.Matter.body.position.y > 545){
    score = score + 250;
    particle = null;
    if (turn>= 5){
      gamestate = "end";
    }
  }
  if (particle.Matter.body.position.x > 561 && particle.Matter.body.position.x < 640 && particle.Matter.body.position.y > 545){
    score = score + 100;
    particle = null;
    if (turn>= 5){
      gamestate = "end";
    }
  }

if (particle.Matter.body.position.x > 641 && particle.Matter.body.position.x < 720 && particle.Matter.body.position.y > 545){
  score = score + 50;
  particle = null;
  if (turn>= 5){
    gamestate = "end";
  }
  if (particle.Matter.body.position.x > 721 && particle.Matter.body.position.x < 800 && particle.Matter.body.position.y > 545){
    score = score + 50;
    particle = null;
    if (turn>= 5){
      gamestate = "end";
    }
}
  }
}


   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   mouseClicked();
}

function mouseClicked(){
  if (gamestate !== "end"){
    turn = turn+ 1;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}