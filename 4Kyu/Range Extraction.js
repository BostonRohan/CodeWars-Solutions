function solution(list) {
  let match = 0;
  let startRange,
    endRange = 0;
  let ans = [];
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
    if (match === 0 && i === 0) ans.push(list[i]);
    if (!increment && endRange < startRange) ans.push(list[i - 1], list[i]);
    if (match === 0 && startRange < endRange) {
      ans.push(`${startRange}-${endRange}`);
    }
  }
  return ans.join(",");
}
console.log(
  solution([
    -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
  ])
);
