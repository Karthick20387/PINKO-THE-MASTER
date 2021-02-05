var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions=[]
var turns=10;
var gamestate="SERVE"
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
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

  if(gamestate=="PLAY"){

  background("black");
  textSize(20)
  text("Score : "+score,20,30);
  text(" Turns left : "+turns,600,30);
  text("500",25,500);
  text("1000",97,500);
  text("200",180,500);
  text("100",265,500);
  text("900",345,500);
  text("1000",420,500);
  text("300",500,500);
  text("700",577,500);
  text("1500",655,500);
  text("0",755,500);
  Engine.update(engine);
  
  
  for(var j = 0; j < particles.length; j++){
    particles[j].display(); 

    if(particles[j].body.position.x > 0 && particles[j].body.position.x < 80 && particles[j].body.position.y > 760){
      score = score + 500;
      turns = turns -1
      particles.pop();
    }

  }
  
  for(var j = 0; j < particles.length; j++){
    particles[j].display(); 
  
    if(particles[j].body.position.x > 80 && particles[j].body.position.x < 160 && particles[j].body.position.y > 760){
    score = score + 1000;
    turns = turns -1
    particles.pop();
  }
}

for(var j = 0; j < particles.length; j++){
  particles[j].display(); 

  if(particles[j].body.position.x > 160 && particles[j].body.position.x < 240 && particles[j].body.position.y > 760){
  score = score + 200;
  turns = turns -1
  particles.pop();
}
}

for(var j = 0; j < particles.length; j++){
  particles[j].display(); 

  if(particles[j].body.position.x > 240 && particles[j].body.position.x < 320 && particles[j].body.position.y > 760){
  score = score + 100;
  turns = turns -1
  particles.pop();
 }
}

for(var j = 0; j < particles.length; j++){
  particles[j].display(); 

  if(particles[j].body.position.x > 320 && particles[j].body.position.x < 400 && particles[j].body.position.y > 760){
  score = score + 900;
  turns = turns -1
  particles.pop();
 }
}

for(var j = 0; j < particles.length; j++){
  particles[j].display(); 

  if(particles[j].body.position.x > 400 && particles[j].body.position.x < 480 && particles[j].body.position.y > 760){
  score = score + 1000;
  turns = turns -1
  particles.pop();
 }
}

for(var j = 0; j < particles.length; j++){
  particles[j].display(); 

  if(particles[j].body.position.x > 480 && particles[j].body.position.x < 560 && particles[j].body.position.y > 760){
  score = score + 300;
  turns = turns -1
  particles.pop();
 }
}

for(var j = 0; j < particles.length; j++){
  particles[j].display(); 

  if(particles[j].body.position.x > 560 && particles[j].body.position.x < 640 && particles[j].body.position.y > 760){
  score = score + 700;
  turns = turns -1
  particles.pop();
 }
}

for(var j = 0; j < particles.length; j++){
  particles[j].display(); 

  if(particles[j].body.position.x > 640 && particles[j].body.position.x < 720 && particles[j].body.position.y > 760){
  score = score + 1500;
  turns = turns -1
  particles.pop();
 }
}

for(var j = 0; j < particles.length; j++){
  particles[j].display(); 

  if(particles[j].body.position.x > 720 && particles[j].body.position.x < 800 && particles[j].body.position.y > 760){
  score = score + 0;
  turns = turns -1
  particles.pop();
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
}

if(turns === 0){
  gamestate = "END";
}

if(gamestate === "END"){
  background("red");
  textSize(45);
  fill("black");
  text("GAME OVER", 220, 300);
  text("Score : " + score, 220, 370);
  text("Press SPACE KEY to restart the game", 25, 450);
}

if(keyCode==32 && gamestate=="END"){
   reset()
}

if(gamestate=="SERVE"){
  background("green");
  textSize(24);
  fill("blue");
  text("PLINKO THE MASTER", 250, 300);
  text("THIS GAME HAS NO RULES BUT TRY TO REACH THE SCORE 10000" + score, 0, 370);
  text("ALL THE BEST ", 280, 450);
  text(" PRESS 'S' TO START ", 250, 540);
}

if(keyCode==83 && gamestate=="SERVE"){
  reset()
}

}

function keyPressed(){
  if(keyCode==40){
    particles.push(new Particle(random(0,800), 10,10));
    ;
  }
}

function reset(){
  gamestate = "PLAY";
  turns = 10;
  score = 0;
}