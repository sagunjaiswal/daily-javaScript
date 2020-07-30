console.log(Symbol());
console.log(Symbol() === Symbol()); //false

let sym1 = Symbol("bla-bla");
let sym2 = Symbol("bla-bla");
console.log(sym1 === sym2); //false
