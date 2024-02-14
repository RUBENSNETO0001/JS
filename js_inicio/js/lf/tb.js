var valor1 = Math.floor(Math.random()*20)

var valor2 = prompt("numero de 1 a 20?")

if (valor2 == valor1) {
    alert("o valor aplicado e o mesmo que o valor digitado")
}

else {
   alert(`o valor aplicado não e o mesmo que vc digito, eu pensei nesse ${valor1}`)
}
