var thickness,wall;
var speed,weight,bullet;
function setup() {
  createCanvas(1600,400);
  speed = random(223,321);
  weight = random(30,52);
  bullet = createSprite(50,200,50,25);
  bullet.shapeColor = color(255,255,255);
  wall = createSprite(1500,200,thickness,200);
  wall.shapeColor = color(80,80,80);
  bullet.velocityX = speed;
  thickness = random(22,83);
}

function draw() {
  background(0,0,0); 
  if(wall.x - bullet.x < (bullet.width + wall.width/2)){
    bullet.velocityX = 0; 
    
    var damage = 0.5 * weight * speed * speed / thickness * thickness * thickness;
    
    if(deformation > 180){
    bullet.shapeColor = color(255,0,0);
  }
  
  if(deformation < 180 && deformation > 100){
    bullet.shapeColor = color(230,230,0);
  }
  
  if(deformation < 100){
    bullet.shapeColor = color(0,255,0);
  }
  } 
 
  
  drawSprites();
}