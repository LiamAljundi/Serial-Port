let socket = io();
// Grabbing the buttons by id.
var btn = document.getElementById('red');
var btn2 = document.getElementById('green');
var btn3 = document.getElementById('blue');

// Adding event listener to the buttons and send it to the server.
btn.addEventListener('click', function() {
    socket.emit('red');
});

btn2.addEventListener('click', function() {
    socket.emit('green'); 
});
btn3.addEventListener('click', function() {
    console.log('press')
    socket.emit('blue'); 
});



