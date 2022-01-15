var bgimg;
var cat;
var mouse;

function preload() {
    //load the images here
    bgimg = loadImage("images/garden.png")

    mouseimg1 = loadImage("images/mouse1.png")
    mouseimg2 = loadImage("images/mouse2.png")
    mouseimg3 = loadImage("images/mouse3.png")
    mouseimg4 = loadImage("images/mouse4.png")

    catimg1 = loadImage("images/cat1.png")
    catimg2 = loadImage("images/cat2.png")
    catimg3 = loadImage("images/cat3.png")
    catimg4 = loadImage("images/cat4.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("gato1", catimg1);
    cat.scale = 0.2;

    mouse = createSprite(100, 600);
    mouse.addAnimation("rato1", mouseimg1);
    mouse.scale = 0.2;

}

function draw() {

    background(bgimg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX = 0;
        cat.addAnimation("gato4", catimg4);
        cat.changeAnimation("gato4")
        cat.x = 300;
        cat.scale = 0.2;

        mouse.addAnimation("mouse4", mouseimg4);
        mouse.changeAnimation("mouse4")
        mouse.x = 100;
        mouse.scale = 0.2;
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    mouse.addAnimation("rato2", mouseimg2);
    mouse.changeAnimation("rato2");
    mouse.frameDelay = 25;

    cat.addAnimation("gato2", catimg2)
    cat.changeAnimation("gato2");

    cat.velocityX = -5;
}

}
