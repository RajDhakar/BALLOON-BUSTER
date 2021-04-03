var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bow , arrow,  scene;

var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score=0;

function preload(){
  
  backgroundImage = loadImage("background0.png");
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  //creating background
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5
  
  // creating bow to shoot arrow
  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
  
  
  redBalloonGroup = new Group();
  blueBalloonGroup = new Group();
  greenBalloonGroup = new Group();
  pinkBalloonGroup = new Group();
  
  score = 0    

  
}

function draw() {
  background(0);
   
     

  if(gameState === PLAY){
    
    
    
    scene.velocityX = -3
    
    if (scene.x < 0){
      scene.x = scene.width/2;
    }
    
    bow.y = World.mouseY
    
    
    
    var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    if (select_balloon == 1) {
      redBalloon();
    } else if (select_balloon == 2) {
      greenBalloon();
    } else if (select_balloon == 3) {
      blueBalloon();
    } else {
      pinkBalloon();
    }
  } 
    
  if (keyDown("space")){
    
    createArrow();
  }
    
  if (keyDown ("space")){
    
    arrow.velocityX = -6;
  }
    
  if(redBalloonGroup.isTouching(arrow)){
  
    redBalloonGroup.destroyEach();
    score=score+4
  }
    
  if(greenBalloonGroup.isTouching(arrow)){
  
    greenBalloonGroup.destroyEach();
    score=score+3
  }  
    
  if(blueBalloonGroup.isTouching(arrow)){
  
    blueBalloonGroup.destroyEach();
    score=score+2
  }  
    
  if(pinkBalloonGroup.isTouching(arrow)){
  
    pinkBalloonGroup.destroyEach();
    score=score+1
  } 
    
  
    
    
}
  else if(gameState === END){
    
  
  }
   
   
  
  
  drawSprites(); 
  text("Score: "+ score, 300,50);
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redBalloonGroup.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueBalloonGroup.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenBalloonGroup.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1;
  pinkBalloonGroup.add(pink);
}

function createArrow(){
  
  arrow = createSprite(345,220,50,10);
  arrow.addImage(arrowImage);
  arrow.scale = 0.3;
  arrow.lifetime = 50;
  arrow.y = World.mouseY
  
}