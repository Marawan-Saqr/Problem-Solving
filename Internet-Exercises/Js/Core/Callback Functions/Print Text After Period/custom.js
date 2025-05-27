function delayedPrint(message, callBack) {

  setTimeout(()=> {
    console.log(message);
    callBack();
  }, 2000);

}


delayedPrint("Hello My Name Is Marawan", function() {
  console.log("Hello World");
});