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

// adding motion stream features 

window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
    console.log(event.beta)
if (event.alpha > 100 &&  event.alpha < 200) {
socket.emit('BlueON');
} else if (event.alpha > 150 &&  event.alpha < 250) {
    socket.emit('YellowON');
    } 
else if (event.alpha > 300 &&  event.alpha < 310) {
    socket.emit('RedON');
    }
    else if (event.alpha > 50 &&  event.alpha < 100) {
        socket.emit('AllOFF');
        } 
        // Passing the intensity function to the server
        else if (event.gamma > 40 &&  event.gamma < 80) {
            socket.emit('intensity');
            }
            else if (event.gamma < -30 ) {
                socket.emit('intensityFull');
                }
}






