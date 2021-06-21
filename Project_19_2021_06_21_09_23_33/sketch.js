var Background1, BackgroundImage; 
var ninjar, ninjarun; 
var Bricks1, Bricks; 
var obstacle, obstacles; 
var points, stars; 
var ninjastars; 
var obstacleGroup; 
var starGroup; 
var PLAY=1; 
var END=0; 
var gameState=1; 

function preload() { 
  
BackgroundImage=loadImage("Background.png"); 

ninjarun=loadImage("ninja running.gif"); 
  
Bricks1=loadImage("bricks.jpg"); 
  
points=loadImage("stars.jpg"); 
}

function setup() { 
  createCanvas(1000,700); 
  Background1=createSprite(0,0,600,20); 
  Background1.addImage(BackgroundImage); 
  Background1.scale=4; 
  Background1.velocityX=-20; 
  
  ninjar=createSprite(100,500,10,10); 
  ninjar.addImage(ninjarun); 
  
   SurvivalTime=0; 
  
   invisibleGround = createSprite(400,650,900,20); 
   invisibleGround.visible=false;             
  
  obstacleGroup= new Group(); 
  starGroup=new Group(); 
  
}

function draw() {
drawSprites(); 
  
  textSize(40)
   text("SurvivalTime: "+SurvivalTime,400,70); 
  
  if(gameState===PLAY){ 
   if (Background1.x < 0){
      Background1.x = Background1.width/2;
    } 
  
  if(keyDown("space")&& ninjar.y>=400){ 
  ninjar.velocityY=-27;  
  } 
  
  if(ninjar.isTouching(obstacleGroup)){ 
 gameState=END;  
  } 
    if(ninjar.isTouching(starGroup)){ 
   SurvivalTime=SurvivalTime+2; 
   starGroup.destroyEach(); 
  }  
     ninjar.velocityY = ninjar.velocityY + 0.8; 
     obstacles(); 
  ninjastars(); 
  }
  
  if(gameState===END){ 
  ninjar.destroy(); 
  obstacleGroup.destroyEach(); 
  starGroup.destroyEach(); 
  textSize(100); 
  text("GAME OVER",200,400);
  Background1.velocityX=0; 
  
  }
 
  ninjar.collide(invisibleGround); 
  
} 

 function obstacles(){  
 if(frameCount%90===0){ 
 Bricks=createSprite(800,510,10,10); 
 Bricks.addImage(Bricks1); 
 Bricks.scale=0.3; 
 Bricks.velocityX=-20; 
 Bricks.lifetime=400; 
 obstacleGroup.add(Bricks); 
 } 
 }

 function ninjastars(){ 
 if(frameCount%90===0){    
 stars=createSprite(800,200,10,10); 
 stars.addImage(points); 
 stars.scale=0.1; 
 stars.velocityX=-20; 
 stars.lifetime=400; 
 starGroup.add(stars); 
 }
 }
