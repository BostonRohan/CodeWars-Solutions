function solution(list) {
  let match = 0;
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] === list[i] + 1) {
      match++;
      if (match === 1) {
        arr.push(list[i]);
      }
    } else {
      match = 0;
    }
  }
}
console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
//Psuedo
//Check a number
//Iterate until the following number is no longer list[i] + 1
//If the following number is no longer list[i] + 1, then splice the numbers and replace them with the first number in the iteration, a dash, and the last iteration.
