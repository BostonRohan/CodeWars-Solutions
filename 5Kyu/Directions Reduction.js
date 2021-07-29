function dirReduc(arr) {
  //Iterate over the array.
  for (var i = 0; i < arr.length; i++) {
    //If North, South : East, West; are in consecutive positions, delete them.
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST") ||
      (arr[i] === "EAST" && arr[i + 1] === "WEST")
    ) {
      //Delete the two strings.
      arr.splice(i, 2);
      //Move i backwards two values each time you delete from the array to recheck the arr.
      i -= 2;
    }
    //If the array is empty, stop looping.
    if (arr.length < 1) {
      break;
    }
  }
  return arr;
}
dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]);
