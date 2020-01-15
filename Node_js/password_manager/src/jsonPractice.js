let animalJSON = '{"name":"meimei","age":4}'

let animalObject = JSON.parse(animalJSON);
animalObject.type = "shiba";

animalJSON = JSON.stringify(animalObject);

console.log(animalJSON);