function rgb(r, g, b) {
  const conversion = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };
  (r = checkInput(r)), (g = checkInput(g)), (b = checkInput(b));
  var hex = [
    conversion[r],
    conversion[g],
    conversion[b],
    conversion[r],
    conversion[g],
    conversion[b],
  ];
  return hex.join("");
}
function toHex(num) {
  num = num / 16;
  var decimalSplit = num.toString().split(".");
  var remainder = "0." + decimalSplit[1];
  var hexValue = parseFloat(remainder) * 16;
  return hexValue;
}
console.log(rgb(148, 0, 211));
//Psuedo Code
//Create an object that stores the Decimal, and Hexidecimal pairs, with the key value being the Decimal, and the Hexidecimal being the value.
//To convert, divide the first number by 16

//Create a check RGB function that will check the input

//Fix logic on toHex function, certain values should be returning two different numbers. i: 148 returns (9, 4)
//Helper function that takes in the given parameter
//Divide the number by 16, record the remainder and digits before decimal using split.

//Return the numbers from most significant to least.

//RGB to HEX reference: https://www.binaryhexconverter.com/decimal-to-hex-converter

//*Hex color codes can be more compact using three digits for some colors*
