/*dog -- an array of letters -- value for the word, value of the word is dog
word, array of letter and, has the word been guessed, what stops the game */

var Letter = require("./Letter.js")

var Word = function(stringValue){

	this.value = stringValue;
	this.arrayOfLetters = []


	this.displayCurrentValue = function(){
		var displayString = ""
		for(i = 0; i < this.arrayOfLetters.length; i++){

			displayString += this.arrayOfLetters[i].readDisplay()
		}

		return displayString

		/*Method of Word that displays current value - displayCurrentValue, 
		displayString's empty string
		loops array of letters
		displayString adds to property
		of Word Constructor  */


	}

	this.buildLetters = function(){
		//split array of words into individual letters
		var letterString = this.value.split("")
		// console.log(letterString)
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
	this.isSolved = function(){
		var solved = true;
		for (var i = 0; i < this.arrayOfLetters.length; i++){
			if(!this.arrayOfLetters[i].isGuessed){
				solved = false;

			}
		} return solved;
	}

}

// var thing = new Word("strawberry")
// // build letters from word 
// //display current word
// //take the input from the user, i can use checkuser guess against the acctual letters
// var thing2 = new Word("bird")
// // console.log(thing)

// //build letters takes value of word as a string into an array of letter objects
// //builds letter object and stores into array

// thing2.buildLetters()
// console.log(thing)
// console.log(thing2)
// console.log(thing.displayCurrentValue())
// console.log(thing2.displayCurrentValue())
// thing2.checkUserGuess("b")

// console.log(thing2.displayCurrentValue())
// word.checkUserGuess()

// word.checkUserGuess()
// console.log(word.displayCurrentValue())	

module.exports = Word

