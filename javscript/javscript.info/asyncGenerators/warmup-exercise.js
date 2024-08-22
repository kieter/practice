const randomNumberDelayed = async function* () {
    while (true) {
        const randomNumber = Math.floor(Math.random() * 10)
        yield new Promise((resolve, reject) => {
            setTimeout(() => resolve(randomNumber), 1000)
        })
    }
}

const delayedRandomNumberGenerator = randomNumberDelayed();
const main = async () => {
    for await (const number of delayedRandomNumberGenerator) {
        console.log(number)
    }
}

main();