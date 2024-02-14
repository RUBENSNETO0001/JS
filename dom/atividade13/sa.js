
var cidades = [
    {
       nomedacidade:"Londrina/PR", 
       numero: 60
    },
    {
        nomedacidade:"SantoAndré" ,
        numero: 80
    },
    {
        nomedacidade:"São Gonçalo" , 
        numero: 100
    },
    {
        nomedacidade:"acre" ,
        numero:34

    },
    {
        nomedacidade:"Serra da Saudade" , 
        numero:9
    },
]
var reposta = document.querySelector("p")

var metodoFilter = cidades.filter(function(city){
    return city.numero > 50
 })
 
 metodoFilter.forEach(function(city){
    reposta.innerHTML += `${city.nomedacidade}`
 })
 
