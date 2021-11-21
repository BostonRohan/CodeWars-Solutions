function solution(list) {
  let arr = [];
  let match = 0;
  let startRange,
    nextNum,
    endRange = 0;
  let condition = false;
  for (let i = 0; i < list.length + 1; i++) {
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
    if (list[i + 1] === list[i] + 1) {
      match++;
    } else {
      endRange = list[i];
      match = 0;
    }
    // match === 0 ? (endRange = "") : (endRange = endRange);
    match === 1 ? (startRange = list[i]) : (startRange = startRange);
    console.log(
      "index:",
      list.indexOf(startRange),
      "delete",
      startRange - endRange + 1,
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
  return list;
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
