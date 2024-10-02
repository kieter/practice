/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    let timeoutId = null;
    return function(...args) {
        const context = this; //for object methods
        clearTimeout(timeoutId)
        timeoutId = setTimeout(function() {
            func.apply(context, args)
        }, wait)
    }
}

let i = 0;
function increment() {
    i++;
}

const debouncedIncrement = debounce(increment, 100);
debouncedIncrement();
console.log(i);
debouncedIncrement();

// setTimeout(function() {
//   debouncedIncrement()
// }, 200);
