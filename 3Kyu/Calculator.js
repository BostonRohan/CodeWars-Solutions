const Calculator = function () {
  this.evaluate = (string) => {
    if (/[+--]/g.test(string) && /[*\/]/g.test(string)) {
      string = string.split(" ");
      var multPosition = string.indexOf("*"),
        divPosition = string.indexOf("/");
      //Check position before while loop.
      //Possibly seperate while loops for mult and div?
      //Possibly one while loop from the operate function?
      while (divPosition && multPosition > 0) {
        divPosition < multPosition
          ? string.splice(
              divPosition - 1,
              3,
              parseInt(string[divPosition - 1]) /
                parseInt(string[divPosition + 1])
            )
          : string.splice(
              multPosition - 1,
              3,
              divPosition - 1,
              3,
              parseInt(string[multPosition - 1]) *
                parseInt(string[multPosition + 1])
            );
      }
      return string;
    } else {
      return operate(string);
    }
    function operate(string) {
      string = string.split(" ");
      for (var i = 0; i < string.length; i++) {
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
console.log(calculate.evaluate("2 / 2 + 3 * 4 - 6"));

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
