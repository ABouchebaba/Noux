function Game() {

	this.vaissau = new Vaissau() ;
	this.nbMeteors = 20;
	this.meteors = [];

	this.score = 0;
	this.width = width;
	this.height= height;
	this.gameLost = false;


	this.start = function(){


		this.vaissau.show();
		for(var i =0; i<this.nbMeteors; i++ ){
			this.meteors[i].show();	
		}
	}

	this.detectCollision = function(){

		var fires = this.vaissau.fires;

		for(var i =0; i<this.nbMeteors-1; i++ ){
			
			if (this.collision(this.meteors[i], this.vaissau)){
				this.stop();
				//console.log("collision");	
			} 



			for (var j = 0; j<fires.length ; j++) {
				//console.log(this.meteors[i]);
				if (this.collision(this.meteors[i], fires[j])){
				
					this.destroyMeteor(i);
					console.log("collision fire meteor");	
				}	
			}

		}
	}

	

	this.destroyMeteor= function(i){

		
		this.meteors.splice(i, 1);
		this.nbMeteors--;
	}

	this.stop = function(){
		this.gameLost = true;
	}

	this.collision = function(meteor, something){

		var maxX = meteor.x + meteor.sizeX/2;
		var minX = meteor.x - meteor.sizeX/2;

		var maxY = meteor.y + meteor.sizeY/2;
		var minY = meteor.y - meteor.sizeY/2;

		var minXsomething = something.x - something.sizeX/2;
		var maxXsomething = something.x + something.sizeX/2;

		var minYsomething = something.y - something.sizeY/2;
		var maxYsomething = something.y + something.sizeY/2;




		if( ((maxX >= minXsomething && maxX <= maxXsomething)||(minX >= minXsomething && minX <= maxXsomething )) && ((minY >= minYsomething && maxY <= maxYsomething)||(maxY >= minYsomething && maxY <= maxYsomething)) ) {
			
			return true; 
		}

		return false;

	}

}