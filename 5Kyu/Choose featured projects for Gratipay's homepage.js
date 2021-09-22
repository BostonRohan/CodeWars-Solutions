function getFeaturedProjects(allProjects) {
  var featuredProjects = [];
  if (allProjects.length < 10) {
    return allProjects;
  } else {
    const popularUnpopularSorted = getPopularUnpopular(allProjects);
  }

  return featuredProjects;
}
//Helper function that sorts through the projects and places popular and unpopular projects in their respective arrays.
function getPopularUnpopular(allProjects) {
  if (allProjects.length < 10) {
    return allProjects;
  } else {
    for (var i = 0; i < allProjects.length; i++) {
      if (allProjects[i]["nreceiving_from"] > 5) {
        popularProjects.push(allProjects[i]);
      } else {
        unpopularProjects.push(allProjects[i]);
      }
    }
  }
  return popularProjects, unpopularProjects;
}
//Conditions
//Always return 10 projects or less
//Seven of the projects should be drawn randomly from a pool of the popular projects (a project with 'nrecieving_from' > 5 is considered as popular)
//The remaining three should be taken randomly from amongst the rest.
//If there are less than 7 popular projects, or less than 3 unpopular projects, fill the gaps from the other group of projects if possible.
//Randomize the order of results so that the popular objects don't always appear on top.
