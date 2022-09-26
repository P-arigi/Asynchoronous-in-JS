function firstPromise(){
    return new Promise(function(resolve,reject){
        var x=Math.random();
        if(x>0.5){
            resolve("Hooray! Your promise was resolved with value $(x")
        } else{
            reject("Oh no, your promise was rejected with value $(x)")
        }
    })
}
//console.log(firstPromise(1));
//console.log(firstPromise(0.2))

firstPromise()
  .then(function(data) {
    return data;
  })
  .catch(function(error) {
    return error;
  });