let arr = [10, 20, 30, 40, 50];
document.write("THE ARRAY IS : ", arr, "<hr/>");
//isArray
document.write("isArray returned value : ", Array.isArray(arr), "<hr/>");
//reduce
let reduceArr = arr.reduce((sum, current) => sum + current, 0);
document.write("the reduced value returning sum is : ", reduceArr);
