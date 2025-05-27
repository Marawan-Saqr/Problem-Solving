const users = ["Ahmed", "Mona", "Sara", "Youssef"];

function checkUser(username, callback) {

  let exist = users.includes(username);
  callback(exist);

}

checkUser("Mona", function(exists) {
  if (exists) {
    console.log("User exists!");
  } else {
    console.log("User not found.");
  }
});