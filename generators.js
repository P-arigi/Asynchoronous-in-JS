/*Generators
In ES2015, a special type of function called a generator was introduced. Generator functions are functions that can 
return multiple values using the yield keyword. Previously, we have only seen functions that return once, but generators 
can change that for us. Let's start with a simple generator example (generator functions are denoted using a *):
  */

function* firstGenerator(){
    for(var i=0;i<5;i++){
        yield i;
    }
}
var gen = firstGenerator();
console.log(gen.next()); // {value: 0, done: false}
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: 4, done: false}
console.log(gen.next());  // {value: 5, done: True}

// we can also iterate over a generator using a for..of loop
for (var data of firstGenerator()){
    console.log(data);
}