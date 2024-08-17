function sayHi() {
    alert( this.name );
}
sayHi.test = 5;

let bound = sayHi.bind({
    name: "John"
});

alert( bound.test ); // what will be the output? why?

// undefined, we bound a new object, it does not have test