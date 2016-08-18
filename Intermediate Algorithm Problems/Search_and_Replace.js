/* Perform a search and replace on the sentence using the arguments provided and return the
 new sentence. */



 function myReplace(str, before, after) {
 	str = str.split(" ");

 	str.forEach(function(item,index){
 		if(item === before) {
 			if(item[0] == item[0].toUpperCase()) str[index] = after[0].toUpperCase() + after.substring(1,after.length);
 			else str[index] = after;
 		}
 		
 	});

 	str = str.join(" ");
console.log(str)
  return str;
}


// Test Cases
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
myReplace("Let us go to the store", "store", "mall") //should return "Let us go to the mall".
myReplace("He is Sleeping on the couch", "Sleeping", "sitting") //should return "He is Sitting on the couch".
myReplace("This has a spellngi error", "spellngi", "spelling") //should return "This has a spelling error".
myReplace("His name is Tom", "Tom", "john") //should return "His name is John".
myReplace("Let us get back to more Coding", "Coding", "algorithms") //should return "Let us get back to more Algorithms".