const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world

var gameState = "onSling";


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(600,580,1200,20);
    stand = new Ground(875,420,350,20);

    //level 1
    block1 = new Box(740,350,80,80)
    block2 = new Box(830,350,80,80)
    block3 = new Box(920,350,80,80)
    block4 = new Box(1010,350,80,80)
    
    //level 2

    block5 = new Box(785,280,80,80);
    block6 = new Box(875,280,80,80);
    block7 = new Box(965,280,80,80);

    //level 3

    block8 = new Box(830,190,80,80);
    block9 = new Box(920,190,80,80);

    //level 4

    block10 = new Box(875,140,80,80);

    polygon = Bodies.circle(200,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(polygon,{x:200,y:200});

}
function draw(){
    Engine.update(engine);

    background("black");

    ground.display();
    stand.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();     
    block7.display();  
    block8.display();
    block9.display();
    block10.display();
    slingShot.display();
    ellipse(polygon.position.x, polygon.position.y, 40, 40);

   

}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(polygon, {x: mouseX , y: mouseY});
    }
}

function mouseReleased(){
    slingShot.fly();
    gameState = "launched";
}