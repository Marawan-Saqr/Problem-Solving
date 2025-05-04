let h1 = document.getElementById("h1");

function maximumNumber(Array){
  let max = Array[0];
  for (let i = 1; i < Array.length; i++) {
    if (Array[i] > max) {
      max = Array[i];
    }
  }
  return max;
}


h1.textContent = `The Result Is ${maximumNumber([30, 40, 75, -30, 10])}`;


