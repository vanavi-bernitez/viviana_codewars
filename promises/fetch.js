// Using fetch function to request API
fetch('https://api.chucknorris.io/jokes/random')
    .then((response) => {
       return response.json();
    })
    .then((joke) => {
        console.log("Joke: ", joke.value)
    })
    .catch()
