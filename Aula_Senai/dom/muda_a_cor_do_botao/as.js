var botao = document.querySelector('button')
var h2 = document.querySelector('h2')

botao.addEventListener('click' , adicionar)

function adicionar(){
    h2.classList.add('vermelho')
}
