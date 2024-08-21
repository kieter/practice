//https://github.com/Nooder/javascript-in-depth/blob/main/019-promises/exercises/exercise-1.js
/*
    1. Print out "Program started" at the start of your code
    2. Create a Promise that resolves after 3 seconds
       and rejects after 2 seconds
    3. Log out the promise while it's pending
    4. Print out "Program in progress..." as well

    5. Print out "Program complete" if the promise fulfills
    6. Print out "Program failure" if the promise rejects

    HINT: Use setTimeout for the delay
*/

console.log("Program started");

const threeSecondPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, 3000)

    setTimeout(() => {
        reject()
    }, 2000)
})

console.log(threeSecondPromise);
console.log("Program in progress...");

threeSecondPromise.then(
    (value) => {
        console.log("Program complete");
    },
    (error) => {
        console.log("Program failure");
    }
)