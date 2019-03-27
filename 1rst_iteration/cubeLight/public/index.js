let socket = io();



// adding motion stream features 

window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
var g = document.getElementById("Gam").innerHTML = "Gamma: " + event.gamma;
var b = document.getElementById("Bet").innerHTML = "Beta: " + event.beta;
var a = document.getElementById("Alp").innerHTML = "Alpha: " + event.alpha;
if (event.gamma < -5 &&  event.gamma > - 35  && event.beta > 15 && event.beta < -5 )  {
socket.emit('lDown');
} else if(event.gamma < -70  &&  event.gamma   > -89) {
    socket.emit('left');
    }   else if (event.gamma > 70  &&  event.gamma  < 99) {
            socket.emit('right');
               if (event.beta < - 80 &&  event.beta > - 99 ) {
                socket.emit('up');
                } else if (event.beta > 75  &&  event.beta < 95) {
                    socket.emit('down');
                    } else if (event.gamma < -5  &&  event.gamma > - 20 && event.beta <= 180 && event.beta > 165 ) {
                        socket.emit('lup');
                        } 
}



}