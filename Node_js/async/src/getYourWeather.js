var request = require('request');
var getWeather = require('./getWeather.js');
const url = 'http://ipinfo.io';

module.exports = ()=>{
    request({url:url, json:true}, (e,r,b)=>{
        if(e) console.log(e.message)
        else{
            getWeather(b.region);
        }
    })
}