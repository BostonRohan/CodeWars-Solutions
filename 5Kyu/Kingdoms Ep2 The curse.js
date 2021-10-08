function translate(speech, vocabulary) {}
function checkLength(speech, vocabulary) {
  let speechWordLength = speech
    .replace(/[?!,.]/g, "")
    .split(" ")
    .map((word) => word.length);
  let vocabularyWordLength = vocabulary.map((word) => word.length);
}
console.log(checkLength("cell, weak!", ["hell", "cell", "week", "weak"]));
//Check length function
//Split the string by words.
//Check if there is punctuation on the speech string.
//If remove it from the string, but save its value.
//Check the length of each word in speech.
//Iterate through the the words in the vocabulary
//If the length is equal return true, it will be checked in main function
