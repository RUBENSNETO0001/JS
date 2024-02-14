var botao = document.querySelector('button')
var resultado = document.querySelector('p')
botao.addEventListener('click',conta)

function conta(){
    var data = new Date()
    var ano = document.querySelector('#pergunta01').value
    var anoAtual = data.getFullYear()
    var soma = anoAtual - ano
    resultado.innerHTML =`sua idade é ${soma}`
    }
