let socket = io();
// Grabbing the buttons by id.
var btn = document.getElementById('red');
var btn2 = document.getElementById('green');
var btn3 = document.getElementById('blue');

// grabbing the slider.
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
    output.innerHTML = slider.value;
    slider.oninput = function() {
    output.innerHTML = this.value;
    }

// Adding event listener to the buttons and send it to the server.
btn.addEventListener('click', function() {
    socket.emit('red');
});

btn2.addEventListener('click', function() {
    socket.emit('green'); 
});
btn3.addEventListener('click', function() {
    
    socket.emit('blue'); 
});

// Adding event listener to the slider and send it to the server.

document.getElementById("myRange").addEventListener("mouseup", Slider, true);
function Slider(event) {
var SlidValue = document.getElementById("myRange").value;
socket.emit("slid", SlidValue);

}



