
var lat;
var long;
/*
function foo(){
	navigator.geolocation.getCurrentPosition(pos =>{
		lat=pos.coords.latitude;
		long=pos.coords.longitude;
	});

	const proxy ="https://cors-anywhere.herokuapp.com/";
	const api = `${proxy}https://api.darksky.net/forecast/19225e2dbb37011c100eba26e5a0d482/${lat},${long}`;

	fetch(api)
		.then(response => {
			return response.json();
		})
		.then(data => {
			console.log(data);
		});
}
*/

window.addEventListener("load",() => {
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(pos =>{
			lat=pos.coords.latitude;
			long=pos.coords.longitude;
		
		console.log(lat + " " + long);
			const proxy ="https://cors-anywhere.herokuapp.com/";
			const api = `${proxy}https://api.darksky.net/forecast/19225e2dbb37011c100eba26e5a0d482/${lat},${long}`;

			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					console.log(data);
				});
		});
	}
});


/*
window.addEventListener("load", () =>{
	let long;
	let lat;

	if (navigator.geolocation){
		navigator.geolocation.getCurrentPosition(position => {
			long = position.coords.longitude;
			lat= position.coords.latitude;

			const proxy = "https://cors-anywhere.herokuapp.com/";
			const api = `${proxy}https://api.darksky.net/forecast/19225e2dbb37011c100eba26e5a0d482/${lat},${long}`;
		
			fetch(api)
				.then(response => {
					return response.json();
				})
				.then(data => {
					console.log(data);
				});
		});
	}
});
*/