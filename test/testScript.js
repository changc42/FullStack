function foo(){
	navigator.geolocation.getCurrentPosition(pos =>{
		console.log(pos);
	})
	

}
window.addEventListener("load",foo);
