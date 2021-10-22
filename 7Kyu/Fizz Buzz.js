//Helper function that creates an array 'nth' size length.
function createAnArray(n) {
    var arr = [];
    for (var i = 1; i <= n; i++) {
        arr.push(i);
    }
    return arr;
}

function fizzbuzz(n) {
    //Establish array
    var arr = createAnArray(n);
    //Iterate through array
    for (var i = 0; i < arr.length; i++) {
        //If it is divisible by 3 and 5, FizzBuzz it.
        if (arr[i] % 3 == 0 && arr[i] % 5 == 0) {
            arr[i] = 'FizzBuzz';
            //If it is divisible by 5, Buzzify it.
        } else if (arr[i] % 5 == 0) {
            arr[i] = 'Buzz';
            //If it is divisible by 3 Fizzifiy it.
        } else if (arr[i] % 3 == 0) {
            arr[i] = 'Fizz';
        }
    }
    return arr;
}
fizzbuzz(30)