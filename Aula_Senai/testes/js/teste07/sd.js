var temperatura = Number( prompt("qual e a temperatura que ta atualmente?"))

if ( temperatura <= 0 ) {
    
    alert("esta muito frio, olha o gelo")
}

else if(temperatura>= 0 && temperatura< 15){ 
 
    alert("esta frio e so frio mesmo")
}
else if(temperatura>= 15 && temperatura< 25){

    alert("está bem agradável")
}

else if(temperatura>= 25  && temperatura<35 ){

    alert("está quente")
}

else if(temperatura>= 35  && temperatura<40 ){

    alert("está cara ta muito quente, por Deus vai para água serio vc pode morre")
}

else if(temperatura>=40  && temperatura<50 ){

    alert("ihhh morreu infelizmente")
}

else {
 
    alert("ta pegando e fogo ai sei nem como vc ta escrevendo ainda")
}
