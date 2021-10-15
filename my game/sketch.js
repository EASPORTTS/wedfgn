var canvas, backgroundImage;

var amungusred,amungusredI
var clrearhenry
var hank
var impostor
var monsterhank
var damage1=1000
var damage2=1000
var damage3=1000
var neatsteve



function preload(){
 backgroundImage=loadImage("OIP.jpg")
  amungusredI=loadImage("amungusred.png")
 neatsteveI=loadImage("neatsteve.png")
 monsterhankI=loadImage("monsterhank.png")
 
 clrearhenrI=loadImage("clrearhenry.png")
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-200);
  amungusred=createSprite(100,750,20,30)
  amungusred.addImage(amungusredI)
  monsterhank=createSprite(900,750,90,30)
  monsterhank.addImage(monsterhankI)
  monsterhank.scale=2
  neatsteve=createSprite(600,750,90,30)
  neatsteve.addImage(neatsteveI)
  
}


function draw(){
  background(backgroundImage)
  textSize(20)
  text("Damage "+damage1,200,200,)
  textSize(20)
  text("Damage "+damage2,600,200,)
  textSize(20)
  text("Damage "+damage2,900,200,)
  if (keyDown("w")){
    amungusred.y-=5
  }
  
  if (keyDown("s")){
    amungusred.y+=5
  } 
  if (keyDown("d")){
    amungusred.x+=5
  } 
  if (keyDown("a")){
    amungusred.x-=5
  } 

  if(keyDown(DOWN_ARROW))
  neatsteve.y+=5
  if(keyDown(UP_ARROW))
  neatsteve.y-=5
  if(keyDown(RIGHT_ARROW))
  neatsteve.x+=5
  if(keyDown(LEFT_ARROW))
  neatsteve.x-=5
  if (keyDown("i")){
    monsterhank.y-=5
  }
  if (keyDown("k")){
    monsterhank.y+=5
  }
  if (keyDown("j")){
    monsterhank.x-=5
  }
  if (keyDown("l")){
    monsterhank.x+=5
  }
  if(neatsteve.isTouching(amungusred)){
    damage1-=10
  }
  if(amungusred.isTouching(neatsteve)){
    damage2-=10
  }
  if(neatsteve.isTouching(monsterhank)){
  damage3-=10
  }
  drawSprites()
  
   
  }

