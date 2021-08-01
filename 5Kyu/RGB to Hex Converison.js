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
    r < 16 ? r = toHex(r) : r = r[conversion];
    g < 16 ? g = toHex(g) : g = g[conversion];
    b < 16 ? b = toHex(b) : b = b[conversion];
}
function remainder(num)
function toHex(num) {
    num = num / 16;
    var remainder = 
    while(parseFloat(num.ToString()) > 16){
        num = num /16;
        remainder = 
    }
}
console.log(toHex(300, 255, 255));
//Psuedo Code
//Create an object that stores the Decimal, and Hexidecimal pairs, with the key value being the Decimal, and the Hexidecimal being the value.
//To convert, divide the first number by 16

//Helper function that takes in the given parameter
//Divide the number by 16, record the remainder and digits before decimal using split.
//While loop
    //While the numbers before the decimal are greater than 16
        //Divide it by 16
        //Each time through the record the remainder

//Return the numbers from most significant to least.
    


//RGB to HEX reference: https://www.binaryhexconverter.com/decimal-to-hex-converter

//*Hex color codes can be more compact using three digits for some colors*
