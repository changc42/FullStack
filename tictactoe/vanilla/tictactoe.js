var tableDataElements = document.getElementsByTagName("table")[0].getElementsByTagName("td");

var isXTurn = true;
var turnNumb = 0;
var pastTurns = [];

for(let i=0; i<9; i++){
	square[i].setAttribute("onclick", `foo(${i})`);
}

function foo(i){
	//if there is winner, do nothing
	if(isWinner()){
		return;
	}

	//record current board in pastTurns
	let temp = [];
	for(let j=0; j<9; j++){
		temp.push(square[j].innerHTML);
	}
	pastTurns.push(temp);

	//mark board
	square[i].innerHTML = isXTurn ? "X": "O";

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
	isWinner();
}

function isWinner(){
	for(let i=0; i<3; i++){
		let b=true;
		for(let j=0; j<3; j++){
			if(square[i*3+j].innerHTML=="O" || square[i*3+j].innerHTML==""){
				b=false;
			}
		}
		if(b){
			console.log("winner!");
			return true;
		}
	}
	for(let i=0; i<3; i++){
		let b=true;
		for(let j=0; j<3; j++){
			if(square[j*3+i].innerHTML=="O" || square[j*3+i].innerHTML==""){
				b=false;
			}
		}
		if(b){
			console.log("winner!");
			return true;
		}
	}
	let b= true;
	for(let i=0; i<3; i++){

		if(square[i*3+i].innerHTML=="O" || square[i*3+i].innerHTML=="") b=false;
	}
	if(b){
		console.log("winner!");
		return true;
	}
	b=true;
	for(let i=1; i<=3; i++){
		if(square[i*2].innerHTML=="O" || square[i*2].innerHTML=="") b=false;
	}
	if(b){
		console.log("winner!");
		return true;
	}
	return false;
}

function rewind(){
	let prevTurn = this.getAttribute("storedTurn");
	for(let i=0; i<9; i++){
		square[i].innerHTML = pastTurns[prevTurn][i];
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
