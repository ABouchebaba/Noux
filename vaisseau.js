function Vaissau(){
	
	this.x = width /2;
	this.y = height /2;
	this.speedx = 5;
	this.speedy = 5 ;
	this.acc = 1;
	this.orientation = 0;

	this.sizeX = 70;
	this.sizeY = 70;
	this.firePower = 10;
	this.fires = [];

	this.upgraded = false;

	this.sprite = loadImage("sprites/vaisseau.png");

	this.show = function(){
		
		image(this.sprite, this.x, this.y, this.sizeX, this.sizeY);
	}

	this.moveUp = function(){

		this.y -= this.speedy;
		if (this.y <= 0) {
			this.y = height;
		}
		
	}
	this.moveDown = function(){

		this.y += this.speedy;
		if (this.y >  height) {
			this.y = 0;
		}
		
	}
	this.moveLeft = function(){

		this.x -= this.speedx;
		if (this.x <= 0) {
			this.x = width;
		}
		
	}
	this.moveRight = function(){

		this.x += this.speedx;
		if (this.x > width) {
			this.x = 0;
		}
		
	}

	this.shoot = function(){
		this.fires[this.fires.length] = new Fire(this.x, this.y);

		this.fires[this.fires.length-1].show();
		console.log("fire");
	}

	this.upgrade = function(){

		this.upgraded = true;

		this.speedx += this.acc;
		this.speedy += this.acc;

		this.firePower *= 2;

	}
	
}


function Fire (x, y){

	this.x = x;
	this.y = y;

	this.speedy = 10;

	this.sizeX = 40;
	this.sizeY = 50;

	this.sprite = loadImage("sprites/bullet.png")

	this.show = function(){

		//stroke(255, 255, 255);
		//rect(this.x, this.y, this.sizeX, this.sizeY);

		image(this.sprite, this.x, this.y, this.sizeX, this.sizeY);


		
	}

	this.move = function(){
		this.y -= this.speedy;
	}




}