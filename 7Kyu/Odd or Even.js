function oddOrEven(array) {
    //Find the the sum of the array.
    var sum = array.reduce(function (a, b) {
        return a + b
    }, 0)
    //Check if the sum is even or odd.
    var answer = sum % 2 === 0 ? "even" : "odd";
    return answer;
}
//Psuedo Code
//Find the sum of the array.
// var sum = array.reduce(function (a,b){
//return a+b},0)
//Conditional, or if statement.
//If sum % 2 == 0, return even, if not return odd.