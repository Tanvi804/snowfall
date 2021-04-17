const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var backgroundImg;

var bg ;

var snowflake=[];


function preload() {
  bg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1000, 700);

  engine = Engine.create();
  world = engine.world;

  for(var j=15; j <=width-10; j=j+50){
    snowflake.push(new Snowflake(j,175));
  }

  //createSprite(400, 200, 50, 50);
}

function draw() {
 background(bg);
 // background("black")

  Engine.update(engine);

  if(frameCount%10===0){
    snowflake.push(new Snowflake(random(width/2-400, width/2+400),10,10));
  }

  for(var k=0; k<snowflake.length; k++){
    snowflake[k].display();
  }


  drawSprites();
}