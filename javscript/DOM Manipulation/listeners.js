// EVENT LISTERNERS

// element.addEventListener("click", function, bubbleBOOL)
const buttonTwo = document.querySelector('.btn-2');

function alertBtn () {
    alert('I also love javascript');
}

buttonTwo.addEventListener("click", alertBtn)

const box3 = document.querySelector('.box-3');


// Mouseover
function changeBgColour() {
    box3.style.backgroundColor = 'blue';
}

box3.addEventListener("mouseover", changeBgColour);