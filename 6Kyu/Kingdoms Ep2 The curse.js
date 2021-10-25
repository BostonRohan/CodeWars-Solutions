function translate(speech, vocabulary) {
  //Removing punctuation and splitting into an array.
  let speechArr = speech.replace(/[^*A-Za-z0-9\s]/g, "").split(" ");
  let phrase = [];
  let punctuationData = savePunctuation(speech);
  speechArr.forEach((word) => {
    vocabulary.forEach((vocabWord) => {
      //If the vocab word and the speech word are the same length, start looking for matches.
      if (vocabWord.length === word.length) {
        let match = 0;
        for (var i = 0; i < word.length; i++) {
          //If the letters are equal or speech letter is an asterik, then there is a match.
          if (word[i] === vocabWord[i] || word[i] === "*") {
            match++;
            //If match equals the length of the word then we have a matched word, push the vocab word into a new array.
            match === word.length ? phrase.push(vocabWord) : match;
          } else {
            match = 0;
          }
        }
      }
    });
  });
  if (!phrase) {
    return "";
  } else {
    phrase = phrase.join(" ").split("");
    //Adding punctuation in at given index.
    for (index in punctuationData) {
      phrase.splice(index, 0, punctuationData[index]);
    }
  }
  return phrase.join("");
}
function savePunctuation(speech) {
  let punctuation = [];
  let punctuationIndex = [];
  for (var i = 0; i < speech.length; i++) {
    //If the character is not a letter or number, save it and it's index.
    if (/[^*A-Za-z0-9\s]/g.test(speech[i])) {
      punctuation.push(speech[i]);
      punctuationIndex.push(i);
    }
  }
  //Merge the two arrays into an object with the index functioning as the key, and punctuation as the value.
  let punctuationObj = punctuation.reduce(function (
    punctuationObj,
    field,
    index
  ) {
    punctuationObj[punctuationIndex[index]] = field;
    return punctuationObj;
  },
  {});
  return punctuationObj;
}
translate("c**l, w*ak!", ["hell", "cell", "week", "weak"]);
