function largestCrossSum(matrix) {
    //Establish variable
    var answer = 0;
    //Iterate through the row, and find the sum.
    for (var i = 0; i < matrix.length; i++) {
        var sumRow = matrix[i].reduce((a, b) => a + b, 0);
        //Start iteration through the column.
        for (var j = 0; j < matrix[i].length; j++) {
            //Establish variable
            var sumColumn = 0;
            //Iterate through the column.
            for (var k = 0; k < matrix.length; k++) {
                //If a number exsists in the row, and i != k to prevent shared value..
                if (matrix[k][j] && i != k) {
                    //Sum column equals the sum of the column.
                    sumColumn += matrix[k][j]
                }
            }
            //If the sum of the row + the sum of the column are larger than the answer, then it is the largest cross sum.
            if ((sumRow + sumColumn) > answer) {
                //Assigning the cross sum to answer.
                answer = sumRow + sumColumn;
            };
        }

    }
    return answer;
}
largestCrossSum([
    [1, 1, 1, 4, 1, 1, 1],
    [3, 3, 3, 3, 3, 3, 3],
    [1, 1, 1, 4, 1, 1, 1]
]);







//Attempted First Solution

// //Helper function that finds the sum of two arrays.
// function addArray(arr) {
//     var sum = arr.reduce(function (a, b) {
//         return a + b;
//     }, 0);
//     return sum;
// }
// //Helper function that finds the largest row in the matrix.
// function largestRow(matrix) {
//     var res = [];
//     var index = 0;
//     for (var i = 0; i < matrix.length; i++) {
//         res.push(addArray(matrix[i]));
//     }
//     index = res.indexOf(Math.max(...res));
//     return matrix[index];
// }
// //Helper function that makes a new array of columns in the matrix.
// function matrixColumns(matrix) {
//     var columns = [];
//     for (var i = 0; i < matrix.length; i++) {
//         for (var j = 0; j < matrix[i].length; j++) {
//             columns.push(matrix.map(x => x[j]));
//             //make another helper function which will do the below....
//             //if (matrix[i][j])  just to see if it exists.. 
//             //then add into a temp column total
//             //then push that total to columns
//         }
//         return columns;
//     }
// }
// //Helper function that finds the largest column in the matrix.
// function largestColumn(matrix) {
//     var index = 0;
//     var res = [];
//     for (var i = 0; i < matrixColumns(matrix).length; i++) {
//         res.push(addArray(matrixColumns(matrix)[i]));
//     }
//     index = res.indexOf(Math.max(...res));
//     return matrixColumns(matrix)[index];
// }
// //Main function that finds the duplicate value, finds the cross sum, and subtracts the duplicate value.
// //function largestCrossSum(matrix) {
//     var duplicate = 0;
//     for (var i = 0; i < largestRow(matrix).length; i++) {
//         for (var j = 0; j < largestColumn(matrix).length; j++) {
//             if (largestRow(matrix)[i] == largestColumn(matrix)[j]) {
//                 duplicate = largestRow(matrix)[i];
//             }
//         }
//     }
//     return addArray(largestRow(matrix)) + addArray(largestColumn(matrix)) - duplicate;
// }
// console.log(largestCrossSum([
//     [1, 2, 1],
//     [2, 2, 2],
//     [1, 2, 1],
//     [9]
// ]))