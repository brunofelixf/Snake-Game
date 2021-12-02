let canvas = document.getElementById('snake')
let context = canvas.getContext('2d')
let box = 32

function criarBG() {
  context.fillStyle = 'lightgreen'
  context.fillRect(10, 10, 16 * box, 16 * box)
}

criarBG()
