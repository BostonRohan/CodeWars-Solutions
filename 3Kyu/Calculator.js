const Calculator = function () {
  this.evaluate = (string) => {
    var multiplyDivide = [],
      addSubtract = [];
    const formatted = string.split(" ").join("").split("");
    for (var i = 0; i < formatted.length; i++) {
      console.log(typeof parseInt(formatted[i]));
      if (
        formatted[i] === "/" &&
        Number.isInteger(parseInt(formatted[i + 1]))
      ) {
        multiplyDivide.push(formatted[i + 1] + formatted[i]);
      } else if (
        formatted[i] === "*" &&
        Number.isInteger(parseInt(formatted[i + 1]))
      ) {
        multiplyDivide.push(formatted[i + 1] + formatted[i]);
      } else if (
        formatted[i] === "+" &&
        Number.isInteger(parseInt(formatted[i + 1]))
      ) {
        addSubtract.push(formatted[i + 1], formatted[i]);
      } else if (
        formatted[i] === "-" &&
        Number.isInteger(parseInt(formatted[i + 1]))
      ) {
        addSubtract.push(formatted[i + 1], formatted[i]);
      }
    }
  };
};
var calculate = new Calculator();
console.log(calculate.evaluate("10 * 5 / 2"));

//Psuedo Code
//Check that the string contains both multiplication/division and addition/subtraction
//If not operate left to write
//Otherwise
//(Figure out how to account for order of operations)
//Send it to the operate function

//Function operate()
//Create a switch statement that operates given each operation sign
//Store all of the answers in an array
