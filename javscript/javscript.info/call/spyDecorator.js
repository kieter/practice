/*
* Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

Every call is saved as an array of arguments.

For instance:
* */
function spy(spiedOnFunction) {
    function wrapper(...args) {
        wrapper.calls.push(args)
        return spiedOnFunction.call(this, ...args)
    }

    wrapper.calls = []

    return wrapper;
}


function work(a, b) {
    console.log( a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
