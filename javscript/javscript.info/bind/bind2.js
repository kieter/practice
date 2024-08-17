function f() {
    alert(this.name);
}

f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

f(); // John, cannot be rebound