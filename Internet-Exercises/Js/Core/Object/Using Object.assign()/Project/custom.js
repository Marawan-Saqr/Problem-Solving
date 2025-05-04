// Creating the defaults object with default settings
const defaults = {
  volume: 30,
  brightness: "Very High",
  language: "English"
};

// Creating the userSettings object with only a few properties
const userSettings = {
  volume: 50,  // This will overwrite the default volume
  language: "Spanish"  // This will overwrite the default language
};

// Merging the two objects using Object.assign()
const finalSettings = Object.assign({}, defaults, userSettings);
console.log(finalSettings);
