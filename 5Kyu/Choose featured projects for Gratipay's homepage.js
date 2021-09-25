function getFeaturedProjects(allProjects) {
  const popular = getPopularUnpopular(allProjects)[0];
  const unpopular = getPopularUnpopular(allProjects)[1];
  var featuredProjects = [];
  if (allProjects.length < 10) {
    return allProjects;
  }
  //Syntax for filling array!!!
  if (!popular.length) {
    return Array.from(
      Array(10),
      () => unpopular[Math.floor(Math.random() * unpopular.length)]
    );
  }
  //--------------------
  if (!unpopular.length) {
    featuredProjects = new Array(10).fill(
      popular[Math.random() * popular.length],
      0,
      10
    );
  } else if (popular.length < 7) {
    featuredProjects = new Array(10)
      .fill(unpopular[Math.random() * unpopular.length], popular.length, 10)
      .unshift(popular[Math.random() * popular.length]);
  } else if (unpopular.length < 3) {
    featuredProjects = new Array(10)
      .fill(popular[Math.random() * popular.length], popular.length, 10)
      .reverse()
      .unshift(unpopular[Math.random() * unpopular.length]);
  } else {
    while (featuredProjects.length < 10) {
      featuredProjects.unshift(
        popular[Math.floor(Math.random() * popular.length)].push(
          unpopular[Math.floor(Math.random() * unpopular.length)]
        )
      );
    }
  }
}
//Helper function that sorts through the projects and places popular and unpopular projects in their respective arrays.
function getPopularUnpopular(allProjects) {
  let popularProjects = [];
  let unpopularProjects = [];
  for (var i = 0; i < allProjects.length; i++) {
    if (allProjects[i]["nreceiving_from"] > 5) {
      popularProjects.push(allProjects[i]);
    } else {
      unpopularProjects.push(allProjects[i]);
    }
  }
  return [popularProjects, unpopularProjects];
}
console.log(
  getFeaturedProjects([
    { name: "Popular Project ", nreceiving_from: 2, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 3, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 2, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 2, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 3, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    // { name: "Popular Project ", nreceiving_from: 9, receiving: 10 },
    // { name: "Popular Project ", nreceiving_from: 6, receiving: 10 },
    // { name: "Popular Project ", nreceiving_from: 10, receiving: 10 },
  ])
);
//Conditions
//Always return 10 projects or less
//Seven of the projects should be drawn randomly from a pool of the popular projects (a project with 'nrecieving_from' > 5 is considered as popular)
//The remaining three should be taken randomly from amongst the rest.
//If there are less than 7 popular projects, or less than 3 unpopular projects, fill the gaps from the other group of projects if possible.
//Randomize the order of results so that the popular objects don't always appear on top.
