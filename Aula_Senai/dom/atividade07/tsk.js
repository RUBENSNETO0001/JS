var seletor = document.querySelector('#piu')
var p= document.querySelector('p')


 seletor.addEventListener('click', alterar)

     function alterar (){
    var selecionado = seletor.value

    if(selecionado == 'luxe'){
        p.classList.add('luxe')
    }
    else if(selecionado == 'thebox'){
        p.classList.add('thebox')
    }
    else if (selecionado == 'connor'){
        p.classList.add ('connor')
    }
 }

