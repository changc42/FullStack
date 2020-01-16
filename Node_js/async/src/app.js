const getWeather = require('./getWeather')
const getYourWeather = require('./getYourWeather')
const yargs = require('yargs')

let argv = yargs
    .command("getWeather","get the weather of specified location, or if no location specified, of user's location", yargs=>{
        yargs.options({
            location:{
                alias: "l",
                description: "location",
                type:"string",
            }
        })
    })
    .help('h')
    .argv;

let c=argv._[0]
if(c=="getWeather"){
    if(argv.location!=null) getWeather(argv.location);
    else{
        console.log("your weather is: ")
        getYourWeather();
    }
}