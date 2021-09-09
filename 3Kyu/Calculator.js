const Calculator = function () {
  this.evaluate = (string) => {
    if (/[+--]/g.test(string) && /[*\/]/g.test(string)) {
      var multIndex = [],
        divIndex = [];
      let arr = string.split(" ");
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "/") {
          divIndex.push(i);
        } else if (arr[i] === "*") {
          multIndex.push(i);
        }
      }
      return operate(string, multIndex, divIndex);
    } else {
      return operate(string);
    }
    function operate(string, multIndex, divIndex) {
      //For loop to check both multIndex and divIndex, use while loop later...
      let arr = string.split(" ");
      let i = 0;
      if (Math.min(...multIndex) > Math.min(...divIndex)) {
        while (divIndex.length > 0) {
          divIndex.splice(i, i);
          arr.splice(arr[divIndex - 1] / arr[divIndex + 1]);
          i++;
        }
      }
      //   for (var i = 0; i < arr.length; i++) {
      //     if (arr[i] === "*" && arr[i + 1] && arr[i - 1]) {
      //       arr.splice(i - 1, 3, parseInt(arr[i - 1]) * parseInt(arr[i + 1]));
      //       i = 0;
      //     } else if (arr[i] === "/" && arr[i + 1] && arr[i - 1]) {
      //       arr.splice(i - 1, 3, parseInt(arr[i - 1]) / parseInt(arr[i + 1]));
      //       i = 0;
      //     } else if (arr[i] === "+" && arr[i + 1] && arr[i - 1]) {
      //       arr.splice(i - 1, 3, parseInt(arr[i - 1]) + parseInt(arr[i + 1]));
      //       i = 0;
      //     } else if (arr[i] === "-" && arr[i + 1] && arr[i - 1]) {
      //       arr.splice(i - 1, 3, parseInt(arr[i - 1]) - parseInt(arr[i + 1]));
      //       i = 0;
      //     }
      //   }
      //   return arr.join("");
    }
  };
};
var calculate = new Calculator();
console.log(calculate.evaluate("2 / 2 + 3 * 4 - 6"));

//Psuedo Code
//Two arrays with multindex and div index. Check both in a loop.
//Check if the index of one is less than the other, if so operate on the lesser index.
//{Refactor possibly with while loop?}
//Check that the arr contains both multiplication/division and addition/subtraction
//If not operate left to write
//Otherwise
//(Figure out how to account for order of operations)
//Send it to the operate function

//Function operate()
//Create a switch statement that operates given each operation sign
//Store all of the answers in an array
