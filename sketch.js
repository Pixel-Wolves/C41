var position;
var database, canvas;
var gameState = 0;
var playerCount = 0;
var form, player, game;
var allPlayers, distance = 0;
var cars, car1, car2, car3, car4;
var track, car1_Img, car2_Img, car3_Img, car4_Img, ground;

function preload(){
    track = loadImage("../images/track.jpg");
    car1_Img = loadImage("../images/car1.png");
    car2_Img = loadImage("../images/car2.png");
    car3_Img = loadImage("../images/car3.png");
    car4_Img = loadImage("../images/car4.png");
    ground = loadImage("../images/ground.png");
}

function setup(){
    database = firebase.database();
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    game = new Game();
    game.getState();
    game.start();
}

function draw(){
    background("white");

    if(playerCount === 4){
        game.update(1);
    }

    if(gameState === 1){
        clear();
        game.play();
    }

    if(gameState === 2){
        game.end();
    }
}