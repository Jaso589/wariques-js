const menuLinks =  document.querySelectorAll('.menu-link')
const cards = document.querySelectorAll('.option-m')


function showAnswer(button, action) {
    cards.forEach(cards => {
        // cards.style.display = 'none';
        cards.classList.remove('is-flex')
    })
    // document.querySelector(`#${button}`).style.display = 'block';
    document.querySelector(`#${button}`).classList.add('is-flex');
    console.log(button)
    menuLinks.forEach(menuLinks =>{
        menuLinks.classList.remove(action)
    })
}

const actionMenu = 'active-options'
menuLinks.forEach((menuLinks) => {
    menuLinks.onclick = function() {
        showAnswer(menuLinks.dataset.button, actionMenu);
        
        menuLinks.classList.add(actionMenu)
    }
})