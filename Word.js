/*dog -- an array of letters -- value for the word, value of the word is dog
word, array of letter and, has the word been guessed, what stops the game */

var Letter = require("./Letter.js")


var Word = function(stringValue){

	/*constructor function objects for storing stringvalue property which will hold the string and one to hold the array of the letters */

	this.value = stringValue;

	this.arrayOfLetters = []




	this.displayCurrentValue = function(){
	/*display current value, function is for */
		var displayString = ""
		for(i = 0; i < this.arrayOfLetters.length; i++){

			displayString += this.arrayOfLetters[i].readDisplay()
		}

		return displayString
		/* display current value string spaces between the character letters of strings, it loops through all of the array and spaces between each index, 
		  */

	}

	this.buildLetters = function(){
		//split array of words into individual letters
		var letterString = this.value.split("")
		console.log(letterString)
		for(i = 0; i < letterString.length; i++){

			var letter = new Letter(letterString[i])

			this.arrayOfLetters.push(letter)

		}
	}
	this.checkUserGuess = function(guess){
		for(i = 0; i < this.arrayOfLetters.length; i++){
			this.arrayOfLetters[i].compareGuess(guess)

		}
	}

}

var word = new Word("strawberry")

word.buildLetters()
word.checkUserGuess("r")

word.checkUserGuess("t")
console.log(word.displayCurrentValue())	

module.exports = Word

