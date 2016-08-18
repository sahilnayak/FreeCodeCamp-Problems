/* Translate the provided string to pig latin. */


function translatePigLatin(str) {

var regex = /[aeiou]/;
  
  if(str[0].match(regex)) {
  	  str = str + 'way';
  }

  else{
  	var index = str.indexOf(str.match(regex));
  	str = str.substring(index,str.length) + str.substring(0,index) + 'ay';
  }

  return str;
}

//translatePigLatin("consonant");



//Note to self, there is a way to solve this problem recursively, !EXTRA CREDIT!


//Test Cases
translatePigLatin("california") //should return "aliforniacay".
translatePigLatin("paragraphs") //should return "aragraphspay".
translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
translatePigLatin("eight") //should return "eightway".