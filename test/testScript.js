
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
var h1 = document.getElementById("h1");

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
					let x = data.currently;
					console.log(x.temperature + " " + x.summary);
					h1.textContent = x.temperature;

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