var list = document.getElementsByClassName("button");

var i;
for(i=0; i<list.length; i++){
	list[i].addEventListener("click",function(){
		var x = this.nextElementSibling.style;
		if(x.display==="none" || x.display==="") x.display="block";
		else x.display="none";
	});
}