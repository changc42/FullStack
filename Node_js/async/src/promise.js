function doWorkPromise(arg){
    return new Promise( (resolve,reject)=>{
        if(arg>=65) resolve("you passed!");
        reject("you failed")
    })
}

function getLocation(){
    return new Promise((resolve,reject)=>{
        let location = "dsfd"
        resolve(location)
    })
}

function getWeather(location){
    return new Promise((resolve,reject)=>{
        if(location!=null) resolve("it's 78 degrees in "+location);
        reject("fail");
    })
}

getLocation()
    .then(res=>{
        return getWeather(res)
    })
    .then(res=>console.log(res), rej=>console.log(rej))