var storage = require('node-persist');
var crypto = require ('crypto-js');
storage.initSync();

const mPW = "123";

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
            },
            mPW: {
                alias: 'm',
                demand: true,
                type: 'string',
                description: "master password",
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
            mPW: {
                alias: 'm',
                demand: true,
                type: 'string',
                description: "master password",
            }
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

function encrypt(account, m){
    let accountJSON = JSON .stringify(account);
    return crypto.AES.encrypt(accountJSON, m);
}

function decrypt(encrypted, m){
    let bytes = crypto.AES.decrypt(encrypted, m);
    let decryptedJSON = bytes.toString(crypto.enc.Utf8)

    return JSON.parse(decryptedJSON);
}

function create(account, m){
    if(m!=mPW) console.log("password incorrect");
    else{
        if(storage.getItemSync("accounts")==null) storage.setItemSync("accounts", []);

        let temp = storage.getItemSync("accounts");

        let encrypted = encrypt(account, m);
        temp.push(encrypted.toString());
        storage.setItemSync("accounts",temp);
        console.log("object created:")
        console.log(account);
    }
}

function get(accName, m){
    if(m!=mPW) console.log("password incorrect");
    else{
        let accounts= storage.getItemSync("accounts");
        if(accounts==null) console.log("no accounts exist");
        else{
            let matchedAccount;
            accounts.forEach(encrypted=>{
                let acc = decrypt(encrypted,m)
                if(acc.name==accName) matchedAccount=acc;
            })
            if(matchedAccount==null) console.log("specified account does not exist");
            else console.log(matchedAccount);
        }
    }
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
},argv.mPW)

if(command=="get") get(argv.name, argv.mPW);

if(command=="list") list();

if(command=="remove") remove(argv.name);