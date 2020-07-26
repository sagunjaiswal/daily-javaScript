console.log(20, typeof 20);
console.log(20.89, typeof 20.89);
//exponential numbers
console.log(10e6, typeof 10e6);
console.log(10e-1, typeof 10e-1);
//infinity
console.log(3 / 0, typeof (3 / 0));
//hex numbers
console.log(0xff, typeof 0xff);
//binary numbers
console.log(0b11111111, typeof 0b11111111);
//octal numbers
console.log(0o377, typeof 0o377);

//to  change base
let num = 2;
console.log(num.toString(2)); //gives binary value of 2 i.e., 10

num = 3.7777779;
console.log(num.toFixed(2)); //to fix decimal places
console.log(parseInt(num)); //returns just the integer part
console.log(parseFloat(num)); //returns the floatinng value
