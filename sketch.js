var canvas;
var gameState = 0; 
var playerCount; //playerCount
var database;
var form,player,game;

function setup(){

canvas = createCanvas(400,400);
database = firebase.database();  //changed database spelling
game = new Game();
game.getState();
game.start();


}

function draw(){



}
