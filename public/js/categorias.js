// const cards = document.querySelectorAll('.hero-res');
const arrowBtn = document.querySelectorAll('.categoria');
// const navLinks =  document.querySelectorAll('nav-link')


function showAnswer(button, action) {
    // cards.forEach(cards => {
    //     cards.style.display = 'none';
    // })
    // document.querySelector(`#${button}`).style.display = '';
    console.log(button)
    arrowBtn.forEach(arrowBtn =>{
        arrowBtn.classList.remove(action)
    })
}

/* -------------- CLICK EVENT -------------- */


const actionctg = 'bg-active'
arrowBtn.forEach((arrowBtn) => {
    arrowBtn.onclick = function() {
        showAnswer(arrowBtn.dataset.button, actionctg);
        
    arrowBtn.classList.add(actionctg)
    }
})