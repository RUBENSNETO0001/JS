const pessoas =[
 {
    nome:"jorge", idade: 200000000000000
 }  ,
 {
    nome:"jennifer", idade: 14
 }  ,
 {
    nome:"otaviu", idade: 9
 }  ,
 {
    nome:"larissa", idade:19
 }  , 
 {
    nome:"gabe", idade: 35
 }  ,
]
//find = escolhe o primeiro com oque vc escolheu.
let MetodoFind = pessoas.find(function(pessoas){
   return pessoas.idade > 10
})
document.write("Método Find <br>")
document.write(`Exemplo 1: ${MetodoFind.nome}`)
document.write("<br>")

let resultadoFind = pessoas.find(pessoa => pessoa.idade > 10)
document.write(`Exemplo 2: ${resultadoFind.nome}`)
document.write("<br>")
document.write(`Exemplo 3: ${resultadoFind.nome[2]}`)
document.write("<br>")
document.write("<br>")
document.write("Método Filter <br>")

let MetodoFilter = pessoas.filter(function(pessoa){
   return pessoa.idade > 10
})

MetodoFilter.forEach(function(pessoa){
   document.writeln(pessoa.nome)
})
document.write("<br>")
document.write("<br>")

document.write("Método map<br>")

let MetodoMap = MetodoFilter.map(function(Filtrados){
   return Filtrados.nome
})

document.write("<br>")

document.write(MetodoMap)
