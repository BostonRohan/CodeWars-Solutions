const Calculator = function () {
  this.evaluate = (string) => {
    if (/[+--]/g.test(string) && /[*\/]/g.test(string)) {
      return "yes nigga";
    } else {
      return operate(string);
    }
    function operate(string) {
      string = string.split(" ");
      for (var i = 0; i < string.length; i++) {
        console.log(string);
        if (string[i] === "*" && string[i + 1] && string[i - 1]) {
          string.splice(
            i - 1,
            3,
            parseInt(string[i - 1]) * parseInt(string[i + 1])
          );
          i = 0;
        } else if (string[i] === "/" && string[i + 1] && string[i - 1]) {
          string.splice(
            i - 1,
            3,
            parseInt(string[i - 1]) / parseInt(string[i + 1])
          );
          i = 0;
        } else if (string[i] === "+" && string[i + 1] && string[i - 1]) {
          string.splice(
            i - 1,
            3,
            parseInt(string[i - 1]) + parseInt(string[i + 1])
          );
          i = 0;
        } else if (string[i] === "-" && string[i + 1] && string[i - 1]) {
          string.splice(
            i - 1,
            3,
            parseInt(string[i - 1]) - parseInt(string[i + 1])
          );
          i = 0;
        }
      }
      return string.join("");
    }
  };
};
var calculate = new Calculator();
console.log(calculate.evaluate("30 + 23 + 77"));

//Psuedo Code
//{Refactor possibly with while loop?}
//Check that the string contains both multiplication/division and addition/subtraction
//If not operate left to write
//Otherwise
//(Figure out how to account for order of operations)
//Send it to the operate function

//Function operate()
//Create a switch statement that operates given each operation sign
//Store all of the answers in an array
