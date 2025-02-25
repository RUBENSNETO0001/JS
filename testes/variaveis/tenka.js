var nome = "Ruren"
var email = "reruen@gmail.com"
var saldo = 0.25
var idade = 1000000
var sua_mae = "ola"

document.write(nome) //valida o codigo
document.write(", meu nome é " + nome) //valida o codigo + meu nome é

console.log("esse e o " + email)// mostra no console do navegador
console.log(email)// normal

alert("meu saldo é" + saldo)//vai aparecer a janela  
alert(saldo)//mormal

//exemplos
var nome = "thiago"
console.log("olá, " + nome)

prompt("qual e seu nome?")// vai na janela do site, serve para pergunta ao usuario 


var preco = 101;
if (preco > 100) {
    alert("desconto liberado");// vai imprimir "desconto liberado"
}
else {
    alert("nenhum desconto foi liberado");
}

var nome = "hiago"
var idade = 22

document.write("meu nome é $(nome)")