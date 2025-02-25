alert(' bem-vindo ao sistema! \n antes de iniciar é necessesário fazer um cadastro para acessar o sistema')

var nome = prompt('Digite seu nome: ')

var senha = prompt('Digite sua senha: ')

alert(`usuário ${nome},foi cadastrado com sucesso!`)



var login
var password

while(login != nome || senha != password) {
    var login = prompt('Qual seu login: ')
    var password = prompt('Qual sua senha: ')

    if(login == nome && senha == password) {
        alert('Entrou')
    }

    else {
        alert('ERRO!')
    }
}

while(true){

    var numero =  (prompt(`USUARIO LOGADO: ${nome}\n ESCOLHA UMA OPÇÕES: \n\n1 - Contador \n2 - descobrir o tamanho de um texto \n3 - adicionar elementos a uma lista vazia  \n4 - Sair do cadastro`))
    
    if(numero == '1'){ 
        var contador = (prompt('valor:'))
        var contador2 = (prompt('valor2:'))
    for(contador; contador <= contador2; contador++){
    if(contador <= contador2){
    document.writeln(contador )
    }
}
    }  

    else if(numero == '2'){
        var rou = (prompt("adicione texto"))
     alert('Tamanho do array e '+ rou.length)
}

else if (numero == '3'){
    var valor =  (prompt("escolha um e digite-o\n\n01 - adicionar elementos \n02 - visualizar o que tem na lista"))

    if(valor == '01'){
        var pessoa =[]  
        var palavranova = prompt('digite a quantidade:')
        var cont = 0
        for(cont;cont <= palavranova; cont++){
            var conte = prompt("adicione algum a lista")
            pessoa.push(conte)
          }
    }
   
        else if( valor == '02'){
            alert(`algum na lista foi adicionado! ${pessoa}`)
           }
}

       else if(numero == "4") {
           
                break;
            }   
}