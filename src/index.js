let socket = io();
let el;
el = document.getElementById('server-time');

socket.on('time', (timeString) => {
  el.innerHTML = 'Server time: ' + timeString;
});