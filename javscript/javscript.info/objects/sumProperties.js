const sumSalaries = (salaries) => {
    let sumSalaries =  Object.entries(salaries).reduce((sum, current) => {
        return sum + current[1];
    }, 0)
    return sumSalaries
}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

console.log( sumSalaries(salaries) ); // 650