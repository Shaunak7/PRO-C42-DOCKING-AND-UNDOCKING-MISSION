var iss,issImage; 
var spacecraft,spacecraftImage1, spacecraft2,spacecraft3, spacecraft4;
var hasDocked;
var bg;

function preload() {
  issImage = loadImage("images/iss.png");
  spacecraftImage1 = loadImage("images/spacecraft1.png");
  spacecraft2 = loadImage("images/spacecraft2.png");
  spacecraft3 = loadImage("images/spacecraft3.png");
  spacecraft4 = loadImage("images/spacecraft4.png");
  bg = loadImage("images/spacebg.jpg");
}

function setup() {
 canvas = createCanvas(800,400);
  hasDocked = false;
  iss = createSprite(500,100);
  iss.addImage(issImage);
  iss.scale = 0.5;
  spacecraft = createSprite(500,300);
  spacecraft.addImage(spacecraftImage1);
  spacecraft.scale = 0.2;
}

function draw() {
  background(bg);
  if(!hasDocked) {
    spacecraft.x += random(1,-1);
    if(keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y -2;
    }
      
    if(keyDown("LEFT_ARROW")){
        spacecraft.addImage(spacecraft3);
      spacecraft.x = spacecraft.x - 1;
    }
      
    if(keyDown("RIGHT_ARROW")){
        spacecraft.addImage(spacecraft4);
      spacecraft.x = spacecraft.x + 1;
    }
      
    if(keyDown("DOWN_ARROW")){
        spacecraft.addImage(spacecraft2);
    }
  }
  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(50);
    fill("lightblue")
    text("Docking Successful!", 200, 300);
  }
  drawSprites();
}