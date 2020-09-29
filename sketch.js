var FR,MR;

function setup() {
  createCanvas(800,400);
 FR=createSprite(200, 200, 50, 80);
 MR=createSprite(400,200,80,30);
 FR.shapeColor="yellow";
 MR.shapeColor="yellow";
}

function draw() {
  background("black");
  console.log(MR.x-FR.x);  
  MR.x=mouseX;
  MR.y=mouseY;
  //if MR is touching FR, change colour to red
  if(MR.x-FR.x<FR.width/2+MR.width/2  && FR.x-MR.x<FR.width/2+MR.width/2  && FR.y-MR.y<FR.height/2+MR.height/2 && MR.y-FR.y<FR.height/2+MR.height/2){
FR.shapeColor="red";
MR.shapeColor="red";


 }
 else{
   FR.shapeColor="yellow";
   MR.shapeColor="yellow";
 }
  drawSprites();
}