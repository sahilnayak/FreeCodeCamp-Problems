/* Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than 
or equal to num. */

function sumFibs(num) {
var arr = [1]

for(var i =1; i<=num;){
	arr.push(i)
	i = arr[arr.length-2] + arr[arr.length-1]
}
return arr.reduce(function(acc,item){
		if(item%2!==0) return acc + item
		else return acc
	});
}


//Test Cases
console.log(sumFibs(1)) //should return a number.
console.log(sumFibs(1000)) //should return 1785.
console.log(sumFibs(4000000)) //should return 4613732.
console.log(sumFibs(4)) //should return 5.
console.log(sumFibs(75024)) //should return 60696.
console.log(sumFibs(75025)) //should return 135721.