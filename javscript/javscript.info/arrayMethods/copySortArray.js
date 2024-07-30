let arr = ["HTML", "JavaScript", "CSS"];

const copySorted = (arr) => {
    return arr.slice().sort();
}

let sorted = copySorted(arr);

console.log( sorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (no changes)