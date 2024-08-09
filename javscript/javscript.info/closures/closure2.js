function makeWorker() {
    let name = "Pete";

    return function() {
        console.log(name);
    };
}

let name = "John";

// create a function
let work = makeWorker();

// call it
work(); // what will it show?

// Pete, the function "work" is created in the outer lexical environment, where "name" is "Pete".