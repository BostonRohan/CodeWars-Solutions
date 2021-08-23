function cakes(recipe, available) {
  const recipeArr = Object.entries(recipe).sort(),
    availableArr = Object.entries(available).sort();
  var sortedAvailableAmount = [];
  var sortedRecipeAmount = [];
  if (recipeArr.length > availableArr.length) {
    return 0;
  } else {
    for (var i = 0; i < recipeArr.length; i++) {
      for (var j = 0; j < availableArr.length; j++) {
        if (availableArr[j][0] === recipeArr[i][0]) {
          sortedAvailableAmount.push(availableArr[j][1]);
          sortedRecipeAmount.push(recipeArr[i][1]);
        }
      }
    }
  }
  return Math.min(...checkAmount(sortedRecipeAmount, sortedAvailableAmount));
}
function checkAmount(recipeArr, availableArr) {
  for (var i = 0; i < recipeArr.length; i++) {
    if (recipeArr[i] === availableArr[i]) {
      return [1];
    } else {
      while (availableArr[i] >= 1) {
        availableArr[i] = Math.floor(availableArr[i] / recipeArr[i]);
        i++;
      }
    }
  }
  return availableArr;
}
console.log(
  cakes(
    { flour: 500, sugar: 500, eggs: 5 },
    { flour: 500, sugar: 500, eggs: 5 }
  )
);
//Psuedo Code

//Extract the key pairs in the recipe and, the available, and sort them.
//If they're equal, then all of the ingredientes are present.
//Check the values of each ingrediente.
//Figure out how do check ingredient amounts.
