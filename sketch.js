var bgImg;
var jerry, jerryImg;
var tom, tomImg;
var gameOverImg;
var retryImg, retry;
var powerup, powerupImg;
var obstacle, obstacleImg;

function preload(){
bgImg= loadImage("bg.jpg")
jerryImg= loadImage("jerry.png")
tomImg= loadImage("tom.png")
gameOverImg= loadImage('over.png')
retryImg= loadImage("retry.png")
powerupImg= loadImage("powerup.png")
obstacleImg= loadImage("obstacle.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  jerry= createSprite(1100,600,50,50)
  jerry.addImage('pl1',jerryImg)
  jerry.scale= 0.7

  tom= createSprite(400,600,50,50)
  tom.addImage("ply2", tomImg)
  tom.scale= 0.7
}

function draw() {
  background(bgImg);  
  drawSprites()

  if(bgImg.x<900){
    bgImg.x=bgImg.width/2
}
}