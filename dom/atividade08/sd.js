var img = document.querySelector('img')
var bottan = document.querySelector('#trocar')
var botin = document.querySelector('#voltar')

bottan.addEventListener('click',evoluir)


function evoluir() {
  img.src="https://a-static.mlcdn.com.br/450x450/mascara-macaca-macaco-animal-carnaval-festas-spook-elastico/magiccenter/11546/4880acba1a5f71bd94ee1ec057d87b7a.jpg"

}

botin.addEventListener('click',desvoloir)
function desvoloir(){
  img.src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png"
}