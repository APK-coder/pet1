//Create variables here
var dogHappyImage,sittingImage;
var foodS,foodStock;

function preload()
{
dogHappyImage=loadImage("images/dogImg.png");
sittingImage=loadImage("images/dogImg1.png");

}

function setup() {
  database=firebase.database();
  createCanvas(500, 500);
  dog=createSprite(250,300,150,150);
  dog.addImage(dogHappyImage);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  textSize(20);
 
}
function draw() {  
  background(46,139,87);
 if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(sittingImage);
 }
 drawSprites();
 fill(255,255,254);
stroke("red");
text("Food remaining : "+foodS,170,200);
textSize(20);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
}
function readStock(data){
 foodS=data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
  Food:x
  })
}


