//Eric Westcott
window.onload= function(){
	var formHandle = document.forms[0];

    formHandle.onsubmit = function (){

    	var gameNumber = Math.floor(Math.random()*99)+1;
    	var guessNumber = document.getElementById('myGuess');
    	var userGuess = document.getElementById('myGuess').value;

    	var endGame = document.getElementById('gameOver');

    	var guessRgx = /\d{1,2}(?!\d)|100/;
    	var userCheck = userGuess.search(guessRgx);

    	console.log("The number is " + gameNumber);
    	console.log("You Guessed " + userGuess);

    	if(userGuess === '' || userGuess === null || userCheck === -1){
    	
    		endGame.innerHTML = "Please guess a number";
    		guessNumber.style.backgroundColor = '#E32925';
    		guessNumber.focus();
    	
    	}else if (userGuess == gameNumber){
    		//alert("You Win!");
    		endGame.innerHTML = "You Win!";

    	}else{
    		//alert("Game Over. You did not guess correctly.");
    		endGame.innerHTML = "Game Over. You did not guess correctly.";
    	}

    	return false;
    	
    }
}

