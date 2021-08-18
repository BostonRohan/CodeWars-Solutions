var moveZeros = function (arr) {
  //Establishing variables
  var itemArr = [],
    zeros = [];
  //Iterating over array.
  for (var i = 0; i < arr.length; i++) {
    //If the element is a zero push it onto the zeros array.
    if (arr[i] === 0) {
      zeros.push(arr[i]);
      //Otherwise push it onto the item array.
    } else {
      itemArr.push(arr[i]);
    }
  }
  //Concat the zeros array.
  return itemArr.concat(zeros);
};
moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]);

//Pusedo Code
//Make an array that holds the zeros, and the other elements.
//Loop through the elements.
//Push the zeros onto one array, and the other elements onto another array.
//Concat the elements and return them.
