var botao = document.querySelector('.lodk')
var bottoniks = document.querySelector('.set')
var h2 = document.querySelector('h2')

bottoniks.addEventListener('click' , adicionar)
botao.addEventListener('click' , tirar)

function adicionar(){
    h2.classList.add('vermelho')
}


function tirar(){
    h2.classList.remove('vermelho')
}
