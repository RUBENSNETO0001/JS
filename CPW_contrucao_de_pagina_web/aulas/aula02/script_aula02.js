function mostrarDados(){
    let nome =
        document.getElementById('nome').value;

    let estado =
        document.getElementById('estado').value;

    let cor = 
        document.getElementById('cor').value

    document.getElementById('resposta1').innerText = nome;
    document.getElementById('resposta2').innerText = estado;
    document.getElementById('resposta1').style.color = cor
    document.getElementById('resposta2').style.color = cor
}

//para a próxima aula, extrair a informação do botão radio e fazê-la aparecer na tela