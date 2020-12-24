//Create variables here
var dog, dog1,happyDog,happy1, database, foodS, foodStock;

function preload()
{
  dog1=loadImage("images/dogImg.png");
  happy1=loadImage("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(800, 800);
  dog=createSprite(200,200,50,50);
  dog.addImage(dog1)
  dog.scale=0.3;
  
  foodStock=database.ref('food')
  foodStock.on("value",readStock);
  textSize(20);
}


function draw() {  
background(46,139,87)
if(keyWentDown(UP_ARROW)){

  writeStock(foodS)
  dog.addImage(happy1)
}
  drawSprites();
  fill("black");
  textSize(30);
  text("food remaining: "+ foodS,100,100);
  text("prss up arrow key to feed milk",130,60)


}
function readStock(data){
foodS=data.val();
}
function writeStock(x){
if(x<=0){
  x=0;
}else{x=x-1}

  database.ref('/').update({
    food:x
  })
}


