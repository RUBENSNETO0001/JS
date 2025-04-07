let nomeInput = document.querySelector('#nome')
let senhaInput = document.querySelector('#senha')
let idadeInput = document.querySelector('#idade')
let emailInput = document.querySelector('#email')
let botao = document.querySelector('button')

let p = document.querySelector('p')

botao.addEventListener('click', validar)

function validar(){

    let nome = nomeInput.value;
    let senha = senhaInput.value;
    let idade = idadeInput.value;
    let email = emailInput.value;

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

    else if(senha.trim() == ""){
        p.innerHTML = `preencha a informação!`
        p.style.color = 'red'
    }
    else if(senha.length < 5) {
        p.innerHTML='senha pequena demais!'
        p.style.color ='red'
    }
    
    else if(idade.trim() == ""){
        p.innerHTML = `preencha a informação!`
        p.style.color = 'red'
    }
    
    else if(email.trim() == ""){
        p.innerHTML = `preencha a informação!`
        p.style.color = 'red'
    }
    else if(email.length < 9) {
        p.innerHTML='email muito pequeno!'
        p.style.color ='red'
    }
    else{
        p.innerHTML=`ola, ${nome},seus dados foram enviados com sucesso!`
        p.style.color ='green'
    }
    
}