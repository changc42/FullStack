var mapIdToProps = new Map();
mapIdToProps.set(4,["Charmander","Fire",2]);
mapIdToProps.set(7,["Squirtle","Water",4]);
mapIdToProps.set(11,["Metapod","Bug",5]);
mapIdToProps.set(12,["ButterFree","Flying",1]);

mapIdToProps.set(25,["Pikachu","Electric",3]);
mapIdToProps.set(39,["Jigglypuff","Normal",4]);
mapIdToProps.set(94,["Gengar","Poison",5]);
mapIdToProps.set(1,["Bulbasaur","Bug",1]);

mapIdToProps.set(30,["Rhino","Water",3]);
mapIdToProps.set(40,["Clefairy","Normal",10]);
mapIdToProps.set(45,["FlowerGrape","Bug",4]);
mapIdToProps.set(55,["BigBird","Flying",5]);

var mapNumToId = new Map();
mapNumToId.set(0,4);
mapNumToId.set(1,7);
mapNumToId.set(2,11);
mapNumToId.set(3,12);

mapNumToId.set(4,25);
mapNumToId.set(5,39);
mapNumToId.set(6,94);
mapNumToId.set(7,1);

mapNumToId.set(8,30);
mapNumToId.set(9,40);
mapNumToId.set(10,45);
mapNumToId.set(11,55);

var mapTypeToColor = new Map();
mapTypeToColor.set("Normal", "lightgray");
mapTypeToColor.set("Fire","lightcoral");
mapTypeToColor.set("Water","lightskyblue");
mapTypeToColor.set("Flying","AliceBlue");
mapTypeToColor.set("Poison","mediumpurple");
mapTypeToColor.set("Bug","lightgreen");
mapTypeToColor.set("Electric","lightyellow");


export {mapIdToProps, mapNumToId, mapTypeToColor};
