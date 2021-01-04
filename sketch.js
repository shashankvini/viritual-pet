//Create variables here
var dog,happydog;
var database;
var foods,foodstock;
function preload()
{
  //load images here
img=loadImage("images/dogimg.png");
 dogImage=loadImage("images/dogimg1.png");
}

function setup() {
	createCanvas(500, 500);
  
dog=createSprite(250,250,50,50);
dog.addImage(img);
dog.scale=0.5;
database=firebase.database();
foodstock=database.ref('food');
foodstock.on("value",function(data){})

}

function draw() {  
background(46,139,87);
drawSprites();
  //add styles here
  if(keyWentDown(UP_ARROW)){
    writeStock(foods);
    dog.addImage(dogImage);
  }
}
function readstock(data){
  foods=data.val
}
function writeStock(x){
  if(x<=0){
x=0;
}else{
  x=x-1;
}
database.ref('/').update 
  food:x;
}





