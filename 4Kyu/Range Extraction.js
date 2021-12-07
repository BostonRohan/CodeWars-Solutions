function solution(list) {
  //Establishing variables
  let range = [];
  let start = 0;
  let end = 0;
  //Iterate over list
  for (let i = 0; i <= list.length; i++) {
    //If the list increases properly then push it into the range arr
    if (list[i] + 1 === list[i + 1]) {
      range.push(list[i], list[i + 1]);
    } else {
      //Make a new unique array without duplicates
      let uniqRange = [...new Set(range)];
      //Reset range as the increment length is not sufficent
      range = [];
      if (uniqRange.length >= 3) {
        //Establish our start and end range
        start = uniqRange[0];
        end = [uniqRange[uniqRange.length - 1]];
        //Splice elements out of the list and replace them with the range
        list.splice(list.indexOf(start), uniqRange.length, `${start}-${end}`);
        //Going back to check other nodes since we're splicing
        i = i - uniqRange.length;
      }
    }
  }
  return list.join(",");
}
solution([
  -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20,
]);
