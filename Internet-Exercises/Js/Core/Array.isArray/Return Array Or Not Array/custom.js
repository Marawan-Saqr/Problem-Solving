function printArrayCheck(data) {

  data.forEach(element => {
    console.log(Array.isArray(element) ? "✅ Array" : "❌ Not Array");
  });

}



printArrayCheck([1, [2, 3], "hi", {}, [], null]);