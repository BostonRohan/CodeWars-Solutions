function groupByCommas(n) {
  //Check to see if the the number has less than three digits, if it does return the number in string format, otherwise, send the number into the insertCommas function.
  return n.length <= 3 ? n.toString() : insertCommas(n);
}

function insertCommas(n) {
  //Turn the string into a reversed array.
  n = n.toString().split("").reverse();
  //Iterate over the array.
  for (var i = 0; i < n.length; i++) {
    //If it is a collection of three numbers disregarding zero. Place a comma after the third number.
    if (i % 3 === 0 && i > 0) {
      n[i] = n[i] + ",";
    }
  }
  //Reverse the array and join it into a string.
  return n.reverse().join("");
}
groupByCommas(1000000);

//Psuedo Code
//Main function that returns a number with commas if necessary.
//The number is only going to be up to eight digits long, at max there can only be three commas.
//Check edge cases, if the length of the number is >= 3 then we don't need any commas, return n.toString()
//Otherwise return insert commas function

//Insert commas function, will look for a grouping of three digits.
//Find the three digits, and place a comma in behind it.
//Reverse and loop through the numbers
//Establish count that holds value of i.
//If count % 3 == 0
//Place a comma after the last digit in the grouping of digits.
