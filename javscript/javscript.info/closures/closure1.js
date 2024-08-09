let name = "John";

function sayHi() {
    console.log("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

// Pete, it takes the latest value of the "name" variable in the outer lexical environment.