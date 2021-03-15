var balloon,database;
var position;
function preload () {


}

function setup() {
  database = firebase.database();
  createCanvas(500,500);
  

  balloon= createSprite (250,450);
  var balloonPosition= database.ref('balloon/position');
  balloonPosition.on("value",readPosition,showError);
}

function draw() {
  background("white");
  
createEdgeSprites();

if (keyDown(LEFT_ARROW)){
balloon.x=balloon.x-10
}

if (keyDown(RIGHT_ARROW)){
balloon.x=balloon.x+10
}

if (keyDown(UP_ARROW)){
balloon.y=balloon.y-10
}

if (keyDown(DOWN_ARROW)){
balloon.y=balloon.y+10
}



  drawSprites();
}

function updateHeight (x,y){
database.ref('balloon/height').set({

'x': height.x + x,
'y':height.y + y 

})


}

function readPosition(data){
  position = data.val();
  console.log(position.x);
  balloon.x = position.x;
 ballonl.y = position.y;
}

function showError(){
  console.log("Error in writing to the database");
}