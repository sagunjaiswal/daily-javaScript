let str1 = "JS is amazing!";
console.log(str1, typeof str1);
let str2 = String("daily javascript"); //returns a string
console.log(str2, typeof str2);
let str3 = new String("daily javascript"); //returns an object
console.log(str3, typeof str3);
console.log(str2 === str3); //returns false
console.log(str2 === str3.valueOf()); //returns true
console.log("first\nsecond");
console.log(str1.length); //14
console.log(str1.toUpperCase());
console.log(str1.toLowerCase());
