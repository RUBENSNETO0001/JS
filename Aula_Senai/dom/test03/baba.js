var p = document.querySelector('p')
function tempo(){
var data = new Date()
var dia = data.getDate() 
var dia = data.getDay() 
var mes = data.getMonth() +1
var ano = data.getFullYear()

let horaAtual = data.getHours()
let minutoAtual = data.getMinutes()
let segundoAtual = data.getSeconds()


p.innerHTML = `Mês: ${mes} <br>Dia: ${dia} <br>Ano: ${ano}<br> Hora: ${horaAtual} <br>minuto ${minutoAtual} <br>segundo ${segundoAtual} ` 
}
setInterval(tempo, 1000) //atualização a cada 1 segundo

/*var p = document.querySelector('p')

var data = new Date()

var dia = data.getDay()
var mes = data.getMonth() 
var ano = data.getFullYear()

let horaAtual = data.getHours()
let minutoAtual = data.getMinutes()
let segundoAtual = data.getSeconds()

p.innerHTML = `Mês: ${mes} <br>Dia: ${dia} <br>Ano: ${ano}<br> Hora: ${horaAtual} <br>minuto ${minutoAtual} <br>segundo ${segundoAtual} `
*/
