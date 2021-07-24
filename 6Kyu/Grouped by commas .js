function groupByCommas(n) {
  return n.length <= 3 ? n.toString() : insertCommas(n);
}

function insertCommas(arr) {
  var insertCommas = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i].length === 3) {
      insertCommas.push(arr[i], ",");
    } else {
      insertCommas.push(arr[i]);
    }
  }
  return insertCommas.reverse().flat().join("");
}
console.log(groupByCommas(1, 000, 000));

//Psuedo Code
//Main function that returns a number with commas if necessary.
//The number is only going to be up to eight digits long, at max there can only be three commas.
//Check edge cases, if the length of the number is >= 3 then we don't need any commas, return n.toString()
//Otherwise return insert commas function

//Insert commas function, will look for a grouping of three digits.
//Find the three digits, and place a comma in front of it.
//Loop through the numbers
//Establish count that holds value of i.
//If count % 3 == 0
//Push those numbers onto a new array, then push on the comma following it.
//Return the new number
