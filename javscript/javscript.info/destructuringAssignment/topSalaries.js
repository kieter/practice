let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalaries = (salaries) => {
    if (!salaries) {
        return null;
    }

    return Object.entries(salaries).reduce(([largestPerson, largestSalary], [person, salary]) => {
        if (salary > largestSalary) {
            return [person, salary]
        }
        return largestPerson
    }, [null, 0])
}

console.log(topSalaries(salaries));