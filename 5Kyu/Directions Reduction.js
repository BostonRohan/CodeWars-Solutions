function direcReduc(arr) {
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
    direcReduc(arr);
  }
  return arr;
}
console.log(
  direcReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])
);

//Psuedo Code
//Recursive function
//If South, North or North, South delete.
//Or if East, West or West, East delete
//Keep deleting from array until both conditions are not true, recursively call function
//Return arr.
