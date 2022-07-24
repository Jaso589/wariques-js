function hamburgerMenu(menuBtn,menu,menuLink, bg) {
    
    const d = document;
    d.addEventListener('click',e=>{
        if(e.target.matches(menuBtn)||e.target.matches(`${menuBtn} *`)){
            d.querySelector(menu).classList.toggle("is-active");
            d.querySelector(menuBtn).classList.toggle("is-active");
            d.querySelector(bg).classList.toggle('is-active')
        }
        if(e.target.matches(menuLink)){
            d.querySelector(menu).classList.remove("is-active");
            d.querySelector(menuBtn).classList.remove("is-active");
            d.querySelector(bg).classList.remove('is-active')
        }
        if(e.target.matches(bg)){
            d.querySelector(menu).classList.remove("is-active");
            d.querySelector(menuBtn).classList.remove("is-active");
            d.querySelector(bg).classList.remove('is-active')
        }
    })   
}

const d = document;
d.addEventListener("DOMContentLoaded",(e)=>{
    hamburgerMenu(".btn-menu",".navbar", ".lista-menu a", '.bg-navbar')
})
