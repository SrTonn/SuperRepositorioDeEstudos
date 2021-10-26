let button = document.querySelector('.btn')
let body = document.querySelector('body')
let h1 = document.querySelectorAll('h1')

addEventListener('click', (e) => {
  body.style = 'background-color: green;'
  colorirFundo(h1)
})

function colorirFundo(elementos) {
  elementos.forEach(e => {
    e.style = 'background-color: green;'
  })
}