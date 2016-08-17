/* Make a function that looks through an array of objects (first argument) and returns 
an array of all objects that have matching property and value pairs (second argument). 
Each property and value pair of the source object has to be present in the object from the 
collection if it is to be included in the returned array. */


function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
// Only change code below this line
  arr = collection.filter(function(item) {
  		// loop though the item keys in source and check to see if they exist in the item object
  		for(var found in source){
  			if(item[found] != source[found]) return false; //if they dont match up return false
  		}
  		return true; //if all the items match up return true
  	});
  // Only change code above this line
  return arr;

}


//Test Case

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 }); 

// Should Return [{ "a": 1, "b": 2, "c": 2 }]
