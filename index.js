var Word = require("./Word.js");

var prompt = require('prompt');

console.log("Hangman")


prompt.start( );

arrayofGuesses = [];

var word = new Word("strawberry")

word.buildLetters()
word.checkUserGuess("r")

word.checkUserGuess("t")
//when string is passed in through called function, adds it to the guessed later for display
console.log(word.displayCurrentValue())	



 
prompt.get(["guess"], function (err, result){

	result.guess.arrayofGuesses.push()

});

console.log(arrayofGuesses)









/*

function Letter (stringValue, boolLetter, charReturn, charCheck ){

	this.stringValue = stringValue;
	this.boolLetter = boolLetter;
	this.charReturn = charReturn;
	this.charCheck = charCheck;

}




var values = "A","B","C","D","E","F","G","H", "I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","_"

function randomGenerator(){
var randomNumber = Math.floor(Math.random()*5)+1
	return randomNumber
}

var arrayOfWords = ["elephant", "grasshopper","zebra","rabbit","lobster","panda", "seahorse", "spider", "vulture","giraffe"]


*/





