let btn = document.querySelector('button');

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function click () {
    let bgbox = document.querySelector('#bgbox');
    let color = getRandomColor()
    bgbox.style.backgroundColor =  color;
    document.querySelector('.span').innerHTML = color; 
}
btn.onclick = function () { click() };