/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.*/

function smallestCommons(arr) {
	arr = arr.sort(function(a,b){ return a-b})
 






  return arr;
}



console.log(smallestCommons([1, 5])) //should return 60.
console.log(smallestCommons([5, 1])) //should return 60.
// console.log(smallestCommons([1, 13])) //should return 360360.
// console.log(smallestCommons([23, 18])) //should return 6056820.



