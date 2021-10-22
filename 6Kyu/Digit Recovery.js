//Dictionary (Pre-Sorted Alphabetically)
const numbersAsStrings = {
  'EORZ': 0,
  'ENO': 1,
  'OTW': 2,
  'EEHRT': 3,
  'FORU': 4,
  'EFIV': 5,
  'ISX': 6,  
  'EENSV': 7,
  'EGHIT': 8,
  'EINN': 9
};

//Helper function that will take the string as it's parameter and return an array containing the data splits 3, 4 and 5.
function splitData(str){
//record first three letters  (str.slice(i, i + 3)
//record first four letters   (str.slice(i, i + 4)
//record first five letters   (str.slice(i, i + 5)
  var words = [];
  for (var i = 0; i < str.length; i+=1){
    if((str.slice(i, i + 3)).length === 3){words.push(str.slice(i, i + 3))};
    if((str.slice(i, i + 4)).length === 4){words.push(str.slice(i, i + 4))};
    if((str.slice(i, i + 5)).length === 5){words.push(str.slice(i, i + 5))};
  }
  return words;
}
//Helper function that sorts the data set in alphabetical order.
function sortString(data) {
  return data.split('').sort().join('');
}
//Helper function that compares the keys in the dictionary to the data set of sorted words; returning the value at the given word.
function inDictionary(words){
  //Establishing variable
  var answer = "";
  //Finding the key values in the dictionary.
  var numberKeys = Object.keys(numbersAsStrings);
  //Iterating through the data set of scrambled words.
  for (var j = 0; j < words.length; j++){
    //If the keys are equal to any of the sorted words.
    if (numberKeys.includes(sortString(words[j]))){
      //Assigning answer to the value at that given word.
      answer = answer + numbersAsStrings[sortString(words[j])];
    };
  }
  return answer;
}
//Main function
//Function which takes the scrambled words and passes them through the helper functions, returning the value of the inDictionary helper function.
function recover(scrambledWords) {
  //Establishing variable
  var answer = "";
  //Assigning unscrambled words to the split data set.
  var unscrambledWords = splitData(scrambledWords);
  //Assigning the answer to the return value of the dictionary check.
  answer = inDictionary(unscrambledWords);
  //If no words can be recovered.
  if (answer.length === 0){
    return "No digits found";
  }
  return answer;
}
recover("NEOTWONEINEIGHTOWSVEEN")
