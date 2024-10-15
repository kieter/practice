/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
export default function chunk(array, size = 1) {
    let result = [];
    let chunk = [];
    array.forEach((element, i, theArray) => {
        chunk.push(element);
        if (((i+1) % size) === 0) {
            result.push(chunk);
            chunk = [];
        }
    })

    if (chunk.length > 0) {
        result.push(chunk);
    }

    return result;
}

// console.log(chunk(['a', 'b', 'c', 'd'])); // => [['a'], ['b'], ['c'], ['d']]
// console.log("result", chunk([1, 2, 3, 4], 2)); // => [[1, 2], [3, 4]]
console.log(chunk([1, 2, 3, 4], 3));
