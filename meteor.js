function Meteor(){


	
	this.initX = function(){

		if(this.speedx > 0)return random(-10, 0);

		return random(width, width+10);
	}

	this.initY = function(){

		if(this.speedy > 0)return random(-10, 0);

		return random(height, height+10);
	}

	

	this.speedx = random(-5, 5);
	this.speedy = random(-5, 5);

	this.x = this.initX();
	this.y = this.initY();

	this.sizeX = random(30,50);
	this.sizeY = random(30,50);

	this.sprite = loadImage("sprites/meteor.png");


	this.show = function(){

		image(this.sprite, this.x, this.y, this.sizeX, this.sizeY);
	}




	this.move = function(){

		this.x += this.speedx;
		this.y += this.speedy;

		if(this.speedx >= 0 && this.x >= width)this.recreateMeteors();
		if(this.speedx < 0 && this.x < 0) this.recreateMeteors();
		if(this.speedy >= 0 && this.y >= height) this.recreateMeteors();
		if(this.speedy < 0 && this.y < 0) this.recreateMeteors();


	}

	

    this.recreateMeteors = function() {
		
			this.speedx = random(-3, 3);
			this.speedy = random(-3, 3);

			this.x =  this.initX();
			this.y = this.initY();

			this.sizeX = random(30,50);
			this.sizeY = random(30,50);
	}


	
}