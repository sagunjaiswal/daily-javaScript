let str = "Javascript is amazing!";
//substring
let substr = str.substring(2, 15); //vascript is a
let substr2 = str.substring(15, 2); //returns same as above
document.write(substr, "<br/>");
document.write(substr2, "<hr/>");
//slice
substr = str.slice(0); //Javascript is amazing!
document.write(substr, "<br/>");
substr2 = str.slice(2, 15);
document.write(substr2, "<br/>"); //vascript is a
substr2 = str.slice(15, 2); //doesnt work in slice
document.write(substr2, "<hr/>");
//substr
substr = str.substr(2, 2); //va
document.write(substr, "<br/>");
substr2 = str.substr(2); //vascript is amazing!
document.write(substr2, "<br/>");
