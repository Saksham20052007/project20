var car, wall;
var speed, wieght;

function setup() {
  createCanvas(800,400);
  weight = random(400, 1500);
  speed = random(20, 90); 
car = createSprite(50, 200, 50, 380 );
wall = createSprite(600, 200, 60,200 )
}

function draw() {
  background(0);

  if(keyDown("space")){
    car.velocityX = speed;
  }
  
  if(car.x-wall.x>car.width/2+wall.width/2){
    car.velocityX = 0;
    var deformation = 0.5*wieght*speed*speed/22500
    if(deformation>80){
       car.shapeColor = "green";
    }else if(deformation>80 && deformation<180){
      car.shapeColor = "red";
    }else{
      car.shapeColor = "yellow";
    }
  }

  drawSprites();
}