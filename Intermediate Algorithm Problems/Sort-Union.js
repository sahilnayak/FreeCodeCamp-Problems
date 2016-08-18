/* Write a function that takes two or more arrays and returns a new array of unique values in the
order of the original provided arrays.*/


function uniteUnique(arr) {

var results = []
arr = [].slice.call(arguments)

arr = arr.reduce(function(acc,item){
	for(var i =0; i<item.length; i++){
		if(acc.indexOf(item[i]) === -1)	acc.push(item[i])
	}
	return acc;
},results);

 return arr;

}





// Test Cases
// uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);
//console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])) //should return [1, 3, 2, 5, 4].
//console.log(uniteUnique([1, 3, 2], [1, [5]], [2, [4]])) //should return [1, 3, 2, [5], [4]].
console.log(uniteUnique([1, 2, 3], [5, 2, 1])) //should return [1, 2, 3, 5].
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])) //should return [1, 2, 3, 5, 4, 6, 7, 8].