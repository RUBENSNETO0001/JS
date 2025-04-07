var posicaoAtualdoElemento = 0; 

document.addEventListener('keydown',carro)

function carro( evento ){
var Elementodiv = document.querySelector('#Elemento');

if( evento.code === 'ArrowUp'){
    posicaoAtualdoElemento = posicaoAtualdoElemento + 10;

    Elementodiv.style.left = posicaoAtualdoElemento + "px"
}
}