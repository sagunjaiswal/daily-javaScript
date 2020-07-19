var originalStr = "Javascript is amazing";
document.write("THE ORIGINAL STRING : ", originalStr, "<hr/>");
//SPLIT
document.write("SPLIT ", "<br/>");
var spaceSplit = originalStr.split(" ");
document.write("Array returned when we split by space : ", spaceSplit, "<br/>");
var emptySplit = originalStr.split("");
document.write(
  "Array returned when we split by empty string : ",
  emptySplit,
  "<br/>"
);
var limitSplit = originalStr.split("", 3);
document.write(
  "Array returned when we split by empty string and adding a limit 3: ",
  limitSplit,
  "<br/>"
);
var charSplit = originalStr.split("a");
document.write("Array returned when we split by char a : ", charSplit, "<hr/>");
//JOIN
var originalArray = ["JavaScript", "is", "really", "amazing"];
document.write("THE ORIGINAL ARRAY : ", originalArray, "<hr/>");
document.write("JOIN ", "<br/>");
var spaceJoin = originalArray.join(" ");
document.write("String returned when we join by space : ", spaceJoin, "<br/>");
var emptyJoin = originalArray.join("");
document.write(
  "String returned when we join by empty string : ",
  emptyJoin,
  "<br/>"
);
var charJoin = originalArray.join("a");
document.write("String returned when we join by char a : ", charJoin, "<hr/>");
