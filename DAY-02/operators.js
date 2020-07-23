let a = 10;
let b = 20;

// ==
document.write(21 == "21", "<br/>"); //returns true
// ===
document.write(21 === "21", "<br/>"); //returns false
// !=
document.write(3 != "3", "<br/>"); //returns false
// !==
document.write(3 !== "3", "<hr/>"); //returns true
//AND OPERATOR
document.write(a < 9 && b > 1, "<br/>"); //returns false
//OR OPERATOR
document.write(a === 10 || b === 20, "<br/>"); //returns true
//NOT OPERATOR
document.write(!(a === b), "<hr/>"); //returns true
//ternary
document.write(a !== b ? true : false, "<hr/>"); //return true
