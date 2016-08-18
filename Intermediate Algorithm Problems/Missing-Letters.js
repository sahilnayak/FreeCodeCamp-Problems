/* Find the missing letter in the passed letter range and return it. */


function fearNotLetter(str) {

	var firstVal = str.charCodeAt(0);

	for (var i = 1; i < str.length; i++) {
		if (firstVal + i !== str.charCodeAt(i)) {
			return String.fromCharCode(firstVal + i);
		}
	}
	return undefined;
	
	// for(var i = 0; i<str.length; i++) {
	// 	console.log(i);
	// 	console.log(i+1);
	// 	console.log(str.charAt(i));
	// 	console.log(str.charAt(i+100));
	// 	//console.log(str.charCodeAt(i+1) - str.charCodeAt(i))
	// 	//console.log(str.charCodeAt(i+1) - str.charCodeAt(i) > 1)
	// 	if(str.charCodeAt(i+1) - str.charCodeAt(i) > 1) {
	// 		return String.fromCharCode(str.charCodeAt(i)+1);
	// 	 }
	// }
	
	//  return str;
}



//fearNotLetter("abce");

console.log(fearNotLetter("abce")) //should return "d".
console.log(fearNotLetter("abcdefghjklmno")) //should return "i".
console.log(fearNotLetter("bcd")) //should return undefined.
console.log(fearNotLetter("yz")) //should return undefined.