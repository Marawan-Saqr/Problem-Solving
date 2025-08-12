function findRoutes(routes) {

  // Get Start Location
  let joined = [].concat(...routes);
  let travelStartEnd = joined.filter((element)=> {
    return joined.indexOf(element) === joined.lastIndexOf(element);
  });
  let startPoint = travelStartEnd[0];


  // Create Object For Destinations
  let objDestinations = routes.reduce((acc, [from, to])=> {
    acc[from] = to;
    return acc;
  }, {});


  // Return Right Route
  let route = [];
  let current = startPoint;
  while(current) {
    route.push(current);
    current = objDestinations[current];
  }

  return route.join(", ");

}



console.log(findRoutes([ ["USA", "BRA"], ["JPN", "PHL"], ["BRA", "UAE"], ["UAE", "JPN"] ]));