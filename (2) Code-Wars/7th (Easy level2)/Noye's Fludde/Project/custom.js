function boatLoader(a) {

  let all="AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".split("");
  let result = [];

  for (var c of all) {
    if (a.indexOf(c) != a.lastIndexOf(c)) result.push([c, c]);
  }

  return result;

}



console.log(boatLoader(['g', 'c', 'h', 'c', 'g', 'm', 'g']));