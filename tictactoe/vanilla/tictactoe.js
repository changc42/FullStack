var tableDataElements = document.getElementsByTagName("table")[0].getElementsByTagName("td");

var isXTurn = true;
var turnNumb = 0;
var pastTurns = [];//array which holds arrays of size 9. Interior arrays contain the state of the board in past turns.
//For example, pastTurns[0] is the char array of size 9 which contains the chars in each square of the board at turn 0

for(let i=0; i<9; i++){
	tableDataElements[i].setAttribute("onclick", `foo(${i})`);
}

//name is foo because this function does so many things
function foo(i){
	//if there is winner, do nothing
	if(isWinner()){
		return;
	}

	//record current board in pastTurns
	let temp = [];
	for(let j=0; j<9; j++){
		temp.push(tableDataElements[j].innerHTML);
	}
	pastTurns.push(temp);

	//mark board
	tableDataElements[i].innerHTML = isXTurn ? "X": "O";

	//update nextPlayer
	isXTurn = !isXTurn;
	document.getElementById("nextPlayer").innerHTML = isXTurn ? "X": "O";

	//create button which rewinds
	let rewindButton = document.createElement("Button");

	//initialize and attach attribute to button. This attribute represents the turnNumber the button will rewind to
	var storedTurn = document.createAttribute("storedTurn");
	storedTurn.value = turnNumb;
	rewindButton.setAttributeNode(storedTurn);

	rewindButton.innerHTML = "rewind to turn: " + rewindButton.getAttribute("storedTurn");
	rewindButton.addEventListener("click", rewind);
	document.getElementById("buttonList").appendChild(rewindButton);
	turnNumb++;

	//call isWinner at end to notify user there is winner
	if(isWinner()){
		let winner = isXTurn ? "0" : "X";
		console.log("winner is " + winner);
	}
}

function isWinner(){
	//create char array to iteratre through
	let charArr = ['X','O'];
	for(var char of charArr){
		for(let i=0; i<3; i++){
			let b=true;
			//check rows
			for(let j=0; j<3; j++){
				if(tableDataElements[i*3+j].innerHTML==char || tableDataElements[i*3+j].innerHTML==""){
					b=false;
				}
			}
			if(b) return true;

			//check cols
			b= true;
			for(let j=0; j<3; j++){
				if(tableDataElements[j*3+i].innerHTML==char || tableDataElements[j*3+i].innerHTML==""){
					b=false;
				}
			}
			if(b) return true;
		}

		//check top-left to bottom-right diag
		let b= true;
		for(let i=0; i<3; i++){
			if(tableDataElements[i*3+i].innerHTML==char || tableDataElements[i*3+i].innerHTML=="") b=false;
		}
		if(b) return true;
		//top-right to bottom-left
		b=true;
		for(let i=1; i<=3; i++){
			if(tableDataElements[i*2].innerHTML==char || tableDataElements[i*2].innerHTML=="") b=false;
		}
		if(b) return true;
	};
	//if none of above returned true, return false
	return false;
}

function rewind(){
	let prevTurn = this.getAttribute("storedTurn");
	for(let i=0; i<9; i++){
		tableDataElements[i].innerHTML = pastTurns[prevTurn][i];
	}
	while(turnNumb!=prevTurn){
		turnNumb--;
		pastTurns.pop();
		let buttonList = document.getElementById("buttonList").getElementsByTagName("button");
		document.getElementById("buttonList").removeChild(buttonList[buttonList.length-1]);
		isXTurn = !isXTurn;
		document.getElementById("nextPlayer").innerHTML = isXTurn ? "X": "O";
	}
}
