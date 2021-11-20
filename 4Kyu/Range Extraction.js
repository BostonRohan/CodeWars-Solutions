function solution(list) {
  let arr = [];
  let match = 0;
  let startRange,
    nextNum,
    endRange = "";
  for (let i = 0; i < list.length; i++) {
    if (list[i + 1] === list[i] + 1) {
      match++;
    } else if (list[i + 1] !== list[i] + 1) {
      endRange = list[i];
    } else {
      match = 0;
    }
    match === 1 ? (startRange = list[i]) : (nextNum = list[i + 1]);
  }
  return endRange;
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
