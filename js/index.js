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

// ANIMAÇÃO NOS ELEMENTOS DA PÁGINA

const observer = new IntersectionObserver( entries => {
    entries.forEach( entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const scrollElements = document.querySelectorAll('[data-scroll]')

scrollElements.forEach( element => observer.observe(element));

// SOMBRA NO CABEÇALHO QUANDO SCROLLAR A PÁGINA

const cabecalho = document.querySelector('.cabecalho');

window.onscroll = () => {
    if(window.scrollY >= 50 || window.scrollYOffset >= 50) {
        cabecalho.classList.add('cabecalho-scroll');
    } else {
        cabecalho.classList.remove('cabecalho-scroll');
    }
}

// FUNCIONALIDADE DO BOTÃO "VEJA MAIS"

const botaoVejaMais = document.querySelectorAll('.amostras-botao');

botaoVejaMais.forEach( botao => {
    botao.addEventListener('click', () => {
        if(botao.parentNode.children[0].classList.contains('logo-techwise')) {
            botao.parentNode.parentNode.children[2].classList.remove('template-hidden');
            botao.parentNode.parentNode.children[3].classList.remove('template-hidden');
            botao.parentNode.style.display = 'none';
            botao.parentNode.parentNode.children[0].style.display = 'none';
        } else if(botao.parentNode.children[0].classList.contains('logo-motionmotors')) {
            botao.parentNode.parentNode.children[2].classList.remove('template-hidden');
            botao.parentNode.parentNode.children[3].classList.remove('template-hidden');
            botao.parentNode.style.display = 'none';
            botao.parentNode.parentNode.children[0].style.display = 'none';
        } else if(botao.parentNode.children[0].classList.contains('logo-pizzaria')) {
            botao.parentNode.parentNode.children[2].classList.remove('template-hidden');
            botao.parentNode.parentNode.children[3].classList.remove('template-hidden');
            botao.parentNode.style.display = 'none';
            botao.parentNode.parentNode.children[0].style.display = 'none';
        } else if(botao.parentNode.children[0].classList.contains('logo-elitemetal')) {
            botao.parentNode.parentNode.children[2].classList.remove('template-hidden');
            botao.parentNode.parentNode.children[3].classList.remove('template-hidden');
            botao.parentNode.style.display = 'none';
            botao.parentNode.parentNode.children[0].style.display = 'none';
        } else if(botao.parentNode.children[0].classList.contains('logo-innovatek')) {
            botao.parentNode.parentNode.children[2].classList.remove('template-hidden');
            botao.parentNode.parentNode.children[3].classList.remove('template-hidden');
            botao.parentNode.style.display = 'none';
            botao.parentNode.parentNode.children[0].style.display = 'none';
        }
    });
});

const botaoVejaMaisVoltar = document.querySelectorAll('.amostras-botao-voltar');

botaoVejaMaisVoltar.forEach( botao => {
    botao.addEventListener('click', () => {
        if(botao.parentNode.children[1].children[0].classList.contains('logo-techwise')) {
            botao.parentNode.children[2].classList.add('template-hidden');
            botao.parentNode.children[3].classList.add('template-hidden');
            botao.parentNode.children[1].style.display = 'flex';
            botao.parentNode.children[0].style.display = 'block';
        } else if(botao.parentNode.children[1].children[0].classList.contains('logo-motionmotors')) {
            botao.parentNode.children[2].classList.add('template-hidden');
            botao.parentNode.children[3].classList.add('template-hidden');
            botao.parentNode.children[1].style.display = 'flex';
            botao.parentNode.children[0].style.display = 'block';
        } else if(botao.parentNode.children[1].children[0].classList.contains('logo-pizzaria')) {
            botao.parentNode.children[2].classList.add('template-hidden');
            botao.parentNode.children[3].classList.add('template-hidden');
            botao.parentNode.children[1].style.display = 'flex';
            botao.parentNode.children[0].style.display = 'block';
        } else if(botao.parentNode.children[1].children[0].classList.contains('logo-elitemetal')) {
            botao.parentNode.children[2].classList.add('template-hidden');
            botao.parentNode.children[3].classList.add('template-hidden');
            botao.parentNode.children[1].style.display = 'flex';
            botao.parentNode.children[0].style.display = 'block';
        } else if(botao.parentNode.children[1].children[0].classList.contains('logo-innovatek')) {
            botao.parentNode.children[2].classList.add('template-hidden');
            botao.parentNode.children[3].classList.add('template-hidden');
            botao.parentNode.children[1].style.display = 'flex';
            botao.parentNode.children[0].style.display = 'block';
        }
    })
});
