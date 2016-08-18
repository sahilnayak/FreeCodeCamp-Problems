/*The DNA strand is missing the pairing element. Take each character, get its pair, and 
return the results as a 2d array. */


function pairElement(str) {
  var pairing = {"A":"T","T":"A","C":"G","G":"C"}
  var newArray = []
  str = str.split("")
  console.log(str)

  for(var i = 0; i<str.length; i++) console.log(i)


  return str;
}

pairElement("GCG");

pairElement("ATCGA") //should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG") //should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA") //should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].




