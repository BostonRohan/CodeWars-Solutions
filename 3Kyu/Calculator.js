const Calculator = function () {
  this.evaluate = (string) => {
    //Splitting the string by each number/value.
    let arr = string.split(" ");
    //Checking to see if the string includes a pair of (+, /), (+, *), (-, *), (-, /)
    if (/[+--]/g.test(string) && /[*\/]/g.test(string)) {
      for (var i = 0; i < arr.length; i++) {
        //Only operating multiplication and division in order of operations.
        //Replacing the equation, with the answer to the equation.
        if (arr[i] === "/") {
          arr.splice(i - 1, 3, parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]));
          i = 0;
        }
        if (arr[i] === "*") {
          arr.splice(i - 1, 3, arr[i - 1] * arr[i + 1]);
          i = 0;
        }
      }
      //When done with multiplication and division, operate the addition and subtraction if necessary.
      return operate(arr);
    }
    //Otherwise just operate, don't worry about order of operations.
    else {
      return operate(arr);
    }
    //Function that iterates through and replaces every equation with its subsequent answer.
    function operate(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "*") {
          arr.splice(i - 1, 3, parseFloat(arr[i - 1]) * parseFloat(arr[i + 1]));
          i = 0;
        } else if (arr[i] === "/") {
          arr.splice(i - 1, 3, parseFloat(arr[i - 1]) / parseFloat(arr[i + 1]));
          i = 0;
        } else if (arr[i] === "+") {
          arr.splice(i - 1, 3, parseFloat(arr[i - 1]) + parseFloat(arr[i + 1]));
          i = 0;
        } else if (arr[i] === "-") {
          arr.splice(i - 1, 3, parseFloat(arr[i - 1]) - parseFloat(arr[i + 1]));
          i = 0;
        }
      }
      let answer = 0;
      //If the answer has a decimal, preserve the decimal values.
      //Otherwise return the string as an integer.
      arr.join("").includes(".")
        ? (answer = parseFloat(arr.join("")))
        : (answer = parseInt(arr.join("")));
      return answer;
    }
  };
};
var calculate = new Calculator();
