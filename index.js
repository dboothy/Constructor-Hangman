var Word = require("./Word.js")


var inquirer = require('inquirer')


var wordsToGuess = ["strawberry", "violin", "coffee", "lion",]

var random = Math.floor(Math.random()*wordsToGuess.length)

var gameWord = wordsToGuess[random]



var guessedLetters = [];

var guessesLeft = 10;
var wins = 0;
var losses = 0;




var word = new Word(gameWord)


word.buildLetters()

word.checkUserGuess()

word.checkUserGuess()
word.displayCurrentValue()


var display = function(){
	console.log("Wins: " + wins)
	console.log("Losses: " + losses)
	console.log("Guesses left: " + guessesLeft)
	console.log(guessedLetters)
	console.log(word.displayCurrentValue())

}	

var endGame = function(){


	
	/*when guesses -- to 0, check to see if underscores are left, if all guess bolleans == true, if one of letters booleans come back as false, the game is still not wons
	check */

}

var hangManStart = function(){
display();


inquirer.prompt([
{
	type:"input",
	message: "guess the letter",
	name: "guess"

}

]).then(function(answers){
	/*function for prompt, passing in 'answers' as a */

	var guess = answers.guess[0].toLowerCase();
/*if guessed letter*/
	if (guessedLetters.includes(guess)|| !guess ){
		return hangManStart()
	


	} 

	guessedLetters.push(guess)



	var correctGuess = word.checkUserGuess(guess)
	if(correctGuess){
		if (word.isSolved()){
			wins++;
			console.log("won")
			gameReset()
			
			//call win game function to call another round
					//win game function setting guess to max number 
		
		}

	}else {
		guessesLeft --;
		if(guessesLeft === 0){
			losses ++
			gameReset()



			
		
			//add loss ++ lose game function
		}

	}

	hangManStart();




})

}

hangManStart()

function gameReset(){


success = false;
guessedLetters = [];
guessesLeft = 10;
gameWord = wordsToGuess[random]
word = new Word(gameWord)

word.buildLetters()

word.checkUserGuess()

word.checkUserGuess()
word.displayCurrentValue()
}




	// ]).then(function(answers){

	// 	word.displayCurrentValue()

	// })










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





