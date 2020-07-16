var originalArray = [];
for (var i = 0; i < 10; i++) {
  originalArray[i] = prompt("Enter number " + (i + 1));
}
document.write("ORIGINAL ARRAY: ", originalArray, "<hr/>");
/*There are no built-in functions for finding the max or min value in an array. */
document.write("using Math.min.apply/Math.max.apply", "<br/>");
var min1 = Math.min.apply(null, originalArray);
document.write("MIN VALUE: ", min1, "<br/>");
var max1 = Math.max.apply(null, originalArray);
document.write("MAX VALUE: ", max1, "<hr/>");
document.write("using spread operator", "<br/>");
var min2 = Math.min(...originalArray);
document.write("MIN VALUE: ", min2, "<br/>");
var max2 = Math.max(...originalArray);
document.write("MAX VALUE: ", max2, "<br/>");
