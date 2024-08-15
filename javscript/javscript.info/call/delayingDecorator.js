// Create a decorator delay(f, ms) that delays each call of f by ms milliseconds.

// In other words, delay(f, ms) returns a "delayed by ms" variant of f.
//
// In the code below, f is a function of a single argument, but your solution should pass all arguments and the context this.

function f(x) {
    console.log(x);
}

function delay(delayedFunction, ms) {
    function delayWrapper() {
        setTimeout(() => delayedFunction.call(this, ...arguments), ms)
    }

    return delayWrapper
}

// create wrappers
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms