function removeExclamationMarks(s) {
//Regex that removes exclamation marks and replaces them with a space.
    return s.replace(/!/g, ''); 
}
removeExclamationMarks("Hello World!");

