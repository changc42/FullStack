var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
    .command("create","adds an account to local storage", function(yargs){
        yargs.options({
            name: {
                type: 'string',
                demand: true,
                description: "name of account",
                alias: 'n',
            },
            password: {
                alias: 'p',
                demand: true,
                description: "pw of account",
                type: 'string',
            }
        })
    })
    .command("get","retrieves account info", function(yargs){
        yargs.options({
            name: {
                type: 'string',
                demand: true,
                description: "name of account",
                alias: 'n',
            },
        })
    })
    .command("list","lists all accounts")
    .command("remove","deletes account", function(yargs){
        yargs.options({
            name: {
                demand: true,
                alias: 'n',
                type: 'string'
            }
        })
    })
    .help('h')
    .argv;

let command = argv._[0];

function create(account){
    if(storage.getItemSync("accounts")==null) storage.setItemSync("accounts", []);
    let temp = storage.getItemSync("accounts");
    temp.push(account);
    storage.setItemSync("accounts",temp);
}

function get(accName){
    let matchedAccount;
    storage.getItemSync("accounts").forEach(acc=>{
        if(acc.name==accName) matchedAccount=acc;
    })
    if(matchedAccount==null) console.log("specified account does not exist");
    else console.log(matchedAccount);
}

function list(){
    console.log(storage.getItemSync("accounts"));
}

function remove(accName){
    let index;
    let temp = storage.getItemSync("accounts");
    for(let i=0; i<temp.length; i++){
        if(temp[i].name==accName){
            index=i;
            break;
        }
    }
    if(index==null) console.log("specified acc does not exist");
    else{
        temp.splice(index,1);
        storage.setItemSync("accounts", temp);
        console.log("\""+argv.name+"\" has been deleted");
    }
}

if(command=="create") create({
    name: argv.name,
    password: argv.password,
})

if(command=="get") get(argv.name);

if(command=="list") list();

if(command=="remove") remove(argv.name);