let jokePar = document.getElementById("joke")

async function kafifGen() {
    jokePar.innerHTML = "Генерим..."
    let joke = await (await fetch("https://v2.jokeapi.dev/joke/Any?lang=en&type=single")).json()
    joke = joke.joke
    joke = joke.split(" ")
    console.log(joke)
    let kJokeArray = []
    for (let i = 0; i < joke.length; i++) {
        if (Math.floor(Math.random() * 10) < 3) {
            joke[i] = "kafif"
        }
        kJokeArray.push(joke[i])
    }
    let kJoke = kJokeArray.join(" ")
    jokePar.innerHTML = kJoke
}