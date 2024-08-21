const tenPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10)
    }, 1000)
})

const twentyPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(20)
    }, 2000)
})

Promise.all([tenPromise, twentyPromise]).then((values) => {
    const sum = values.reduce((total, current) => {
        return current + total
    }, 0)
    console.log(sum);
})