$.getJSON(
    "https://icanhazdadjoke.com/",
    function(data) {
      console.log("Cool, here's some joke data: ", data);
    },
    function(error) {
      console.log("Oops something went wrong!", error);
    }
  );