function voltar(){
    history.back();
}

function avancar(){
    history.forward();
}

function loc(){
    navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log("Latitude:", position.coords.latitude);
          console.log("Longitude:", position.coords.longitude);
        },
        (error) => {
          console.error("Erro ao obter localização:", error.message);
        }
      );
}

function paragrafo(){
    document.getElementById('p1').innerHTML = "Voltar";
    document.getElementById('p1').style.color = 'blue'

}

function paragrafo2(){
    document.getElementById('p1').innerHTML = "Avançar";    
    document.getElementById('p1').style.color = 'red'

}

function sumirteste(){
    //document.getElementById('p2').style.display = 'none'
    document.getElementById('p2').style.visibility = 'hidden'
}

function aparecerteste(){
    //document.getElementById('p2').style.display = 'block'
    document.getElementById('p2').style.visibility = 'visible'
}

function alerta(){
    alert('Opaaaaa');
}