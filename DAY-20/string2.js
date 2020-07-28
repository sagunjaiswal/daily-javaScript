let str = "JavaScript is amazing";
document.write("indexOf()", "<br/>");
document.write(str.indexOf("a"), "<br/>"); //returns the 1st index of a found
document.write(str.indexOf("a", 5), "<hr/>"); //returns index of a after the index 5
document.write("includes()", "<br/>");
document.write(str.includes("is"), "<br/>"); //returns true after finding first "is"
document.write(str.includes("is", 14), "<hr/>"); //returns false as there is no "is" from inddex 14
document.write("startsWith()", "<br/>");
document.write(str.startsWith("Java"), "<br/>"); //returns true
document.write(str.startsWith("amaz"), "<hr/>"); //returns false
document.write("endsWith()", "<br/>");
document.write(str.endsWith("ing"), "<br/>"); //returns true
document.write(str.endsWith("ipt"), "<hr/>"); //returns false
