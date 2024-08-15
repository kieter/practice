let worker = {
    someMethod() {
        return 1;
    },

    slow(x) {
        console.log("Called with " + x);
        return x * this.someMethod(); // (*)
    }
};

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x);
        }
        console.log("line 18 this ", this)
        let result = func.call(this, x); // "this" is passed correctly now
        cache.set(x, result);
        return result;
    };
}

worker.slow = cachingDecorator(worker.slow); // now make it caching

console.log( worker.slow(2) ); // works
console.log( worker.slow(2) ); // works, doesn't call the original (cached)