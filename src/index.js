'use strict';

let socket = io();
let el;
el = document.getElementById('server-time');

socket.on('time', (timeString) => {
  el.innerHTML = 'Server time: ' + timeString;
});


const $root = document.querySelector('#root')

const screen =  new Screen()
screen.insertOnElement($root)

elements.map(elem => {
  screen.insertOnScreen(elem.addOnScreen());
})


