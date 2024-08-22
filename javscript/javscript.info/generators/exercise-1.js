// https://github.com/Nooder/javascript-in-depth/blob/main/026-generators/exercises/exercise-1.js
/*
    1. Create a generator function called "randomNumber"
       that will generate a new random number infinitely

    2. Use a loop to generate 10 random numbers using the
       generator Object you get from calling "randomNumber"
*/
const randomNumber = function* (){
    while (true) {
        yield Math.floor(Math.random() * 100);
        yield 1
    }
}

const randomNumberGenerator = randomNumber()

for (let i = 0; i <= 10; i++) {
    console.log(randomNumberGenerator.next().value)
}