function anagrams(word, words) {
  //Establish variable
  var ans = [];
  //Iterate over the words array.
  for (var i = 0; i < words.length; i++) {
    //If any of the sorted words, equal the sorted word.
    if (sort(words)[i] === sort(word)) {
      //Push the unsorted version onto the answer array.
      ans.push(words[i]);
    }
  }
  return ans;
}
//Helper function that sorts an input.
function sort(input) {
  //If the input is an array.
  if (typeof input === "object") {
    //Map over the array and sort it.
    input = input.map((x) => x.split("").sort().join(""));
    //Otherwise it is a string
  } else {
    //Sort the string
    input = input.split("").sort().join("");
  }
  return input;
}
anagrams("racer", ["crazer", "carer", "racar", "caers", "racer"]);

//Psuedo Code
//Input : The word as a string, as well as an array of words.

//Helper function
//Sorts both inputs alphabetically.

//Main function
//Establish variable
//Iterate through the array
//If the two sorted words equal
//Push it from the original array.
