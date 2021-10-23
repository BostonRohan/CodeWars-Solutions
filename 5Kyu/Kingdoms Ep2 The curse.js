function translate(speech, vocabulary) {
  let speechArr = speech.replace(/[^*A-Za-z0-9\s]/g, "").split(" ");
  let phrase = [];
  speechArr.forEach(word => {
    vocabulary.forEach((vocabWord, index) => {
      if(vocabWord.length === word.length){
        let match = 0;
        for(var i = 0; i < word.length; i++){
          if(word[i] === vocabWord[i] || word[i] === '*'){
            match++;
            match === word.length ? phrase.push(vocabWord) : match;
          }
          else{
            match = 0;
          }
        }
      }
    });
  });
  return phrase.join(' ');
}
console.log(translate("***lo w***d!", ["hello", "world"]));

//Check if a word in vocaublary contains the available words in speech
//If so push the word in vocabulary into the phrase
//Start on the next word and repeat
//Repeat until there are no words left in speech.
