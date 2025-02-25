/*var botao = document.querySelector('button')
var h2 = document.querySelector('h2')

botao.addEventListener('click' , adicionar)

function adicionar(){

   if(h2.classList.contains('vermelho')) {
     h2.classList.remove('vermelho')
   }

    else{
        h2.classList.add('vermelho')
    }

}

// segundo codigo

var botao = document.querySelector('button')
var h2 = document.querySelector('h2')

botao.addEventListener('click' , adicionar)

function adicionar(){
  h2.classList.toggle('vermelho')
}

// terceiro codigo
*/
var botao = document.querySelector('button')
var h2 = document.querySelector('h2')

botao.addEventListener('click' , alterar)
function alterar(){
h2.classList.replace('verde', 'azul')
}