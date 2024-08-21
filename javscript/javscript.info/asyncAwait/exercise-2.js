const fetchFast = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Fast done!")
        }, 2000)
    })
}

const fetchSlow = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Slow done")
        }, 6000)
    })
}

console.log("Program starting");

const main = async () => {
    const fastData = await fetchFast();
    console.log(fastData);
    const slowData = await fetchSlow();
    console.log(slowData);
}

main().then("Program complete!");