function highAndLow(numbers){
  //Establishing variable.
    var answer = [];
    //Splitting the number into an array.
    var arr = numbers.split(" ");
    //Inserting the max number and the min number into the new arr.
     answer.push(Math.max(...arr),Math.min(...arr));
     //Returning the new array, as a string.
     return answer.join(" ");
    }
  highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")
//Alternate Solution
  function highAndLow(numbers){
    //Splitting the numbers into an array, sorting the array in descending  order.
    numbers = numbers.split(' ').sort((a,b) => a - b);
    //Returning the highest and lowest numbers, joined into a string.
    return [numbers[numbers.length-1], numbers[0]].join(' ');
  }
highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")