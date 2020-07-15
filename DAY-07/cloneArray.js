originalArray = [1, 2, 3, 4, 5];
document.write("ORIGINAL ARRAY : ", originalArray, "<hr />");
//using the spread operator
clone1 = [...originalArray];
document.write("CLONE1(using spread operator): ", clone1, "<br/>");
//using for loop
clone2 = [];
for (var i = 0; i < originalArray.length; i++) {
  clone2[i] = originalArray[i];
}
document.write("CLONE2(using for loop): ", clone2, "<br/>");
//using map()
clone3 = originalArray.map((x) => x);
document.write("CLONE3(using for map): ", clone3, "<br/>");
//using slice()
clone4 = originalArray.slice();
document.write("CLONE4(using for slice): ", clone4, "<br/>");
//using JSON.parse/JSON.stringify
clone5 = JSON.parse(JSON.stringify(originalArray));
document.write(
  "CLONE5(using for JSON.parse/JSON.stringify): ",
  clone5,
  "<br/>"
);
//using concat
clone6 = originalArray.concat([]);
document.write("CLONE5(using for concat): ", clone6, "<br/>");
