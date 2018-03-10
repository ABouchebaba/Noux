var game;
var width = 600;
var height = 900;

var back;

function setup() {
	createCanvas(900, 600);

	back = loadImage("sprites/space.png");

	game = new Game(height,width);

	for (var i = 0; i < game.nbMeteors; i++) {
		game.meteors[i] = new Meteor();
	}
	
	game.start();
	

}

function draw(){
	background(back);

//background(255, 255, 255);
	if(!game.gameLost){
		controlVaisseau();

		for (var i = 0; i < game.nbMeteors; i++) {
			game.meteors[i].move();
			game.meteors[i].show();

		}

		//console.log(game.vaissau.fires.length);
		for (var i = 0; i < game.vaissau.fires.length; i++) {
			game.vaissau.fires[i].move();
			game.vaissau.fires[i].show();

			//console.log(game.vaissau.fires[i].y);

		}


		game.vaissau.show();
		
		
		game.detectCollision();
	}
	
}

function controlVaisseau(){
	if (keyIsDown(UP_ARROW)){
		game.vaissau.moveUp();
	}
    if (keyIsDown(DOWN_ARROW)){
		game.vaissau.moveDown();
	} 
	if (keyIsDown(RIGHT_ARROW)){
		game.vaissau.moveRight();
	}
	if (keyIsDown(LEFT_ARROW)){
		game.vaissau.moveLeft();
	}
	
}

function keyPressed(){
	if (keyCode == 32) {
		game.vaissau.shoot();
	}
}
