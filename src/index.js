'use strict';

// let socket = io();
// let el;
// el = document.getElementById('server-time');

// socket.on('time', (timeString) => {
//   el.innerHTML = 'Server time: ' + timeString;
// });
const el = document.getElementById('server-time');

const $root = document.querySelector('#root')

const myCanvas =  new MyCanvas()
myCanvas.insertOnHTML($root)

function update() {
  myCanvas.clearCanvas()
  const pos = myCanvas.mousePosition()
  el.innerHTML = `(${pos.x},${pos.y})`;
  elements[2].setOrigin(pos.x,pos.y)
  elements.map(elem => {
    myCanvas.insertOnCanvas(elem.toJSON());
  })
}

function render(time) {
  el.innerHTML += `<br>${time}`;

  update()
  requestAnimationFrame(render)
} 

requestAnimationFrame(render)

