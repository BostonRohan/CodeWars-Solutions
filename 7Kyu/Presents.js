function presents(a) {
  //Creating an array the length of the string.
  var ans = new Array(a.length);
  //Iterating through the array.
  for (var i = 0; i < a.length; i++) {
    //Deleting the last position, and replacing it with the following position.
    ans.splice(a[i] - 1, 1, i + 1);
  }
  return ans;
}
presents([2, 3, 4, 1]);


//The friend 1 gave gift to the friend 2 (a[1] == 2) - this means that in the output array number 1 is at position 2 : [_, 1, _, _].
//The friend 2 gave gift to the friend 3 (a[2] == 3) - this means that in the output array number 2 is at position 3 : [_, 1, 2, _].
//The friend 3 gave gift to the friend 4 (a[3] == 4) - this means that in the output array number 3 is at position 4 : [_, 1, 2, 3].
//The friend 4 gave gift to the friend 1 (a[4] == 1) - this means that in the output array number 4 is at position 1 : [4, 1, 2, 3].

//Alternate Solution Psuedo Code
//ans = new Array(a.length)
//iterate through a
//On first iteration
// i = 0 [4 empty items]
//Second iteration
// i = 1 [empty, empty, 1, empty]
//Third iteration
// i = 2
//[empty, empty, 1,2]
//Fourth iteration
//i = 3
//[empty, empty, 1, 2, 3]
//Last iteration
// i = 4 [empty, 4, 1, 2, 3]
//return ans.filter(Boolean)
//ans = 4, 1, 2, 3