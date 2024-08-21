new Promise(function(resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!");
    }, 1000);
}).catch(alert);

// not caught, `only a`ll synchronous errors are handle since it happens later the catch doesn't happen