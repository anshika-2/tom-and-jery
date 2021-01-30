var gardenb,gardenim,cat,catsit,mouse,mousewalk,mousecoll;
var mouserun,catchase;


function preload() {
    //load the images here
gardenim=loadImage("images/garden.png");
catsit=loadAnimation("images/cat4.png");
mousewalk=loadAnimation("images/mouse1.png");
mousecoll=loadAnimation("images/mouse4.png")
mouserun=loadAnimation("images/mouse2.png","images/mouse3.png");
catchase=loadAnimation("images/cat1.png","images/cat2.png","images/cat3.png");


}

function setup(){
    createCanvas(1000,800);
    gardenb=createSprite(700,400,1000,800)
    gardenb.addImage(gardenim);
    gardenb.scale=2;

    //create tom and jerry sprites here
    cat=createSprite(800,400,30,30);
    cat.addAnimation("catwait",catsit);
    cat.scale=0.2;
    //tom sprite
    mouse=createSprite(50,400,30,30);
    mouse.addAnimation("mousewalki",mousewalk);
    mouse.scale=0.2;
    

}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

if(cat.x-mouse.x<(cat.width-mouse.width)/2){
    cat.velocityX=0
    cat.addAnimation("catsmile",catsit);
    cat.x=300;
    cat.changeAnimation("catsmile");
    cat.scale=0.3;
  
    //for mouse
    mouse.velocityX=0;
  mouse.addAnimation("mousesmile",mousecoll);
  mouse.changeAnimation("mousesmile");
    mouse.scale=0.7;

    drawSprites();

}

}
function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode===LEFT_ARROW){
     cat.velocityX=-4;
     cat.addAnimation("catrun",catchase)
     cat.changeAnimation("catrun");
     //mouse
     mouse.addAnimation("mousechase",mouserun)
     mouse.changeAnimation("mousechase");
 }
   



}
