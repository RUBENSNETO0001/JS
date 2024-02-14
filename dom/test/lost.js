var nome = document.querySelector('#nome')

var p = document.querySelector('#resultado')

nome.addEventListener('change' , evento)

function evento(){
    p.innerHTML = nome.value

    nome.value=""
}