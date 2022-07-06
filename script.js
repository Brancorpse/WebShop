// script que configura o click na barra de navegação mobile

const bar = document.getElementById('bar');
const nav = document.getElementById("navbar");
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
      nav.classList.add('active'); 
  })

}

// adicionando funcionalidade para o botão close mobile

if (close) {
    close.addEventListener('click', () => {
      nav.classList.remove('active'); 
  })

}