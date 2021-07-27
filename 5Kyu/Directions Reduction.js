function dirReduc(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (
      (arr[i] === "NORTH" && arr[i + 1] === "SOUTH") ||
      (arr[i] === "SOUTH" && arr[i + 1] === "NORTH")
    ) {
      arr.splice(i, 2);
    } else if (
      (arr[i] === "EAST" && arr[i + 1] === "WEST") ||
      (arr[i] === "WEST" && arr[i + 1] === "EAST")
    ) {
      arr.splice(i, 2);
    }
  }
  return arr;
}
console.log(
  dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

//Psuedo Code
//Iterate over the array.
//If opposites are beside each other, splice them from the array.
//Each time through the array should be getting smaller and smaller in value.
//If the array ends in duplicates remove them from the array.

//Recursion problem?

//If keep deleting until no two opposites are beside each other.
