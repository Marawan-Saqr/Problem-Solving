function isLockNessMonster(s) {
  if (s.includes("tree fiddy") || s.includes("3.50") || s.includes("three fifty")) {
    return true;
  } else {
    return false;
  }
}



console.log(isLockNessMonster("Your girlscout cookies are ready to ship. Your total comes to tree fiddy"));