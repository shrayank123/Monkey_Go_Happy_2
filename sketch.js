
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime;



function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  //making monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);  
  monkey.scale=0.1
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4  
  ground.x = ground.width/2;
  console.log(ground.x)
  
  bananaGroup=createGroup();
  obstacleGroup=createGroup();
  score=0;
}


function draw() {
  background(225);
  text("Score: "+ score, 290,50);
  
  if(bananaGroup.isTouching(monkey)){
    bananaGroup.destroyEach();
    score=score+2
  }
  
  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX = 0; 
    monkey.velocityY = 0; 
    
     obstacleGroup.setVelocityXEach(0); 
  bananaGroup.setVelocityXEach(0); 
    
  obstacleGroup.setLifetimeEach(-1); 
    bananaGroup.setLifetimeEach(-1); 
    
  
  }


  
  stroke("black")
  textSize(20);
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x = ground.width/2;
  }
  
  if(keyDown("space")){
    monkey.velocityY=-12 
  }
  monkey.velocityY= monkey.velocityY+0.8;
  monkey.collide(ground)
  
  banana();
  obstacle();
 
  drawSprites();
}


function banana(){
  if(World.frameCount%80===0)
  {
    var banana=createSprite(400,200,20,20)
    banana.addImage("banana",bananaImage)
    banana.scale=0.1
      
    banana.y=Math.round(random(50,340))
    banana.velocityX=-7
    bananaGroup.add(banana)
    
  }
  
}

function obstacle(){
  if(World.frameCount%80===0)
  {
  var obstacle=createSprite(200,327,20,20)
    obstacle.addImage("rock",obstacleImage)
    obstacle.scale=0.1
      
    obstacle.x=Math.round(random(170,340))
    obstacle.velocityX=-7
    obstacleGroup.add(obstacle) 
  }
  
  
}



