while (true) {

    var nome = prompt('Digite seu nome: ')
    var senha = prompt(' Digite sua idade: ')

    if (nome == senha) {
        alert("nome e senha nao podem ser iguais")
    }
    else {
        alert("vc entrou no sistema")
        break
    }
}