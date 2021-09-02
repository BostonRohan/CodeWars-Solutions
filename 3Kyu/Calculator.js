const Calculator = function () {
  this.evaluate = (string) => {
    var firstOperationEquation = [],
      secondOperationEquation = [];
    for (var i = 0; i < string.length; i++) {
      if (string[i] === "/" || string[i] === "*") {
        firstOperationEquation.push(string[i - 2], string[i], string[i + 2]);
      } else if (string[i] === "+" || string[i] === "-") {
        secondOperationEquation.push(string[i - 2], string[i], string[i + 2]);
      }
    }
    console.log(firstOperationEquation, secondOperationEquation);
  };
};
var calculate = new Calculator();
console.log(calculate.evaluate("2 / 2 + 3 * 4 - 6"));

//Psuedo Code

//Iterate through the string
//Look for multiplication and division signs.
//Send it to the operate function
//Then operate on addition and subtraction from left to right

//Function operate()
//Create a switch statement that operates given each operation sign
//Store all of the answers in an array
//Send all answers back to the main function
