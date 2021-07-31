var database;
var back_img;
var gameState =0;
var playerCount = 0;
var allPlayers;
var player1Score=0;
var player2Score=0;
var police,police_running,police_catch;

var player, form,game;
var player1,player2;
var players;
var fruits;
var fruitGroup;
var fruit1_img, fruit2_img, fruit3_img, fruit4_img, fruit5_img;
var player_img;


function preload(){
  police_running = loadImage("New Project(1).png","New Project(2).png","New Project.png");
  back_img = loadImage("Fruitbackg.jpg");
  player_img = loadImage("Boy1.png");
  fruit1_img = loadImage("Apple.png");
  fruit2_img = loadImage("Banana.png");
  fruit3_img = loadImage("Strawberry.png");
  fruit4_img = loadImage("Watermelon.png");
  fruit5_img = loadImage("Pineapple.png");
  fruitGroup = new Group();
  playerGroup = new Group();
  
}
function setup() {
  createCanvas(1000, 600);
  createEdgeSprites();
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw() {
  background(back_img);
  
   if (playerCount === 2) {
     game.update(1);
   }
   if (gameState === 1) {
     clear(); 
     game.play();
   }
   if (gameState === 2) {
    
     game.end();
   }
}