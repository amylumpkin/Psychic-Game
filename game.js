//need to create an object that contains two properties
//	1. correct letters guessed
//	2. incorrect letters guessed
//need to create variables
//computer selects random letter
//allow user 9 guesses
//need to loop through array
//console out
//if/else 
//need functions

//start with 9 guesses left
//for incorrect guesses - letters are listed (Your Guesses So Far) & number of guesses left goes down
//if user guesses letter in 9 or less, wins number goes up by one
//if user does not guess the letter in 9 or less, loses number goes up by one.

//Game resets after 9 guesses, resets if correct guess within 9 or less

//Letter choices available
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Setting all to starting numbers
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var computerLetter = "";

//Lets the computer select a random letter from the available choices
function randomLetter() {
	computerLetter = computerChoice[Math.floor(Math.random() * computerChoice.length)];
	console.log(computerLetter);
	guessesSoFar = [];
	guessesLeft = 9;
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
	document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + guessesSoFar;
};

randomLetter();
document.onkeyup = function(event) {
	var userGuess = event.key;
	console.log(userGuess);

	if (guessesLeft > 0) {
		console.log(guessesLeft);
		if (userGuess !== computerLetter) {
			guessesLeft--; 
			document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
			guessesSoFar.push(userGuess);
			document.getElementById("guessesSoFar").innerHTML = "Guesses So Far: " + guessesSoFar;
		}
		if (userGuess === computerLetter) {
			wins++;
			document.getElementById("wins").innerHTML = "Wins: " + wins;
			alert("You Guessed Correctly!");
			randomLetter();

		}
		if (guessesLeft == 0) {
			losses++;
			document.getElementById("losses").innerHTML = "Losses: " + losses;
			alert("I guess you're not psychic after all")
			
			randomLetter();
		};
	};
};


