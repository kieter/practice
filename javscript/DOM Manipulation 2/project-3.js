const accordion = document.getElementsByClassName('content-container');
const expandAllButton = document.getElementById('expandAll')

expandAllButton.addEventListener('click', function() {
    expandAllButton.innerText = 'Collapse all'
    const accordions = document.getElementsByClassName('content-container');
    for (i = 0; i < accordions.length; i++) {
        accordions[i].classList.toggle('active');
    }
})

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function (){
        this.classList.toggle('active');
    })
}