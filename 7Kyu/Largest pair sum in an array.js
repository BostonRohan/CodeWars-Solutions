function largestPairSum(numbers) {
  //Sort numbers in descending order
  numbers.sort((a, b) => b - a);
  //Add the first two numbers in the array since they are the largest pair.
  return numbers[0] + numbers[1];
}
largestPairSum([10, 14, 2, 23, 19])
//Psuedo Code
// sort numbers high to low
//return numbers[0] + numbers[1]

//Alternate Solution
function largestPairSum(numbers) {
  var num1;
  var num2;
  var sum = 0;
  num1 = Math.max(...numbers);
  numbers.splice(numbers.indexOf(num1), 1);
  num2 = Math.max(...numbers);
  sum = num1 + num2;
  return sum;
}
largestPairSum([10, 14, 2, 23, 19])


//Alternate Solution
function largestPairSum(numbers) {
  var num1 = Math.max(...numbers);
  numbers.splice(numbers.indexOf(num1), 1);
  var num2 = Math.max(...numbers);
  return num1 + num2;
}
largestPairSum([10, 14, 2, 23, 19])