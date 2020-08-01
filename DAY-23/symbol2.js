//using symbol as object keys
const sym = Symbol();
const obj = {
  topic: "Symbols",
  day: 23,
  [sym]: "foo",
};
console.log(obj);
console.log(Object.keys(obj)); //doesnt show symbol keys
console.log(Reflect.ownKeys(obj)); //shows symbol keys
//symbols are skipped in for..in loop
for (let key in obj) console.log(key);

//using symbol as object properties
const obj2 = {
  topic: "Symbols",
  day: 23,
  foo: [sym],
};
console.log(obj2);
