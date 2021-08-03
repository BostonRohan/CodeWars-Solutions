function rgb(r, g, b) {
  return [toHex(r), toHex(g), toHex(b)].join("");
}
function toHex(num) {
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
  if (num <= 0) {
    ans = ["00"];
    return ans;
  } else {
    num > 255 ? (num = 255) : (num = num);
    var hex = num / 16;
    var remainder = "0." + hex.toString().split(".")[1];
    return [Math.floor(hex), parseFloat(remainder * 16)]
      .map((num) => conversion[num])
      .sort()
      .join("");
  }
}
console.log(rgb(105, 114, 279));
//Psuedo Code
//Create an object that stores the Decimal, and Hexidecimal pairs, with the key value being the Decimal, and the Hexidecimal being the value.
//Send each number through toHex function, which will return the two converted values.
//To convert, divide the first number by 16, and round down.
//To get second value, multiply the remainder by 16.

//Sort each array in place and return them joined together.

//RGB to HEX reference: https://www.binaryhexconverter.com/decimal-to-hex-converter

//*Hex color codes can be more compact using three digits for some colors*
