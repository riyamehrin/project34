const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;

var engine, world;
var drops = [];
var rand;

var maxDrops=100;
var bg 

function preload(){
 bg=loadImage("house.jpg");

   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(windowWidth,windowHeight);
   // umbrella = new House(200,450);
    /*
    mans = createSprite(200,500,150,150);

    mans.addAnimation("walking",man);
    mans.scale =0.5;
    */
    //creating drops
    if(frameCount % 150 === 0){

        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,width), random(0,height)));
        }

    }
    
}

function draw(){
    Engine.update(engine);
    background(bg); 

    //creating thunder
    rand = Math.round(random(1,4));
   

    //umbrella.display();

    //displaying rain drops
    for(var i = 0; i<maxDrops; i++){
        drops[i].showDrop();
        drops[i].updateY()
        
    }

   
}   