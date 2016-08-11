/* Description - Compare two arrays and return a new array with any items only found in one of the two 
given arrays, but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.

  arr1.forEach(function(item){
  		if(arr2.indexOf(item)===-1) newArr.push(item);

  });

  arr2.forEach(function(item){
  		if(arr1.indexOf(item)===-1) newArr.push(item);

  });
  
  return newArr;

}


/* Test Cases
diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
diffArray([[1, 2, 3, 5], [1, 2, 3, 4, 5]]; should return [4].
*/