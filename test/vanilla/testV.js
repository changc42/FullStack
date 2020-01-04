let obj1 = {
  height: 100,
  width: 150,
  color: "red"
};

let obj2 = {
  height: 200,
  width: 250,
  color: "purple"
};

let arr = [
  {
    height: 100,
    width: 150,
    color: "red"
  },
  obj2
];
console.log(
  arr.indexOf({
    height: 100,
    width: 150,
    color: "red"
  })
);
