let arr = [5, 3, 8, 1];

const filterRange = (arr, higherEqualTo, lowerEqualTo) => {
    return arr.filter(value => {
        if (value >= higherEqualTo && value <= lowerEqualTo) {
            return value;
        }
    })
}

let filtered = filterRange(arr, 1, 4);

console.log( filtered ); // 3,1 (matching values)

console.log( arr ); // 5,3,8,1 (not modified)

