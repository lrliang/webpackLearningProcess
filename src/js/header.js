function Header(){
    var dom = document.getElementById('root');
    var header = document.createElement('div');
    header.innerHTML = 'Header'
    dom.append(header)
}

export default Header