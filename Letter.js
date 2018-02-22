/*Letter constructor represents character of a word, 2 pieces of data that need to be tracked, taking displayChar in as an argument*/
var Letter = function(displayChar){
/*  Letter constructor passes tracks when letter displays as a '_' or char*/
	this.displayChar = displayChar;
/*object is guessed tracks boolean determining if letterguessed matches with letter for word*/
	this.isGuessed = false;	
/*function - when is isGuessed is true, displayChar returns as char and returns as '_' when it's false, and object defaults to false */
	this.readDisplay = function(){

		if (this.isGuessed === true  ){
			return displayChar
/*if isGuessed is true, show the underlying character*/
		} else {
/* otherwise, return the '_' placeholder */
			return "_"
		}
	};
/*compareguess object contains function that acts as the switch for the isGuessed object's value - taking the guess value as an argument for comparing to the display object value, will decide when to return object isGuessed value as true or false */
	this.compareGuess = function(guess){
/* */

		if (this.displayChar === guess){
			this.isGuessed = true;
			return true

		} else{
			return false
		}

	}
}



module.exports = Letter










