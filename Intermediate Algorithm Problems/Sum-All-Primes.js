/* Sum all the prime numbers up to and including the provided number. */

function PrimeCheck(num){
	for(var i =2; i<num; i++){
		if(num%i === 0) return false
	}
	return true
}

function sumPrimes(num) {
	var arr = []
	for(var i=2; i<=num;i++){
		if(PrimeCheck(i)) arr.push(i)
	}
	return arr.reduce(function(acc,item){ return acc + item}) 
}

console.log(sumPrimes(10)) //should return 17.
console.log(sumPrimes(977)) //should return 73156.

