function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 done");
    callback();
  }, 1000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 done");
    callback();
  }, 1000);
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 done");
    callback();
  }, 1000);
}

task1(function () {
  task2(function () {
    task3(function () {
      console.log("All tasks done!");
    });
  });
});