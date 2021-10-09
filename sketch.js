
var naruto,naruto_standing,naruto_running;
var thief1,thief2,thief3; heart1,heart2,heart3,heart4,heart5,heart6,heart7,heart8,heart9;
var th1=0;

function preload(){
  naruto_standing=loadAnimation("tile000.png","tile001.png","tile002.png");
  naruto_running=loadAnimation("run1.png","run2.png")
}
function setup() {
  createCanvas(1200,600);
  
  naruto=createSprite(200,100,40,40)
  naruto.addAnimation("standing",naruto_standing);
  naruto.addAnimation("running",naruto_running)
  naruto.scale=0.8
  thief1=createSprite(1000,100,40,40)
  thief2=createSprite(1000,300,40,40) 
  thief3=createSprite(1000,500,40,40) 

  heart1=createSprite(thief1.x,thief1.y+50,10,10)
  heart2=createSprite(thief1.x+20,thief1.y+50,10,10)
  heart3=createSprite(thief1.x+40,thief1.y+50,10,10)
  
  heart4=createSprite(thief2.x,thief2.y+50,10,10)
  heart5=createSprite(thief2.x+20,thief2.y+50,10,10)
  heart6=createSprite(thief2.x+40,thief2.y+50,10,10)
  heart7=createSprite(thief3.x,thief3.y+50,10,10)
  heart8=createSprite(thief3.x+20,thief3.y+50,10,10)
  heart9=createSprite(thief3.x+40,thief3.y+50,10,10)

}

function draw() {
  background(255,255,255);  



  if(keyDown("RIGHT_ARROW")){
    naruto.changeAnimation("running",naruto_running)
    naruto.x=naruto.x+3;
  }
  if(keyDown("LEFT_ARROW")){
    naruto.changeAnimation("running",naruto_running)
    naruto.x=naruto.x-3;
  }
  

  if(naruto.isTouching(thief1)){
    th1=th1+1
    if(th1==1){
heart1.visible=false

    }
if(th1==2){
  heart2.visible=false;
}
if(th1==3){
  heart3.visible=false;
  thief1.destroy()
}
}
  drawSprites();
}