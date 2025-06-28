function isAdmin(roles) {

  if (roles.includes("admin")) {
    return true;
  } else {
    return false;
  }

}

let roles = ['admin', 'editor', 'subscriber'];
console.log(isAdmin(roles));