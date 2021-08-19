//console.log('Arquivo externo vinculado!')

let container = document.querySelector('main.container')
let mais = document.getElementById('more')
let card = document.querySelector('main div.card')
let busca = document.querySelector('.busca form')
let contador = 0
let like = document.querySelector('main div.likes')

like.style.cursor = 'pointer'

const curtir = elemento => {
  if (elemento.src.includes('/img/icons/heart.svg')) {
    ++contador
    elemento.src = 'img/red-heart.png'
    elemento.nextElementSibling.innerHTML = '1 like'
  } else {
    --contador
    elemento.src = 'img/icons/heart.svg'
    elemento.nextElementSibling.innerHTML = '0 like'
  }
}
mais.onclick = function (event) {
  mais.style.cursor = 'pointer'
  let cardCopia = card.cloneNode(true)
  container.insertBefore(cardCopia, container.childNodes[0])
}

busca.onmouseover = function (event) {
  busca.style.boxShadow = '0px 1px 3px black'
}

busca.onmouseout = function (event) {
  busca.style.boxShadow = 'none'
}
