function namesSort(namesArray, order) {

  if (order === "ASC") {
    return namesArray.sort();
  } else {
    return namesArray.sort((a, b)=> b.localeCompare(a));
  }

}


console.log(namesSort(['Ahmed Omar', 'Yousef Abdullah'], "DESC"));