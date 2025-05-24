function boatLoader(a) {

  let all = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz".split("");
  let result = [];
  for (let i = 0; i < all.length; i++) {
    if (a.indexOf(all[i]) !== a.lastIndexOf(all[i])) {
      result.push([all[i], all[i]]);
    }
  }

  return result;

}




console.log(boatLoader(['g', 'c', 'h', 'c', 'g', 'm']));