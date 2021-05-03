var balloon,balloonImg;
var database;
var background,backgroundImg;

function preload() {
  balloonImg = loadImage("balloon01.png");
  backgroundImg = loadImage("background.png");
  
  var balloonPosition = database.ref('balloon/height');
  balloonPosition.on("value",readPosition,showError);

}

function setup() {
  createCanvas(800,400);

  balloon = createSprite(250,100,20,20);
  balloon.addImage(balloonImg,"Balloon");
  balloon.scale = 0.3;
  
}

function draw() {
  background(backgroundImg,"Background"); 

  fill("blue");
  text("Use Arrow Keys to move the Balloon!",10,30);

  if(keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
    }
else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
}
else if(keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
    balloon.scale = 0.35;
}
else if(keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
    balloon.scale = 0.25;
  }

  drawSprites();
}

function updateHeight(x,y){
  database.ref('balloon/position').set({
    'x' : position.x + x,
    'y' : position.y + y,
})  
}

function readHeight(data) {
  height= data.val();

  ball.x = position.x;
  ball.y = position.y;

}

function showError() {
  console.log("Error in writing to Database");
}

if(keyDown(UP_ARROW)){
  updateHeight(0,-10);
  balloon.addAnimation("balloon",balloonImage2);
  balloon.scale = balloon.scale - 0.01
}