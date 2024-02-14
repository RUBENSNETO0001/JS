// Enquanto for verdade, ou seja enquanto eu não encerrar meu programa com uma condição, ele vai ficar executando
while(true) {

// Prompt criado para o usuário visualizar as opções do menu, usamos o In para quebrar linhas
var opcao= prompt("Escolha uma opção do menu:\n\n1 - Cadastar \n2 - Listar último usuário \n3 - Sair do programa") 

// Verificamos a opção que o usuário digitou, se for "1" vamos cadastrar um usuário
if(opcao == "1") {
var nome = prompt('Digite seu nome: ')
var idade = prompt(' Digite sua idade: ')
var email = prompt('Digite seu email: ')

// Aqui alertamos o usuário com o nome que foi cadastrado. 
alert(`usuário ${nome} foi cadastrado com sucesso!`)
}

// Verificamos a opção que o usuário digitou, se for "2" vamos listar o ultimo usuário cadastrado
else if(opcao == "2") {
  
    // Aqui fazemos uma verificação, para caso o usuário clique em listar antes de cadastrar, apareça essa mensagem!
    // Se o nome, idade, email estiver indefinido, vamos alertar o usuário com uma mensageml
    if(nome == undefined || idade == undefined || email == undefined)
     // undefined e para verificar se tem algum ex: nome == tem nome?
    {
    alert('Não foi encontrado nenhum usuário cadastradol')
    }
    
    // Caso tenha usuário cadastrado, entramos na condição ELSE e mostramos o usuário.
    else {
    alert(`Nome: ${nome}\n Idade: ${idade}\nEmail: ${email}`)
    }
    }

    // Verificamos a opcão que o usuário digitou, se for "3" O programa é encerrado.
    else if(opcao == "3") {
        alert('bye,vc saiu amigo do programa')
        break;
    }
}