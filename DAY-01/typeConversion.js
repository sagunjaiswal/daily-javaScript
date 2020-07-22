//NUMBER TO STRING
let num = 1234;
document.write(
  num,
  " its type is ",
  typeof num,
  " when converted gives ",
  String(num),
  " of type ",
  typeof String(num),
  "<br/>"
);
//BOOLEAN TO STRING
document.write(
  true,
  " its type is ",
  typeof true,
  " when converted gives ",
  true,
  " of type ",
  typeof String(true),
  "<br/>"
);
//STRING TO NUMBERS
let str = "1234";
document.write(
  str,
  " its type is ",
  typeof str,
  " when converted gives ",
  Number(str),
  " of type ",
  typeof Number(str),
  "<br/>"
);
//STRING TO BOOLEAN
let strng = "javascript";
document.write(
  strng,
  " its type is ",
  typeof strng,
  " when converted gives ",
  Boolean(strng),
  " of type ",
  typeof Boolean(strng),
  "<br/>"
);
//NUMBER TO BOOLEAN
let num1 = 22;
let num2 = 0;
document.write(
  num1,
  ", ",
  num2,
  " of type ",
  typeof num1,
  " ,",
  typeof num2,
  " after converting in ",
  typeof Boolean(num1),
  " ,",
  typeof Boolean(num2),
  ", ",
  " it gives ",
  Boolean(num1),
  " and ",
  Boolean(num2),
  " respectively ",
  "<br/>"
);
