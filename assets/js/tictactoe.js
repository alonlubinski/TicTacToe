var sqaures = document.querySelectorAll(".container div");
var flag = 0;
var gameOver = false;
var numOfTurns = 0;
var sq1 = document.getElementById("sq1");
var sq2 = document.getElementById("sq2");
var sq3 = document.getElementById("sq3");
var sq4 = document.getElementById("sq4");
var sq5 = document.getElementById("sq5");
var sq6 = document.getElementById("sq6");
var sq7 = document.getElementById("sq7");
var sq8 = document.getElementById("sq8");
var sq9 = document.getElementById("sq9");
var winner = document.getElementById("winner");

/* Players turns */
for(var i = 0; i < sqaures.length; i++){
	$(sqaures[i]).on("click", function(){
		if(this.innerHTML == "" && flag == 0 && gameOver == false){
			this.innerHTML = "X";
			flag = 1;
			numOfTurns++;
			checkForWin();
			changeTurn();
			
		}
		else if(this.innerHTML == "" && flag == 1 && gameOver == false){
			this.innerHTML = "O";
			flag = 0;
			numOfTurns++;
			checkForWin();
			changeTurn();
			
		}

	});
}

/* New game button */
$("#newGame").on("click", function(){
	for(var i = 0; i < sqaures.length; i++){
		sqaures[i].innerHTML = "";
		sqaures[i].style.backgroundColor = "grey";
	}
	winner.innerHTML = "Player X turn!"
	flag = 0;
	gameOver = false;
});

/* Function that check if there is a winner */
/* Winning options: (1,2,3), (4,5,6), (7,8,9), (1,4,7), (2,5,8), (3,6,9), (1,5,9), (3,5,7) */
function checkForWin(){
	if((sq1.innerHTML !== "") && (sq1.innerHTML === sq2.innerHTML) && (sq1.innerHTML === sq3.innerHTML)) {
		gameOver = true;
		markWin(sq1, sq2, sq3);
		winner.innerHTML = "Player " + sq1.innerHTML + " is the winner!";
	}
	else if((sq4.innerHTML !== "") && (sq4.innerHTML === sq5.innerHTML) && (sq4.innerHTML === sq6.innerHTML)) {
		gameOver = true;
		markWin(sq4, sq5, sq6);
		winner.innerHTML = "Player " + sq4.innerHTML + " is the winner!";
	}
	else if((sq7.innerHTML !== "") && (sq7.innerHTML === sq8.innerHTML) && (sq7.innerHTML === sq9.innerHTML)) {
		gameOver = true;
		markWin(sq7, sq8, sq9);
		winner.innerHTML = "Player " + sq7.innerHTML + " is the winner!";
	}
	else if((sq1.innerHTML !== "") && (sq1.innerHTML === sq4.innerHTML) && (sq1.innerHTML === sq7.innerHTML)) {
		gameOver = true;
		markWin(sq1, sq4, sq7);
		winner.innerHTML = "Player " + sq1.innerHTML + " is the winner!";
	}
	else if((sq2.innerHTML !== "") && (sq2.innerHTML === sq5.innerHTML) && (sq2.innerHTML === sq8.innerHTML)) {
		gameOver = true;
		markWin(sq2, sq5, sq8);
		winner.innerHTML = "Player " + sq2.innerHTML + " is the winner!";
	}
	else if((sq3.innerHTML !== "") && (sq3.innerHTML === sq6.innerHTML) && (sq3.innerHTML === sq9.innerHTML)) {
		gameOver = true;
		markWin(sq3, sq6, sq9);
		winner.innerHTML = "Player " + sq3.innerHTML + " is the winner!";
	}
	else if((sq1.innerHTML !== "") && (sq1.innerHTML === sq5.innerHTML) && (sq1.innerHTML === sq9.innerHTML)) {
		gameOver = true;
		markWin(sq1, sq5, sq9);
		winner.innerHTML = "Player " + sq1.innerHTML + " is the winner!";
	}
	else if((sq3.innerHTML !== "") && (sq3.innerHTML === sq5.innerHTML) && (sq3.innerHTML === sq7.innerHTML)) {
		gameOver = true;
		markWin(sq3, sq5, sq7);
		winner.innerHTML = "Player " + sq3.innerHTML + " is the winner!";
	}
}

/* Function that marks the winning combination */
function markWin(a, b, c){
	a.style.backgroundColor = "green";
	b.style.backgroundColor = "green";
	c.style.backgroundColor = "green";
}

function changeTurn(){
	if((gameOver !== true) && (numOfTurns === 9)){
		winner.innerHTML = "Draw!"
	}
	else if((gameOver !== true) && (numOfTurns !== 9)){
		if(flag == 0){
			winner.innerHTML = "Player X turn!"
		}
		else {
			winner.innerHTML = "Player O turn!"
		}
	}
}




