function getJokesAbout(term){
    $.getJSON(
        `https://icanhazdadjoke.com/search?term=${term}`,
    function(data) {
      // we could also do gen.next(data) to make this function run all three at once
      console.log(data);
    },
    function(err) {
      console.log(err);
    }
  );
}

function* displayResults(){
    var results1=yield getJokesAbout("spider");
    console.log(results1);
    var results2=yield getJokesAbout("ghost");
    console.log(results2);
    var results3=yield getJokesAbout("pizza");
    console.log(results3);
}

var gen=displayResults();
 console.log(gen)

 // if we want to print all without using next()
for (var jokeData of displayResults()) {
  console.log(jokeData);
}