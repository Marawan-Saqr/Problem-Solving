function removeUrlAnchor(url){

  let result = "";

  for (let i = 0; i < url.length; i++) {
    if (url[i] === "#") {
      break;
    } else {
      result += url[i];
    }
  }

  return result;

}

console.log(removeUrlAnchor("www.codewars.com#about"));