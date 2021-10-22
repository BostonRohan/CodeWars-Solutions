//Main function that returns a string of all of the Hex Conversions.
function rgb(r, g, b) {
  return [toHex(r), toHex(g), toHex(b)].join("");
}
//Helper function that converts a number to Hex.
function toHex(num) {
  //Object storing the decimal and Hex values.
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
  //If the number is less than or equal to 0, return 00 as the Hex.
  if (num <= 0) {
    return "00";
  }
  //If the number is greater than 255 cap it off at 255. *Hex values cannot be above 255*.
  num > 255 ? (num = 255) : (num = num);
  //Establish variables
  var hex = num / 16;
  var remainder = "0." + hex.toString().split(".")[1];
  //If there is no remainder, then assign it to zero.
  hex % 1 == 0 ? (remainder = 0) : (remainder = remainder);
  //Return the calculations of the Hex and remainder values, mapped with their respective conversions, joined into a string.
  return [Math.floor(hex), parseFloat(remainder * 16)]
    .map((num) => conversion[num])
    .join("");
}
rgb(173, 255, 47);

//Psuedo Code
//Create an object that stores the Decimal, and Hexidecimal pairs, with the key value being the Decimal, and the Hexidecimal being the value.
//Send each number through toHex function, which will return the two converted values.
//To convert, divide the first number by 16, and round down.
//To get second value, multiply the remainder by 16.
//Map the conversion and return as a string.

//RGB to HEX reference: https://www.binaryhexconverter.com/decimal-to-hex-converter

//*Hex color codes can be more compact using three digits for some colors*
