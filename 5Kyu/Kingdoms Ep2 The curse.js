function translate(speech, vocabulary) {
  let speechLetters = speech.replace(/[^A-Za-z0-9\s]/g, "").split("");
  let phrase = [];
  for (var i = 0; i < speechLetters.length; i++) {
    for (var j = 0; j < vocabulary.length; j++) {
      console.log(phrase, vocabulary[j], speechLetters[i]);
      if (vocabulary[j].includes(speechLetters[i])) {
        phrase.push(vocabulary[j]);
      }
    }
  }
  return phrase;
}

console.log(translate("c**l, w*ak!", ["hell", "cell", "week", "weak"]));

//Check if a word in vocaublary contains the available words in speech
//If so push the word in vocabulary into the phrase
//Start on the next word and repeat
//Repeat until there are no words left in speech.
