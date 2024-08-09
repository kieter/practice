let x = 1;

function func() {
    console.log(x); // ?

    let x = 2;
}

func();

// Is error because variables, unlike functions, are unitialized until they're defined in the code
// Functions are fine like this