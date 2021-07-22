//Final Answer
//Helper function that checks if the string is empty.
function empty(a) {
    if (a == "" || a === undefined) {
        return true;
    }
    return false;
}
//Helper function that checks to see if the word starts with 'I', or if the word starts with a lowercase.
function startsWith(x) {
    console.log(x[0])
    if (x[0] == x[0].toLowerCase() || x[0] == "I") {
        return true;
    }
    return false;
}
//Helper function that checks to see if the number of vowels is greater than or equal to the number of consonants.
function vowels(y) {
    //Establishing regex variables.
    var consonants = y.match(/[^aeiou]/gi);
    var vowels = y.match(/[aeiou]/gi);
    //Checking to see if the vowels match, is greater than or equal to the consonants match.
    if (vowels && consonants && vowels.length >= consonants.length) {
        return true;
    }
    return false;
}
//Main function that checks to see if any of the helper functions returned true.
function i(word) {
    //If the helper functions returned true, then it is an invalid word.
    if (vowels(word) || empty(word) || startsWith(word)) {
        return "Invalid word";
    }
    //Otherwise add 'i' to the beginning of the word.
    return "i" + word;
}
i('Phone')
// //Initial answer false answer.
// var answer = false;
// function empty(a) {

//     //strong type ===
//     if (a == "" || a === undefined) {
//         answer = true;
//     }
// }

// function startsWith(x) {
//     var xArr = x.split("");
//     for (var i = 0; i < xArr.length; i++) {
//         if (xArr[0] === xArr[0].toLowerCase() || xArr[0] == "I") {
//             answer = true;
//         }
//     }
//     return answer;
// }

// function vowels(y) {
//     //y in matching.. didn't follow rule two..
//     var consonants = y.match(/[^aeiouy]/gi);
//     var vowels = y.match(/[aeiouy]/gi);

//     //started out using an array but then switched strategies but didn't account for data type change
//     //.includes does not work with string 
//     if (y.includes(vowels) || y.includes(consonants)) {
//         if (vowels.length >= consonants.length) {
//             answer = true;
//         }
//     }
//     return answer;
// }

// //misuse of switch but creative ...
// function i(word) {
//     switch (true) {
//         case vowels(word):
//             return "invalod";
//             break; 
//         case empty(word):
//             return "invalod";
//             break; 
//         case startsWith(word):
//             return "Invalid word";
//             break; 
//         default:
//             return "i" + word;
//     }
// }
// function i(word) {
//     if(vowels(word) || empty(word) || startsWith(word) ){
//         return "Invalid word";
//     }
//      return "i" + word;
// }