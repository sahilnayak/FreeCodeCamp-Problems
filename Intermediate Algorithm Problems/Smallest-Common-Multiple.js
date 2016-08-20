/*Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
as well as by all sequential numbers in the range between these parameters.*/

function smallestCommons(arr) {
	var holder = []
	arr = arr.sort(function(a,b){ return a-b})

	for(let i = arr[0]; i<=arr[1]; i++){
		holder.push(i)
		
	}
	
	var lcm = holder[0]

	for(let i = 1; i<holder.length; i++){
		var GDC = gcd(lcm,holder[i])
		lcm = (lcm * holder[i])/GDC
	}

  return lcm;

	function gcd(x,y){
		if(y===0) return x
		else return gcd(y,x%y)
	}
}



// console.log(smallestCommons([1, 5])) //should return 60.
// console.log(smallestCommons([5, 1])) //should return 60.
console.log(smallestCommons([1, 13])) //should return 360360.
console.log(smallestCommons([23, 18])) //should return 6056820.



