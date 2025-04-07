var n1 = document.querySelector('#pesonal')
var n2 = document.querySelector('#alto')
var resultado = document.querySelector('p')
var botao = document.querySelector('#btn')

botao.addEventListener("click", somar)

function somar(){

    var n1 = Number(pesonal.value)
    var n2 = Number(alto.value)

    var somar = n1/(n2 * n2)
    
    resultado.innerHTML =`${somar.toFixed(2)}` 
    
 }