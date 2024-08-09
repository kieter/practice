function Counter() {
    let count = 0;

    this.up = function() {
        return ++count;
    };
    this.down = function() {
        return --count;
    };
}

let counter = new Counter();

console.log( counter.up() ); // ?
console.log( counter.up() ); // ?
console.log( counter.down() ); // ?

// 1, 2, 1. The counter is independent. Each call of counter.up() starts a new counter since its it's own variable. The same goes for counter.down().