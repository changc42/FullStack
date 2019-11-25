var lat;
var longi;

function foo(){
	navigator.geolocation.getCurrentPosition(pos =>{
		lat=pos.coords.latitude;
		longi=pos.coords.longitude;
		console.log(lat + " " + longi);
		
	})
	

}
window.addEventListener("load",foo);
