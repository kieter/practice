const goGetCandies = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ candy: "sour keys", quantity: 10 })
        }, 2000)
    })
}

const sellCandies = (candies) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(candies.quantity * 25)
        }, 3000)
    })
}

const main = async () => {
    const candies = await goGetCandies();
    const money = await sellCandies(candies);
    console.log(money);
}

main();
