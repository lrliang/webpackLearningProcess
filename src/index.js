import Header from './js/header'
import Content from './js/content'
import SideBar from './js/sideBar'
import logo from './logo.jpg'

console.log(logo)
const img = new Image()
img.src = logo

const root = document.getElementById('root')
root.append(img)

new Header()
new Content()
new SideBar()
