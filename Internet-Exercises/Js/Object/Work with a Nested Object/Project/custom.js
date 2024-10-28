let userProfile = {
  userInfo: {
    name: "Marawan",
    email: "maro@yahoo.com",
    address: {
      street: "Street 2",
      city: "Cairo"
    }
  }
}


console.log(userProfile.userInfo.email);
console.log(userProfile.userInfo.address['city']);