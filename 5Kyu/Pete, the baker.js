function cakes(recipe, available) {
  if (checkIngredients(recipe, available) && checkAmount(recipe, available)) {
    return checkAmount(recipe, available);
  } else {
    return 0;
  }
}
function checkAmount(recipe, available) {
  var recipeAmount = Object.values(recipe),
    availableAmount = Object.values(available);
}
function checkIngredients(recipe, available) {
  var recipeArr = Object.keys(recipe).sort(),
    availableArr = Object.keys(available).sort();
  if (availableArr.includes(...recipeArr)) {
    return true;
  }
  return false;
}
console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
//Psuedo Code

//Extract the key pairs in the recipe and, the available, and sort them.
//If they're equal, then all of the ingredientes are present.
//Check the values of each ingrediente.
//Figure out how do check ingredient amounts.
