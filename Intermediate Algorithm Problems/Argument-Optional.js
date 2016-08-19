/* Create a function that sums two arguments together. If only one argument is provided, then return 
a function that expects one argument and returns the sum.*/

function addTogether(num1, num2) {
	if(arguments.length>1 || typeof num1 === 'string') {
		if(typeof arguments[0] !== 'number' || typeof arguments[1] !=='number') return undefined
		else return num1 + num2
	}
	return function(num3) {
		return addTogether(num1,num3)
	}
}


console.log(addTogether(2, 3)) //should return 5.
console.log(addTogether(2)(3)) //should return 5.
console.log(addTogether("http://bit.ly/IqT6zt")) //should return undefined.
console.log(addTogether(2, "3")) //should return undefined.
console.log(addTogether(2)([3])) //should return undefined.


