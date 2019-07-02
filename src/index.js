import './style.scss'
import counter from './counter'
import number from './number'

counter()
number()

let button = document.createElement('button')
button.innerHTML = '新增'
document.body.appendChild(button)

button.onclick = function () {
  let div = document.createElement('div')
  div.innerHTML = 'item'
  document.body.appendChild(div)
}

if (module.hot) {
  module.hot.accept('./number', () => {
    document.body.removeChild(document.getElementById('number'))
    number()
  })
}

