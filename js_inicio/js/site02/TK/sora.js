var nome ="thiago"
console.log("olá, "+ nome)

prompt("qual e seu nome?")

var idade = Number( prompt("digite idade?"))

if (idade >= 18 && idade <=59 ) {
    document.write("vc pode entrar")
    alert("vc ainda e um adulto ja")
}

else if(idade >= 14 && idade < 18) /*vai para no 17 ou seja 14 ate 17 que ta emnso de 18*/ { 
    document.write("vc pode entrar")
    alert("vc ainda e um adolecente")
}
else if( idade>= 60){
document.write("vc pode entrar")
    alert("vc e um idoso")
}
else {
    document.write("nao tem idade para entrar")
    alert("vc ainda e uma criança, saia do site")
}
