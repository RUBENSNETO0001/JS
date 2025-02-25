var posicaoAtualdoelemento = 0; 

document.addEventListener('keydown',carro)

function carro(evento){
var elementodiv = document.querySelector('#elemento');

if( evento.code === 'ArrowRight'){
    posicaoAtualdoelemento = posicaoAtualdoelemento + 10;
    elementodiv.style.left = posicaoAtualdoelemento + "px";
}
} 