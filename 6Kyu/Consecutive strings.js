//Main function that checks the edge cases.
function longestConsec(strarr, k) {
    if (strarr.length == 0 || k > strarr.length || k <= 0) {
        return '';
    }
    return getLongestConsec(strarr, k);
}
//Helper function that returns the Longest Consecutives in strarr.
function getLongestConsec(strarr, k) {
    //Initializing variables
    var temp = '',
        ans = '';
    //Iterating through the section of the array, up to k.
    for (var i = 0; i < k; i++) {
        //Concatenating all elements in that section.
        ans += strarr[i];
    }
    //Assigning temp to ans.
    //At this point temp holds the value of ans, since at in that substring, it has the longest consecutives.
    temp = ans;
    //Iterating through the rest of the array.
    for (var i = k; i < strarr.length; i++) {
        //Assigning temp to the iteration, as well as deleting the previous iteration creating a sliding window.
        temp = temp.replace(strarr[i - k], '') + strarr[i];
        //Checking the lengths of the strings using the ternary operator. If temporary length is greater, then that is the answer, assign it to ans.
        //Otherwise, ans keeps the same value.
        temp.length > ans.length ? ans = temp : ans = ans;
    }
    return ans;
}
longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1)

//Psuedo Code
// Function longestConsec
//Will check to see if the parameters pass the edge cases
//The function will return an empty string, or return the value of getLongestConsec function.

//getLongestConsec helper function
//Using sliding window strategy