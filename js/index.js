const botaoMenu = document.querySelector('.cabecalho-menu');
const menu = document.querySelector('.menu-lateral');

botaoMenu.addEventListener('click', () => {
    if(menu.id.includes('menu-lateral-ativo')) {
        menu.removeAttribute('id', 'menu-lateral-ativo');
    } else {
        menu.setAttribute('id', 'menu-lateral-ativo');
    }
});