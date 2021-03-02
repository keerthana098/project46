const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var background1, backgroundImage;
var player, playerImage
var ground;
var level1, level2, endLevel, levelsImage;
var portal, portalImage;
var rightEdge, leftEdge, topEdge;
var obstacle;

var engine, world;

function preload(){
backgroundImage = loadImage("newbackground.png");
playerImage = loadImage("green girl.png");
levelsImage = loadImage("floors.jpg");
portalImage = loadImage("portalImg.png");

}

function setup() {
  createCanvas(1400,920);

  engine = Engine.create();
  world = engine.world;

  // player = createSprite(100,800,50,50);
  // player.addImage(playerImage);
  // player.scale = 0.3;

  ground = new Ground(700,870,1400,50)

  level1 = new Ground(600,600,1200,30);

  level2 = new Ground(800,370,1200,30);

  endLevel = new Ground(150,190,300,30);

  portal = createSprite(150,100,50,50);
  portal.addImage(portalImage);
  portal.scale = 0.2;

  rightEdge = createSprite(1400,455,3,920);
  rightEdge.shapeColor = "red";

  leftEdge = createSprite(1,455,3,920);
  leftEdge.shapeColor = "red";

  topEdge = createSprite(700,1,1400,3);
  topEdge.shapeColor = "red";

  obstacle = new Obstacle(50,100,15,15);

  player = Bodies.circle(100,800,20,{restitution:1.0});
  World.add(world,player);
}

function draw() { 
  background(backgroundImage);
  Engine.update(engine);


  player.depth = portal.depth + 1;


  ground.display();
  level1.display();
  level2.display();
  endLevel.display();

  imageMode(CENTER);
  image(playerImage, player.position.x, player.position.y, 40,100);

  drawSprites();
  obstacle.display();


}
