/* Description - We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them. The lowest number will not always come first. */

function sumAll(arr) {
  let max = Math.max.apply(null,arr);
  let min = Math.min.apply(null,arr);
  let newArray = [];
  let total = 0;
  for(var i = min; i<=max; i++){
  		total +=i;

  }
return total;

}


/* Test Cases
sumAll([1, 4]) //should return 10.
sumAll([4, 1]) //should return 10.
sumAll([5, 10]) //should return 45.
sumAll([10, 5]) //should return 45.
*/
