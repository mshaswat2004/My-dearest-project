var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(100, 590, 240, 15);  
    surface1.shapeColor = "red";  
    surface2 = createSprite(340, 590, 240, 15);  
    surface2.shapeColor = "blue";  
    surface3 = createSprite(570,590, 240, 15);  
    surface3.shapeColor = "black";  
    surface4 = createSprite(790, 590, 240, 15);  
    surface4.shapeColor = "green"; 
    

    //create box sprite and give velocity
    box = createSprite(random(20,750));
    box.shapeColor = "white";
    box.velocityX = 2;
    box.velocityY = 3;
    box.scale = 0.2;

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    edge= createEdgeSprites();
    box.bounceOff(edge);
    


    //add condition to check if box touching surface and make it box
    if(surface1.isTouching(box) || box.bounceOff(surface1)){
        box.shapeColor = "red";
    }
    if(surface2.isTouching(box) || box.bounceOff(surface2)){
        box.velocityX =0;
        box.velocityY = 0;
    }
    if(surface3.isTouching(box) || box.bounceOff(surface3)){
        box.shapeColor = "black";
    }
    if(surface4.isTouching(box) || box.bounceOff(surface4)){
        box.shapeColor = "green";
    }
    surface1.display();
    surface2.display();
    surface3.display();
    surface4.display();
    box.display();
}
