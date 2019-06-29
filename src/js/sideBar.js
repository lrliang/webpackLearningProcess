function SideBar(){
    var dom = document.getElementById('root');
    var sideBar = document.createElement('div');
    sideBar.innerHTML = 'SideBar'
    dom.append(sideBar)
}

export default SideBar