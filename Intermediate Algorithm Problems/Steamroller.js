/*Flatten a nested array. You must account for varying levels of nesting.*/

function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = []
  recursionArray(arr);

  function recursionArray(item){
  for(var i =0; i<item.length; i++){
  	if(Array.isArray(item[i])) recursionArray(item[i])
  	else newArr.push(item[i])
  	}
}
  return newArr;
}


console.log(steamrollArray([[["a"]], [["b"]]])) //should return ["a", "b"].
console.log(steamrollArray([1, [2], [3, [[4]]]])) //should return [1, 2, 3, 4].
console.log(steamrollArray([1, [], [3, [[4]]]])) //should return [1, 3, 4].
console.log(steamrollArray([1, {}, [3, [[4]]]])) //should return [1, {}, 3, 4].


