//If Bob flips it right, the array moves in ascending order.
//If Bob flips it left, the array moves in descending order.
//Use of ternary operator to check the condition.
const flip = (d, a) => {
    d == 'R' ? a = a.sort(function (x, b){return x - b}) :  a = a.sort(function (y, c){return c - y}); return a;
}
flip('R', [3, 2, 1, 2])

// +---+                                       +---+
// |   |                                       |   |
// +---+                                       +---+
// +---++---+     +---+              +---++---++---+
// |   ||   |     |   |   -->        |   ||   ||   |
// +---++---+     +---+              +---++---++---+
// +---++---++---++---+         +---++---++---++---+
// |   ||   ||   ||   |         |   ||   ||   ||   |
// +---++---++---++---+         +---++---++---++---+