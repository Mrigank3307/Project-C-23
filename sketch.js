const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;


function setup() {
  var canvas = createCanvas(600,600);
  engine = Engine.create();
  world = engine.world;

  tower1 = new Tower(500,450,40,700,0);
  tower2 = new Tower(120,450,40,700,0);
  tower3 = new Tower (300,590,400,20,0);
tower4 = new Tower (300,315,400,30,0);

flag11 = new Tower (450,103,100,1.75,0);
flag12 = new Tower (400,153,1.75,100,0);
flag13 = new Tower (450,200,100,1.75,0); 

flag21 = new Tower (190,103,100,1.75,0);
flag22 = new Tower (240,153,1.75,100,0);
flag23 = new Tower (190,200,100,1.75,0); 

}

function draw() {
  background ("black")
  Engine.update(engine)

 tower1.display();
 tower2.display();
 tower3.display();
 tower4.display();

 flag11.display();
 flag12.display();
 flag13.display();

 flag21.display();
 flag22.display();
 flag23.display();
}