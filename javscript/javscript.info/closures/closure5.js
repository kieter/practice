"use strict";

let phrase = "Hello";

if (true) {
    let user = "John";

    function sayHi() {
        console.log(`${phrase}, ${user}`);
    }
}

sayHi();

// In strict mode, the function "sayHi" is not visible outside of the block scope where it is defined. The function "sayHi" is not defined in the global scope, so it is not accessible. The function "sayHi" is not defined. The code throws a ReferenceError.
// without "use strict" the code would output "Hello, John" since the function "sayHi" is defined in the global scope. The function "sayHi" is accessible. The function "sayHi" is defined. The code does not throw a ReferenceError.