var request = require('request');

module.exports = (location)=>{
    var url= `http://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=51143d874cfce5a580f9c39cc42f3e43`;

    request({url:url, json:true}, (e,r,b)=>{
        if(e) console.log(e.message);
        else {
            if(b.cod=="404" || b.cod=="400") console.log("city not found")
            else console.log("name: "+b.name+", temp:"+b.main.temp);
        }
    })
}