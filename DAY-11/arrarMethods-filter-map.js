let originalArray = ["I", "love", "javascript"];
document.write("the original array is : ", originalArray, "<hr/>");
//using map
let mappedArray = originalArray.map((item) => item.length);
document.write("the length array using map() is : ", mappedArray, "<br/>");
//using filter
let filteredArray = originalArray.filter((item) => item.length <= 4);
document.write(
  "the filtered array whose length <=4 using filter() is : ",
  filteredArray,
  "<br/>"
);
