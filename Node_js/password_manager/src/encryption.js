var crypto = require('crypto-js');

var secretMessage = {
    name:"meimei",
    ssn: "123",
}
var secretKey = "123abc";

var sMJSON = JSON.stringify(secretMessage);

var encryptedMessage = crypto.AES.encrypt(sMJSON, secretKey);
console.log(encryptedMessage.toString());

var bytes = crypto.AES.decrypt(encryptedMessage.toString(), secretKey);
var decryptedMessage = bytes.toString(crypto.enc.Utf8);

var dMObject = JSON.parse(decryptedMessage);

console.log(dMObject);