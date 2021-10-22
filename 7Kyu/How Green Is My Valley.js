function makeValley(arr) {
    //Sorting the array in ascending order.
    arr.sort((a, b) => a - b);
    //Declaring variable, which is an empty array.
    var newArr = [];
    //Iterating through array.
    for (var i = 0; i < arr.length; i++) {
        //Checking to see if i is even.
        if (i % 2 === 0) {
            //Adding the element at position i to the end of the new array.
            newArr.push(arr[i]);
        }
        //Fixing the error with lengths that are even.
        else if (arr.length % 2 === 0) {
            newArr.unshift(arr[i])
        }
        //Checking to see if the number on the right side is greater than an number on the left.
        //Setting a case so the loop doesn't iterate out of bounds.
        else if ((arr[i] < arr[i + 1]) && (i < arr.length)) {
            //Adding the number on the left side to the right side, to balance the wings.
            newArr.push(arr[i]);
            //Adding the number on the right side to the left side, to balance the wings.
            newArr.unshift(arr[i + 1]);
            //Skipping an iteration, since the following number is of the same value.
            i = i + 1;
        } else {
            //Adding the number at position i to the beginning of the array.
            newArr.unshift(arr[i]);
        }
    }
    return newArr;
}
makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]);


//Psuedo Code

//    testing(makeValley([17, 17, 15, 14, 8, 7, 7, 5, 4, 4, 1]), [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]);
//    testing(makeValley([20, 7, 6, 2],[20, 6, 2, 7]);
//First sort the array from smallest to biggest
//sort array numerically javascript... google

//declare newArr 

// arr = [1 , 4 ,4, 5, 7, 7, 8, 14, 15, 17 ,17, *20] doesnot exist   there is no i =+ 1 we will get an error


//iterate through the sorted array.   // i== 11

//if statement... if i is even
// add pos[i] to end of newArr     --aka right side

//  esleif i is odd

// if (arr[i] < arr[i+1]) && (i > arr.length)
//then add arr[i] to end of newArr
//and add arr[i+1] to begining of newArr
//and now make i = i+1
//   else            
//      add pos[i] to begining of arr    --aka left side  

//newArr === [17, 15, 8, 7, 4, 1, 4, 5, 7, 14, 17]

//return newArr        