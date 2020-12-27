var garden,washroom,bedroom;
var gardenImg,washroomImg,bedroomImg;
function preload(){
gardenImg=loadImage("Garden.png");
washroomImg=loadImage("Wash Room.png");
bedroomImg=loadImage("Bed Room.png");
}
function setup(){
    database=firebase.database();
    createCanvas(500, 500);
    garden=createSprite(250,300,150,150);
    garden=addImage("gardenImg");
    washroom=createSprite(150,200,150,150);
    washroom=addImage("washroomImg");
    bedroom=createSprite(100,200,150,150);
    bedroom=addImage("bedroomImg");
}
    
