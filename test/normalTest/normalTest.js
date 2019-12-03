for(let i=1; i<=9; i++){
	document.getElementById(i.toString()).setAttribute("onclick", "mark()");
}

mark(){
	console.log(this.id + "=" + this.innerHTML);
}
