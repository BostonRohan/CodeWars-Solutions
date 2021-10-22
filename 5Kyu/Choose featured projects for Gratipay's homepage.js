function getFeaturedProjects(allProjects) {
  //Access the popular and unpopular data from the getPopularUnpopular function
  const popular = getPopularUnpopular(allProjects)[0];
  const unpopular = getPopularUnpopular(allProjects)[1];
  //Create two arrays sorting popular and unpopular projects randomly in their respective arrays.
  //The arrays will always be the length of the available projects, no empty spaces unless array is completely empty.
  var sortedPopular = Array.from(
    Array(popular.length),
    () => popular[Math.floor(Math.random() * popular.length)]
  );
  var sortedUnpopular = Array.from(
    Array(unpopular.length),
    () => unpopular[Math.floor(Math.random() * unpopular.length)]
  );
  var featuredProjects = [];
  //Return all projects if there are less than 10 projects in total.
  if (allProjects.length < 10) {
    featuredProjects = allProjects;
  } //If there are no popular projects, return the randomized unpopular projects.
  else if (!popular.length) {
    featuredProjects = sortedUnpopular;
  } //If there are no unpopular projects, return the randomized popular projects.
  else if (!unpopular.length) {
    featuredProjects = sortedPopular;
  } //If there are less than 7 popular projects, make the randomized unpopular length 10 - the popular length.
  //This will insure that when the two arrays are added together, they will not exceed 10 projcets.
  else if (popular.length && popular.length < 7) {
    sortedUnpopular = Array.from(
      Array(10 - popular.length),
      () => unpopular[Math.floor(Math.random() * unpopular.length)]
    );
    featuredProjects = [...sortedPopular, ...sortedUnpopular];
  } //If there are less than 3 unpopular projects, then make the randomized popular length 10 - unpopular length.
  //Also insures that when added together that the projects do not exceed 10.
  else if (unpopular.length && unpopular.length < 3) {
    sortedPopular = Array.from(
      Array(10 - unpopular.length),
      () => popular[Math.floor(Math.random() * popular.length)]
    );
    featuredProjects = [...sortedPopular, ...sortedUnpopular];
  }
  //Otherwise, return 7 popular projects, all other cases have been met.
  else {
    sortedPopular = Array.from(
      Array(7),
      () => popular[Math.floor(Math.random() * popular.length)]
    );
    featuredProjects = [...sortedPopular];
  }
  return featuredProjects;
}
//Helper function that sorts through the projects and places popular and unpopular projects in their respective arrays.
function getPopularUnpopular(allProjects) {
  let popularProjects = [];
  let unpopularProjects = [];
  //Iterate through all projects.
  for (var i = 0; i < allProjects.length; i++) {
    //If 'nrecieving_from' > 5 it is popular.
    if (allProjects[i]["nreceiving_from"] > 5) {
      popularProjects.push(allProjects[i]);
    } //Otherwise it is not.
    else {
      unpopularProjects.push(allProjects[i]);
    }
  }
  //Return an array containing the popular, and unpopular projcets.
  return [popularProjects, unpopularProjects];
}

//Conditions
//featuredProjcets should return 10 projects or less
//Seven of the projects should be sorted randomly from a pool of the popular projects (a project with 'nrecieving_from' > 5 is considered as popular)
//The remaining three should be taken randomly from amongst the rest.
//If there are less than 7 popular projects, or less than 3 unpopular projects, fill the gaps from the other group of projects if possible.
//Randomize the order of results so that the popular objects don't always appear on top.

//StackOverflow for filling zero filled arrays
//https://stackoverfsorted.com/questions/1295584/most-efficiensorteday-to-create-a-zero-filled-javascript-array
