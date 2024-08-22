const randomNumber = function* (){
    while (true) {
        yield Math.floor(Math.random() * 100);
    }
}

const randomNumberGenerator = randomNumber()

for (let i = 0; i <= 10; i++) {
    console.log(randomNumberGenerator.next().value)
}