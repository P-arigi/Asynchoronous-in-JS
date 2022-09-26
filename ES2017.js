async function asyncExample() {
    return 1;
  }
  
  console.log(asyncExample());
  //when you make a funciton an async function, it automatically returns a promise to you. Very commonly you'll create
  // the promise yourself, but even if you don't, the value you return will be wrapped in a promise:
