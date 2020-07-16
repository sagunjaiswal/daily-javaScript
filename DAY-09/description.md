## DAY-09(max and min element of an array)

![code snippet](codesnippet.png =100x20)
Today we will further learn about dealing with arrays in javascript.
There are no built-in functions for finding the max or min value in an array.
The built-in functions Math.max() and Math.min() find the maximum and minimum value of the arguments, respectively.

`Math.max(1, 2, 3, 4);`
`Math.min(1, 2, 3, 4);`
These functions will not work as-is with arrays of numbers. However, there are some ways around this.

1. Function.prototype.apply() allows you to call a function with a given this value and an array of arguments.
   Passing the numbers array as the second argument of apply() results in the function being called with all values in the array as parameters.

2. A simpler, ES2015 way of accomplishing this is with the new spread operator.

var numbers = [1, 2, 3, 4];
`Math.max(...numbers)` // 4
`Math.min(...numbers)` // 1
This operator causes the values in the array to be expanded, or “spread”, into the function’s arguments.
