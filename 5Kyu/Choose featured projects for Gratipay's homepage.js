function getFeaturedProjects(allProjects) {
  const popular = getPopularUnpopular(allProjects)[0];
  const unpopular = getPopularUnpopular(allProjects)[1];
  var popularRandomIdx = Math.floor(Math.random() * popular.length);
  var unpopularRandomIdx = Math.floor(Math.random() * unpopular.length);
  var featuredProjects = [];
  if (allProjects.length < 10) {
    return allProjects;
  } else {
    for (var i = 0; i < 10; i++) {
      if (popular) {
        featuredProjects.unshift(popular[popularRandomIdx]);
        popular.splice(popularRandomIdx, 1);
      } else {
        featuredProjects.push(unpopular[unpopularRandomIdx]);
      }
    }
  }
  return featuredProjects;
}
//Helper function that sorts through the projects and places popular and unpopular projects in their respective arrays.
function getPopularUnpopular(allProjects) {
  let popularProjects = [];
  let unpopularProjects = [];
  for (var i = 0; i < allProjects.length; i++) {
    if (allProjects[i]["nreceiving_from"] > 5) {
      popularProjects.push(allProjects[i]);
    } else if (allProjects[i]["nreceiving_from"] < 5) {
      unpopularProjects.push(allProjects[i]);
    } else {
      break;
    }
  }
  return [popularProjects, unpopularProjects];
}
console.log(
  getFeaturedProjects([
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 7, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 8, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 7, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 9, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
  ])
);
//Conditions
//Always return 10 projects or less
//Seven of the projects should be drawn randomly from a pool of the popular projects (a project with 'nrecieving_from' > 5 is considered as popular)
//The remaining three should be taken randomly from amongst the rest.
//If there are less than 7 popular projects, or less than 3 unpopular projects, fill the gaps from the other group of projects if possible.
//Randomize the order of results so that the popular objects don't always appear on top.
