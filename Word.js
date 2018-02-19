/*dog -- an array of letters -- value for the word, value of the word is dog
word, array of letter and, has the word been guessed, what stops the game */

var Letter = require("./Letter.js")

var Word = function(stringValue){

	this.value = stringValue;
	this.arrayOfLetters = []


	this.displayCurrentValue = function(){
		var displayString = ""
		for(i=0; i < this.arrayOfLetters.length; i++){

			displayString += this.arrayOfLetters[i].readDisplay()
		}

		return displayString


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

