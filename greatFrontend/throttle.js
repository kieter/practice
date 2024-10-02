export default function throttle(func, wait) {
    let shouldThrottle = false;
    return function(...args) {
        if (!shouldThrottle) {
            func.apply(this, args)
        }
        shouldThrottle = true;
        setTimeout(function() {
            func.apply(args);
            shouldThrottle = false;
        }, wait)
    }
}