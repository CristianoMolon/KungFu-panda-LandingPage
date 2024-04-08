document.addEventListener('DOMContentLoaded', function () {
    const description = document.querySelectorAll('[data-char-desc]');

    for (let i = 0; i < description.length; i++) {
        description[i].addEventListener('click', OpenCloseDescription)
    }
})

function OpenCloseDescription(element) {
    const classe = 'character__description--is-open';
    const elementFather = element.target.parentNode;

    elementFather.classList.toggle(classe);
}