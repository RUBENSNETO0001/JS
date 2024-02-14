var input_numero= document.querySelector('#num1')

var input_numero2= document.querySelector('#num2')

var botao = document.querySelector('button')

var resultado = document.querySelector('p') 

botao.addEventListener('click' , verificar )

function verificar(){
   var numero = Number(input_numero.value)
   var numero2 = Number(input_numero2.value)


   if(numero > numero2){
    resultado.innerHTML =`o maior numero é ${numero}` 
   }
   else if(numero == numero2){
    resultado.innerHTML =`os numeros são iguais!` 
   }
   else{
    resultado.innerHTML =`o maior numero é ${numero2}`
   }
}

