/*The DNA strand is missing the pairing element. Take each character, get its pair, and 
return the results as a 2d array. */


function pairElement(str) {
  
  var newArray = []
  str = str.split("")

  for(var i = 0; i<str.length; i++){
  	if(str[i] == "A") newArray.push(["A","T"])
  	else if(str[i] == "T") newArray.push(["T","A"])
  	else if(str[i] == "C") newArray.push(["C","G"])
  	else if(str[i] == "G") newArray.push(["G","C"])
  }
  
  return newArray;
}

//pairElement("GCG");

pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
//pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
//pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].




