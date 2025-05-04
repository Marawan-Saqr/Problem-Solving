const settings = {
  theme: "dark",
  notifications: "mute",
  privacy: "secret"
}


let probertyName = prompt("Enter Proberty Name");
let probertyValue = prompt("Enter Proberty Value");

settings[probertyName] = probertyValue;

console.log(settings);
console.log(settings[probertyName]);