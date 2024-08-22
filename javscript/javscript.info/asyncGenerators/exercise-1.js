// https://github.com/Nooder/javascript-in-depth/blob/main/027-async-generators/exercises/exercise-1.js
/*
    1. Create an async Generator function that has a 50%
       chance of yielding either of the following Promises:
       - Resolve after 500ms with the value "Fast!"
       - Resolve after 3000ms with the value "Slow!"

    2. Create the generator object by calling the function ^

    3. Use a for-await-of loop to loop through the generator
       indefinitely (ctrl-c to force exit the program)

    *HINT: Math.random() is your friend
*/

const fifty50 = function* async (){
    while (true) {
        const coinFlip = Math.floor(Math.random() * 2)
        const slowPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Slow!'), 3000)
        })
        const fastPromise = new Promise((resolve, reject) => {
            setTimeout(() => resolve('Fast!'), 500)
        })
        coinFlip ? yield fastPromise : yield slowPromise
    }
}

const fifty50Generator = fifty50();

const main = async () => {
    for await (const value of fifty50Generator) {
        console.log(value);
    }
}

main();

