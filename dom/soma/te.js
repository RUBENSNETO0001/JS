var numero = document.querySelector('#num1')
var numero2 = document.querySelector('#num2')
var resultado = document.querySelector('p')
var botao = document.querySelector('button')

botao.addEventListener('click' , somar )

function somar(){
   var n1 = Number(numero.value)
   var n2 = Number(numero2.value)
   var somar = n1 + n2
    resultado.innerHTML =`${somar}` 
   
}
