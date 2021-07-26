function anagrams(word, words) {
  (word = sort(word)), (words = sort(words));
}

function sort(word, words) {
  word = word.split("").sort().join("");
  words = words.map((x) => x.split("").sort().join(""));
}
console.log(sort("abba", ["aabb", "abcd", "bbaa", "dada"]));

//Psuedo Code
//Input : The word as a string, as well as an array of words.
//Helper function that sorts both inputs.
//Makes checking anagrams a bit easier..

//Main function
//Iterate through array of words.
//Iterate through the word string.
//Check every letter in the string over each word in the array.
//"a" [aabb] "b" [aabb] "b" [aabb] "b" [aabb]
//If each letter is included then push it onto the answer array.
//Continue iterating through array.
//If there is a letter that is not included, then iterate over the entire word.
//Otherwise continue loop.
//Return the final array.
