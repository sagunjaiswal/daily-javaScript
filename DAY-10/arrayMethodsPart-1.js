//concatenation of two arrays
let originalArray = ["first", "second", "third", "fourth"];
document.write("THE ORIGINAL ARRAY: ", originalArray, "<br/>");

let arr1 = ["x", "y"];
let concatinatedArr1 = originalArray.concat(arr1);
document.write(
  "after concatinating with ",
  arr1,
  " the array now is : ",
  concatinatedArr1,
  "<hr/>"
);
//checking whether an array includes() the element or not
let includesOrNot = originalArray.includes("third");
document.write(
  "The original array contains third or not: ",
  includesOrNot,
  "<hr/>"
);
//checking for an element using the find method
let findInArray = originalArray.find((element) => element === "second");
document.write("will return the found : ", findInArray, "<hr/>");
