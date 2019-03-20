let socket = io();
var btn = document.getElementById('red');

btn.addEventListener('click', function() {
    socket.emit('red');
});


