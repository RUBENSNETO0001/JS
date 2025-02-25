var inputNome = document.querySelector('#nome')
var inputEmail = document.querySelector('#email')

var resultado = document.querySelector('#resultado')

var botao = document.querySelector('#btn')

function cadastrar(){
    var nome = inputNome.value
    var email = inputEmail.value

    resultado.innerHTML = `seu nome é ${nome} \n seu email é ${email}`
}

botao.addEventListener('click',  cadastrar)