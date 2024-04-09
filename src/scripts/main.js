document.addEventListener('DOMContentLoaded', function () {
    const sectionHero = document.querySelector('.hero');
    const heightHero = sectionHero.clientHeight;

    window.addEventListener('scroll', function() {
        const actualPosition = window.scrollY;
    
        if (actualPosition < heightHero) {
            headerOcult();
        } else {
            headerVisible();
        }
    })
})

function headerOcult() {
    const header = document.querySelector('header');
    header.classList.add('header--is-hidden');
}

function headerVisible() {
    const header = document.querySelector('header');
    header.classList.remove('header--is-hidden');
}