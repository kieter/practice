// 1
// let fruits = ["Apples", "Pear", "Orange"];
//
// // push a new value into the "copy"
// let shoppingCart = fruits;
// shoppingCart.push("Banana"); ["Apples", "Pear", "Orange"];
//
// // what's in fruits?
// alert( fruits.length ); // [
// 2
// let styles = ['Jazz', 'Blues'];
// styles.push('Rock-n-Roll');
// styles[((styles.length - 1) / 2)] = 'Classics';
// console.log(styles.shift());
// styles.unshift('Rap', 'Reggae');
// console.log(styles);

// 3
// let arr = ["a", "b"];
//
// arr.push(function() {
//     alert( this );
// });
//
// arr[2](); // ? // ["a", "b", function(){}]
// since arr[2]() When a function is called as a method of an object, this refers to the object that the function is a
// method of. here it's arr and now has function in it

// 4
function sumInput() {
    let numbers = [];
    while(true) {
        prompt('Number please', '');
    }
}
sumInput()