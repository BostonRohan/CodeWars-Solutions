function coolString(s) {
  //Split the string into an array.
  s = s.split('');
  //If the length is less than or equal to one return false.
  if(s.length <= 1) return false;
  //Iterate through the string
  for (let i = 0; i < s.length - 1; i++) {
    //Check if a letter is lowercase or uppercase, then check it's following position.
    if (s[i] === s[i].toLowerCase() && s[i + 1] === s[i + 1].toLowerCase()) return false;
    if (s[i] === s[i].toUpperCase() && s[i + 1] === s[i + 1].toUpperCase()) return false;
    //If the character is not a letter.
    if(typeof s[i] !== 'string') return false;
  }
return true;
}
coolString("aQwFdA");