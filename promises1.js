function first() {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("first is done");
        resolve(10);
      }, 500);
    });
  }
  
  function second(previousPromiseData) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("second is done and we just got", previousPromiseData);
        resolve(previousPromiseData + 10);
      }, 500);
    });
  }
  
  function third(previousPromiseData) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        console.log("third is done and the total is", previousPromiseData);
        resolve();
      }, 500);
    });
  }
  
  first()
    .then(second)
    .then(third);