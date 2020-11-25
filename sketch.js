var bullet, wall ;
var speed, weight;
var thickness;

function setup() {
  createCanvas(1025,400);
  thickness = random(22,83)
  speed = random(223,321)
  weight = random(30,52)
  bullet = createSprite(100, 200, 20, 10);
  wall = createSprite(1025,200,thickness,height/2);
  wall.shapeColor = color(80,80,80)
  bullet.velocityX = map(speed,55,90,5,20);
  bullet.shapeColor = "white"
}
function hascollided(lbullet, lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x ;
  if (bulletRightEdge >= wallLeftEdge){
    return true
  }
  return false;
  }  
function draw() {
  background(0,0,0);  
  if (hascollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
    if (damage > 10){
      wall.shapeColor = color(255,0,0)
    }
    if (damage < 10){
      wall.shapeColor = color(0,255,0)
    }
  }
  drawSprites();
}