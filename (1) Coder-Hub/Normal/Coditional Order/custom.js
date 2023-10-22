function namesSort(namesArray, order) {
  if (order === "ASC") {
    return namesArray.sort();
  } else if (order === "DESC") {
    return namesArray.sort().reverse();
  } else {
    return "Invalid order type. Please use 'ASC' for ascending or 'DESC' for descending order.";
  }
}

console.log(namesSort(['Ahmed Omar', 'Yousef Abdullah'], "ASC"));






