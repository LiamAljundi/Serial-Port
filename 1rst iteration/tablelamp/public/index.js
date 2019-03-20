let socket = io();
var btn = document.getElementById('red');
var btn2 = document.getElementById('green');


btn.addEventListener('click', function() {
    socket.emit('red');
});

btn2.addEventListener('click', function() {
    socket.emit('green'); 
});


