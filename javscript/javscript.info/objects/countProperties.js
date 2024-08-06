let user = {
    name: 'John',
    age: 30
};

const count = (obj) => {
    return Object.keys(obj).length;
}

console.log( count(user) ); // 2