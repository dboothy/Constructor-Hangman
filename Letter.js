/*represents character of a word, 2 pieces of data that need to be tracked*/

var Letter = function(displayChar){
	this.displayChar = displayChar;
	this.isGuessed = false;
	

	this.readDisplay = function(){

		if (this.isGuessed === true  ){
			return displayChar

		} else {
			return "_"
		}
	};
	this.compareGuess = function(guess){

		if (this.displayChar === guess){
			this.isGuessed = true;
			return true

		} else{
			return false
		}

	}
}



module.exports = Letter










