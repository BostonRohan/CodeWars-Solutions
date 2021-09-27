function getFeaturedProjects(allProjects) {
  const popular = getPopularUnpopular(allProjects)[0];
  const unpopular = getPopularUnpopular(allProjects)[1];
  var sortedPopular = Array.from(
    Array(popular.length),
    () => popular[Math.floor(Math.random() * popular.length)]
  );
  var sortedUnpopular = Array.from(
    Array(unpopular.length),
    () => unpopular[Math.floor(Math.random() * unpopular.length)]
  );
  var featuredProjects = [];
  if (allProjects.length < 10) {
    featuredProjects = allProjects;
  } else if (!popular.length) {
    featuredProjects = sortedUnpopular;
  } else if (!unpopular.length) {
    featuredProjects = sortedPopular;
  } else if (popular.length && popular.length < 7) {
    sortedUnpopular = Array.from(
      Array(10 - popular.length),
      () => unpopular[Math.floor(Math.random() * unpopular.length)]
    );
    featuredProjects = [...sortedPopular, ...sortedUnpopular];
  } else if (unpopular.length && unpopular.length < 3) {
    sortedPopular = Array.from(
      Array(10 - unpopular.length),
      () => popular[Math.floor(Math.random() * popular.length)]
    );
    featuredProjects = [...sortedPopular, ...sortedUnpopular];
  } else {
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
    { name: "Popular Project ", nreceiving_from: 9, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 11, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 9, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 10, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 7, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 2, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 1, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 8, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 12, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
    { name: "Popular Project ", nreceiving_from: 4, receiving: 10 },
  ])
);
//Conditions
//sortedays return 10 projects or less
//Seven of the projects should be dsortedn randomly from a pool of the popular projects (a projecsortedith 'nrecieving_from' > 5 is considered as popular)
//The remaining three should be taken randomly from amongst the rest.
//If there are less than 7 popular projects, or less than 3 unpopular projects, fill the gaps from the other group of projects if possible.
//Randomize the order of results so that the popular objects don't sortedays appear on top.

//https://stackoverfsorted.com/questions/1295584/most-efficiensorteday-to-create-a-zero-filled-javascript-array
