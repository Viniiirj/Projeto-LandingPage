let leonardo = document.querySelector('#leonardo')
let samantha = document.querySelector('#samantha')
let bruna = document.querySelector('#bruna')
let setaEsquerda = document.querySelector('#seta-esquerda')
let setaDireita = document.querySelector('#seta-direita')

function rolarParaDireita() {
  leonardo.style= 'display:none'
  bruna.style = 'display:block'
  setaDireita.style = 'display:none'
  setaEsquerda.style = 'display:block'
}

function rolarParaEsquerda() {
  leonardo.style = 'display:block'
  bruna.style = 'display:none'
  setaDireita.style = 'display:block'
  setaEsquerda.style = 'display:none'
}