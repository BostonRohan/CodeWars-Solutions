function solve(arr) {
   //Establish variable
   var ans = [];
   //Iterate through the array
   for (var i = 0; i < arr.length; i++) {
      //If the element in the array only occurs once.
      if (arr.lastIndexOf(arr[i]) == i) {
         //Push it onto the new array.
         ans.push(arr[i]);
      }
   }
   return ans;
}
solve([3, 4, 4, 3, 6, 3]);

//Psuedo Code
//Establish variable ans = [];
//Iterate through the array.
//If the last index of arr[i] == i
//Then push the first instance of it onto the new arr.
//ans.push(arr[i])
//return ans