var root = document.getElementById('root');

var header = document.createElement('div');
header.innerHTML = 'Header'

var sideBar = document.createElement('div');
sideBar.innerHTML = 'SideBar'

var content = document.createElement('div');
content.innerHTML = 'Content'

root.append(header);
root.append(sideBar);
root.append(content);