let nomeInput = document.querySelector('#nome')
let apelidoInput = document.querySelector('#apelido')
let nascimentoInput = document.querySelector('#datadenascimento')
let emailInput = document.querySelector('#emaildocidadão')


let botao = document.querySelector('button')
let p = document.querySelector('p')

botao.addEventListener('click', validar)

function validar(){

    let nome = nomeInput.value;
    let apelido = apelidoInput.value;
    let datadenascimento = nascimentoInput.value; 
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
    else if(apelido.trim() == ""){
        p.innerHTML = `preencha a informações!`
        p.style.color = 'red'
    }
    else if(apelido.length < 3) {
        p.innerHTML='apelido muito pequeno igual seu pau!'
        p.style.color ='red'
    }
    else if(!isNaN(apelido)){
        p.innerHTML='sem numero o imbecil'
        p.style.color ='red'
    }
   
    else if(datadenascimento.trim() == ""){
        p.innerHTML = `preencha a informações!`
        p.style.color = 'red'
    }
   
    else if(email.trim() == ""){
        p.innerHTML = `preencha a informações!`
        p.style.color = 'red'
    }
    else if(email.length < 7) {
        p.innerHTML='email invalido!'
        p.style.color ='red'
    }
    else{
        p.innerHTML=`ola, ${nome},seus dados foram enviados com sucesso!`
        p.style.color ='green'
    }
}