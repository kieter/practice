// https://github.com/Nooder/javascript-in-depth/blob/main/026-generators/exercises/warmup-exercise.js

/*
    1. Create a generator function called "countTo10" that will
       yield the numbers 0-10 (inclusive) then stop.

    2. Create the generator object by calling the generator
       function and iterate through the generator using a
       for...of loop.
*/

const countTo10 = function* (){
    for (let i = 0; i <= 10; i++) {
        yield i;
    }
}

const generate10 = countTo10();

for (const value of generate10) {
    console.log(value);
}