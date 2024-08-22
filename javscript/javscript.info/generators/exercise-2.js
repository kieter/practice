//https://github.com/Nooder/javascript-in-depth/blob/main/026-generators/exercises/exercise-2.js
/*
    1. Create a generator function called "randomAmountFromRange"
       which has 3 parameters: amount, min, and max

    2. ^ This function will generate the amount of random numbers
       provided as an argument, between the min and max (inclusive)
       Eg: randomAmountFromRange(3, 10, 20) => 13, 12, 19

    3. Create a for...of loop that will loop through the following
       generator objects to test it:
       - randomAmountFromRange(3, 10, 20)
       - randomAmountFromRange(5, 100, 200)
       - randomAmountFromRange(10, 1000, 2000)
*/

const randomAmountFromRange = function* (amount, min, max) {
    for (let number = 0; number < amount; number++) {
        yield Math.floor(Math.random() * (max - min + 1) + min);
    }
}

const randomNumberGenerator = randomAmountFromRange(3, 10, 20)
for (let value of randomNumberGenerator) {
    console.log(value);
}