function translate(speech, vocabulary) {
  let speechArr = speech.replace(/[^*A-Za-z0-9\s]/g, "").split(" ");
  let phrase = [];
  let punctuationData = savePunctuation(speech);
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
  //Iterate through the object and place the appropriate punctuation at it's appropriate index.
  return phrase.join(' ');
}
function savePunctuation(speech){
  let punctuation = [];
  let index = [];
  for(var i = 0; i < speech.length; i++){
    if((/[^*A-Za-z0-9\s]/g.test(speech[i]))){
      punctuation.push(speech[i]);
      index.push(i);
    }
  }
  //Merge the two arrays into an object.
  return punctuation;
}
console.log(translate("***lo ..!w***d!", ["hello", "world"]));
