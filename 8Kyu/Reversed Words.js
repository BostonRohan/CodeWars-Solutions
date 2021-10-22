function reverseWords(str){
  //Turning the string into an array, reversing the array, and joining the array back into a string.
    return str.split(" ").reverse().join(" ");
  }
  reverseWords("Hello world!")

//Solving using for loop
function reverseWords(str){
    var newArr = [];
    var arr = str.split(" ");
    //Iterating through the array backwards,by setting the variable to the element at the last position.
    for (var i = arr.length-1; i >=0; i--){
    newArr.push(arr[i]);
    }
    return newArr.join(" ");
}
reversedWords("Hello world!")