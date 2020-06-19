const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ground_options ={
        isStatic: true
    }
    var ball_options ={
        restitution:2
    }

    ground = Bodies.rectangle(200,390,200,30,ground_options);
    ball = Bodies.circle(100,100,15,ball_options);
    World.add(world,ground);
    World.add(world,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,30);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,15,15)
}