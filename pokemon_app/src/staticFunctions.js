function randID(){
	return Math.floor(Math.random()*12);
}

function digit3(x){
	return `00${x}`.slice(-3);
}

export {randID, digit3};
