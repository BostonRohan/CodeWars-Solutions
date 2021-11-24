function solution(list) {
  let match = 0;
  let startRange,
    endRange = 0;
  // let replaceAmount = 0;
  let ans = [];
  for (let i = 0; i < list.length + 1; i++) {
    let replaceAmount = endRange - startRange + 1;
    let increment = list[i + 1] === list[i] + 1;
    let inRange = match > 0 && startRange > endRange;

    // console.log(
    //   "start:",
    //   startRange,
    //   "end:",
    //   endRange,
    //   "match:",
    //   match,
    //   "iteration:",
    //   list[i]
    // );
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
      replaceAmount = match;
      match = 0;
    }

    //Delete characters as we iterate??

    console.log(ans);
    // match === 0 ? (endRange = "") : (endRange = endRange);
    // match === 1 ? (startRange = list[i]) : (startRange = startRange);
    // replaceAmount > 0
    //   ? list.splice(
    //       list.indexOf(startRange),
    //       replaceAmount,
    //       `${startRange}-${endRange}`
    //     )
    //   : (replaceAmount = replaceAmount);
    console.log(
      "iteration:",
      list[i],
      "index:",
      list.indexOf(startRange),
      "delete",
      replaceAmount,
      "start",
      startRange,
      "end:",
      endRange,
      "match:",
      match
    );
    // match === 0 && list.indexOf(startRange) > 0
    //   ? list.splice(
    //       list.indexOf(startRange),
    //       startRange - endRange + 1,
    //       `${startRange}-${endRange}`
    //     )
    //   : (list = list);
    // if (match === 0) {
    //   list.splice(
    //     Math.abs(startRange),
    //     startRange - endRange + 1,
    //     `${startRange}-${endRange}`
    //   );
    // }
    // match === 1 ? (startRange = list[i]) : (nextNum = list[i + 1]);
  }
  return ans;
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
