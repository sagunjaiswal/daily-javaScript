let originalArrSplice = ["I", "am", "studying", "JavaScript", "right", "now"];
document.write("SPLICE", "<br/>");
// remove 4 first elements and replace them with another two
document.write("THE ORIGINAL ARRAY IS : ", originalArrSplice, "<br/>");
let removedSpliceArray = originalArrSplice.splice(0, 4, "Let's", "play");
document.write(
  "after splice of ",
  removedSpliceArray,
  " and adding of lets play the array becomes : ",
  originalArrSplice,
  "<br/>"
);
//adding item to 2 index
originalArrSplice.splice(2, 0, "tennis");
document.write(
  "after adding tennis in 2 index of the array becomes: ",
  originalArrSplice,
  "<br/>"
);
//deleting two items from the last
originalArrSplice.splice(-2, 2);
document.write(
  "after splicing of last two elements of the array : ",
  originalArrSplice,
  "<hr/>"
);
document.write("SLICE", "<br/>");
originalArrSlice = ["I", "really", "like", "programming"];
document.write("THE ORIGINAL ARRAY IS : ", originalArrSlice, "<br/>");
//cody from 1 to 2
copyArrSlice = originalArrSlice.slice(1, 3);
document.write(
  "array after copying  from 1st index to 2nd : ",
  copyArrSlice,
  "<br/>"
);
