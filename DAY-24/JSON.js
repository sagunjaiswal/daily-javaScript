const jsonObj = {
  day: 23,
  topic: "JSON",
};
console.log(jsonObj);
console.log(JSON.stringify(jsonObj));
console.log(typeof JSON.stringify(jsonObj)); //string

console.log(JSON.parse(JSON.stringify(jsonObj))); //converts back into an object
console.log(typeof JSON.parse(JSON.stringify(jsonObj))); //object
