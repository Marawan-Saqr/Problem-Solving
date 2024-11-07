// var number = function(busStops){

//   let busGetIn = 0;
//   let busGetOut = 0;

//   for (let i = 0; i < busStops.length; i++) {
//     busGetIn += busStops[i][0];
//     busGetOut += busStops[i][1];
//   }

//   return busGetIn - busGetOut;

// }


// console.log(number([[10, 0],[3, 5],[5, 8]]));


////////////////////////////////////Another Solution//////////////////////////////////////////////

function number(busStops) {
  return busStops.reduce((remaining, [getIn, getOut]) => remaining + getIn - getOut, 0);
}

console.log(number([[10, 0],[3, 5],[5, 8]]));