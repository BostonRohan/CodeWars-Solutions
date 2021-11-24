function solution(list) {
  let ranges = [];
  let match = 0;
  let startRange,
    endRange = 0;
  for (let i = 0; i < list.length; i++) {
    let increment = list[i + 1] === list[i] + 1;

    if (increment) {
      match++;
    }
    if (match === 1) {
      startRange = list[i];
    }
    if (!increment) {
      if (match >= 2) {
        endRange = list[i];
      }
      match = 0;
    }
    if (match === 0 && startRange < endRange) {
      ranges.push(`${startRange}-${endRange}`);
    }
  }
  return `ranges: ${ranges}, list: ${list}`;
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
