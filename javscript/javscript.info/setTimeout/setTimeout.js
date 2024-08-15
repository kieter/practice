// const logNumber = (current, to) => {
//     console.log(current);
//     if (current < to) {
//         setTimeout(() => logNumber(current + 1, to), 1000);
//     }
// }

// const printNumbers = (from, to) => {
//     let current = from;
//     const timer = setTimeout(function logNumber() {
//         console.log(current);
//         if (current < to) {
//             setTimeout(logNumber, 1000)
//         }
//         current += 1;
//     }, 1000)
// }

const printNumbers = (from, to) => {
    let current = from;
    const timer = setInterval(function logNumber() {
        console.log(current);
        if (current >= to) {
            clearInterval(timer)
        }
        current +=1
    }, 1000)

}

printNumbers(1, 3)