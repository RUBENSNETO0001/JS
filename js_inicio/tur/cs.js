/*var nome = "hiago"
var idade = 22

document.write("meu nome é"+ idade) //jeito antigo

document.write(`meu nome é ${nome} e minha idade ${idade}`)// jeito novo e melhor entendimento
//usar o ${cadeia} e o ``. 

var preco = Number ( prompt("digite seu desconto? "))
if (preco > 100) {
    document.write("desconto de 10% liberado");
} else if(preco >50){
    document.write("desconto de 5% liberado");
} else{
    document.write("desconto nao foi liberado");

    // vai imprimir o "desconto de 5% liberado"
}
*/
/*
var idade = 25; //Number ( prompt("digite idade?"))
var possuicartira = true;

if (idade >= 18 && possuicartira) {
    document.write("pode dirigir");
}
else {
    document.write(" nao pode dirigir");
}
*/

var idade = Number( prompt("digite idade?"))
var possuicarteira =( prompt("vc tem carteira?"))

if (idade >= 18 && possuicarteira == "sim") {
    document.write("pode dirigir")
}
else if (idade && possuicarteira =="não") {
    document.write("vc tem idade mais nao tem carteira")
}
else {
    document.write("nao tem idade para isso")
}
gf