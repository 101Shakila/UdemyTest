const jokes = require("give-me-a-joke");
const colors = require("colors");

jokes.getRandomDadJoke(function (jokes) {
    console.log(jokes.rainbow);
});


