function getFeaturedProjects(allProjects) {
  const popular = getPopularUnpopular(allProjects)[0];
  const unpopular = getPopularUnpopular(allProjects)[1];
  var featuredProjects = [];
  if (allProjects.length < 10) {
    return allProjects;
  } else {
    let allProjectsCopy = allProjects.slice();
    for (var i = 0; i < 10; i++) {
      if (popular) {
        featuredProjects.push(popular[Math.floor(Math.random() * i)]);
        allProjectsCopy.splice(Math.floor(Math.random() * i), i);
      } else {
        featuredProjects.push(
          allProjectsCopy[
            Math.floor(Math.random() * (10 - featuredProjects.length))
          ]
        );
      }
    }
  }

  return featuredProjects;
}
//Helper function that sorts through the projects and places popular and unpopular projects in their respective arrays.
function getPopularUnpopular(allProjects) {
  var popularProjects,
    unpopularProjects = [];
  for (var i = 0; i < allProjects.length; i++) {
    if (allProjects[i]["nreceiving_from"] > 5) {
      popularProjects.push(allProjects[i]);
    } else {
      unpopularProjects.push(allProjects[i]);
    }
  }
  if (popularProjects && unpopularProjects) {
    return popularProjects, unpopularProjects;
  } else if (popularProjects) {
    return popularProjects;
  } else {
    return unpopularProjects;
  }
}
console.log(getFakeProjects());
//Conditions
//Always return 10 projects or less
//Seven of the projects should be drawn randomly from a pool of the popular projects (a project with 'nrecieving_from' > 5 is considered as popular)
//The remaining three should be taken randomly from amongst the rest.
//If there are less than 7 popular projects, or less than 3 unpopular projects, fill the gaps from the other group of projects if possible.
//Randomize the order of results so that the popular objects don't always appear on top.
