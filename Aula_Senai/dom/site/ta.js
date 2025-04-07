let nomeInput = document.querySelector('#nome')
let senhaInput = document.querySelector('#senhadocidadão')
let nascimentoInput = document.querySelector('#datadenascimento')
let emailInput = document.querySelector('#emaildocidadão')


let botao = document.querySelector('button')
let p = document.querySelector('p')

botao.addEventListener('click', validar)

function validar(){

    let nome = nomeInput.value;
    let datadenascimento = nascimentoInput.value; 
    let email = emailInput.value;
   let senha = senhaInput.value;
    
    if(nome.trim() == ""){
        p.innerHTML = `preencha a informações!`
        p.style.color = 'red'
    }
    else if(nome.length < 3) {
        p.innerHTML='nome muito pequeno!'
        p.style.color ='red'
    }
    else if(!isNaN(nome)){
        p.innerHTML='seu nome não pode ser um número!'
        p.style.color ='red'
    }
    else if(senha.trim() == ""){
        p.innerHTML = `preencha a informações!`
        p.style.color = 'red'
    }
    else if(senha.length < 6) {
        p.innerHTML='senha pequena demais!'
        p.style.color ='red'
    }
   
    else if(datadenascimento.trim() == ""){
        p.innerHTML = `preencha a informações!`
        p.style.color = 'red'
    }
    else if(datadenascimento.length < 6 ) {
        p.innerHTML='data de nascimento pequena!'
        p.style.color ='red'
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
        localStorage.setItem("nome", nome);
        localStorage.setItem("email", email);

        window.location.href="concluido.html";
       
    }
}

