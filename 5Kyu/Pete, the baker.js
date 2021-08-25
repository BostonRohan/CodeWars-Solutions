//Function that checks if there are enough ingredients available, and returns the maximum number of cakes that can be made.
function cakes(recipe, available) {
  //Sort both objects in place as an array.
  const recipeArr = Object.entries(recipe).sort(),
    availableArr = Object.entries(available).sort();
  var sortedAvailableAmount = [];
  var sortedRecipeAmount = [];
  //If there are more items on the recipe than the available, then we are missing a ingredient.
  if (recipeArr.length > availableArr.length) {
    return 0;
  }
  //Otherwise, get the necessary ingredients from available.
  else {
    for (var i = 0; i < recipeArr.length; i++) {
      for (var j = 0; j < availableArr.length; j++) {
        if (availableArr[j][0] === recipeArr[i][0]) {
          sortedAvailableAmount.push(availableArr[j][1]);
          sortedRecipeAmount.push(recipeArr[i][1]);
        }
      }
    }
  }
  //Return the smallest amount from the checkAmount function.
  return Math.min(...checkAmount(sortedRecipeAmount, sortedAvailableAmount));
}
//Function that checks to see if there are enough ingredients in available to bake cakes.
//Function returns an array with the smallest number in the array being the maximum number of cakes that can be made.
function checkAmount(recipeArr, availableArr) {
  //Iterate over the recipe.
  for (var i = 0; i < recipeArr.length; i++) {
    //If the recipe and available are equal then only one cake can be made.
    if (recipeArr[i] === availableArr[i]) {
      return [1];
    } else {
      //Otherwise, divide each ingredient in available by its corresponding ingredient in the recipe.
      while (availableArr[i] >= 1) {
        availableArr[i] = Math.floor(availableArr[i] / recipeArr[i]);
        i++;
      }
    }
  }
  //Return the array containing the new ingredient amounts.
  return availableArr;
}
cakes({ flour: 500, sugar: 500, eggs: 5 }, { flour: 500, sugar: 500, eggs: 5 });
