function f(a) {
    console.log(a);
}

function throttle(func, ms) {
    let isThrottled = false;
    let ignoredArgs;
    let ignoredThis;
    function wrapper() {
        if (isThrottled) {
            ignoredArgs = arguments // save ignored args for later
            // ignoredThis = this;
            return;
        }
        isThrottled = true;
        func.apply(this, arguments);
        setTimeout(function() {
            // once timer is over, call function with latest args
            isThrottled = false
            if (ignoredArgs) {
                wrapper.apply(this, ignoredArgs) // calls wrapper to reset timer
                // ignoredThis = null;
                ignoredArgs = null;
            }
        }, ms)
    }
    return wrapper;
}
// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000);


f1000(1); // shows 1
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(2); // (throttling, 1000ms not out yet)
f1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored