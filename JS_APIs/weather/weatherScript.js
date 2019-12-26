var lat;
var long;

var h1 = document.getElementById("h1");

window.addEventListener("load",() => {
	
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

					document.getElementById("y").textContent=data.timezone;
					console.log(x.temperature + " " + x.summary);
					document.getElementById("h2").textContent = x.temperature;

					var skycons = new Skycons({"color":"black"});
					
					skycons.add("icon1", x.icon);
					skycons.play();
					h1.textContent = x.summary;
				});
		});


	function setIcon(iconName){
		var skycons = new Skycons({"color":"black"});
		skycons.add("icon1", Skycons[iconName]);
		skycons.play();
	}
/*
	var skycons = new Skycons({"color":"black"});
	skycons.add("icon1", Skycons.PARTLY_CLOUDY_DAY);
	skycons.play();
*/
});