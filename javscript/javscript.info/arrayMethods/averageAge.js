let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [ john, pete, mary ];

const getAverageAge = (arr) => {
    let totalAge = arr.reduce((sum, current) => {
        return sum + current.age
    }, 0)
    return totalAge / arr.length;

}

console.log( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28