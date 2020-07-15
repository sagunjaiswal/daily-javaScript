/*INPUT 10 NUMBERS IN AN ARRAY*/
/*By default, the sort() function sorts values as strings.

This works well for strings ("Apple" comes before "Banana").

However, if numbers are sorted as strings, "25" is bigger than "100", because "2" is bigger than "1".

Because of this, the sort() method will produce incorrect result when sorting numbers*/
var originalArray = [];
for (var i = 0; i < 10; i++) {
  originalArray[i] = prompt("Enter number " + (i + 1));
}

document.write("ORIGINAL ARRAY: ", originalArray, "<br/>");
var sortedArray = originalArray.sort(function (a, b) {
  return a - b;
});
document.write("SORTED ARRAY: ", sortedArray, "<br/>");
var reverseSortedArray = sortedArray.reverse();
document.write("REVERSED ARRAY: ", reverseSortedArray, "<br/>");
