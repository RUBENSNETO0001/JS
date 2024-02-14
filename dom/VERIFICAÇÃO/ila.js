let nomeInput = document.querySelector('#nome')
let botao = document.querySelector('button')
let p = document.querySelector('p')

botao.addEventListener('click', validar)

function validar(){

    let nome = nomeInput.value;

    if(nome.trim() == ""){
        p.innerHTML = `preencha a informações!`
        p.style.color = 'red'
    }
    else if(nome.length < 3) {
        p.innerHTML='nome muito pequeno!'
        p.style.color ='red'
    }
    else if(!isNaN(nome)){
        p.innerHTML='seu nome não pode ser um número, so os filhos do Elon Mask!'
        p.style.color ='red'
    }
    else{
        p.innerHTML=`ola, ${nome},seus dados foram enviados com sucesso!`
        p.style.color ='green'
    }
}