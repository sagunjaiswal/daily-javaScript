let obj = {
  name: "Sagun",
  hello() {
    // ignored
    console.log("Hello Sagun");
  },
  [Symbol("bday")]: 18, // ignored
  x: undefined, // ignored
};

console.log(JSON.stringify(obj));

obj = {
  name: "Sagun",
  age: 20,
  roles: {
    isAdmin: false,
    isEditor: true,
  },
};

console.log(JSON.stringify(obj, null, 2)); //space = 2

console.log(JSON.stringify(obj, null, 4)); //space = 4

let obj2 = { name: "Sagun", age: "18", city: "Kolkata" };
let text = JSON.stringify(
  obj2, //parameter1
  function (key, value) {
    //parameter2
    if (key == "city") {
      return value.toUpperCase();
    } else {
      return value;
    }
  },
  10 //parameter3
);
console.log(text);
