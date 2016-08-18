/* Translate the provided string to pig latin. */


function translatePigLatin(str) {

  if(str[0] === ("a" || "e" || "i" || "o" || "u")) {
  	str = str + 'way';
  }

  else{

  	str = str.split("");

  	str.forEach(function(i){


  	});
  	
  	console.log(str)
  }




  return str;
}

//translatePigLatin("consonant");






//Test Cases
translatePigLatin("california") //should return "aliforniacay".
//translatePigLatin("paragraphs") //should return "aragraphspay".
//translatePigLatin("glove") //should return "oveglay".
translatePigLatin("algorithm") //should return "algorithmway".
//translatePigLatin("eight") //should return "eightway".