// const botaoMenu = document.querySelector('.cabecalho-menu');
// const menu = document.querySelector('.menu-lateral');

// botaoMenu.addEventListener('click', () => {
//     if(menu.id.includes('menu-lateral-ativo')) {
//         menu.removeAttribute('id', 'menu-lateral-ativo');
//         setTimeout( () => {
//             menu.classList.remove('menu-lateral-display-flex');
//             menu.classList.add('menu-lateral-display-none');
//         }, 300);
//     } else {
//         menu.classList.remove('menu-lateral-display-none');
//         menu.classList.add('menu-lateral-display-flex');
//         setTimeout( () => {
//             menu.setAttribute('id', 'menu-lateral-ativo');
//         }, 100);
//     }
// });

const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const scrollElements = document.querySelectorAll('[data-scroll]')

scrollElements.forEach( element => observer.observe(element));

console.log(scrollElements);
