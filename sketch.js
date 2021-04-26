var balloon,balloonImage1,balloonImage2;


function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png");
   balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   "hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   "hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }


function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("hotAirBalloon",balloonImage1);
  balloon.scale=0.5;

  textSize(20); 
}


function draw() {
  background(bg);

  balloon.x = mouseX;
 // balloon.y = mouseY;

  if(keyDown(LEFT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
  }

  else if(keyDown(UP_ARROW)){
   // ubdateHeight(0,-10);
    balloon.addAnimation("hotAirBalloon",balloonImage2);
    
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.addAnimation("hotAirBalloon",balloonImage2);
   
  }

  

  drawSprites();
  fill(0);
  stroke("black");
  textSize(25);
  text("Use mouse to move Hot Air Balloon!",40,40);
}
function ubdateHeight(x,y){
  database.ref("balloon/position").set({
    'x': height.x + x ,
    'y': height.y +y

  })
}
function readHeight(data){
  height = data.val();
  balloon.x = height.x;
  balloon.y = height.y;
}
