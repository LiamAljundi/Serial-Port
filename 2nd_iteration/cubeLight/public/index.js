let socket = io();



// adding motion stream features 

window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
    // through this function i will able to get the value of Alpha, Gamma and Beta in the web server.
var g = document.getElementById("Gam").innerHTML = "Gamma: " + event.gamma;
var b = document.getElementById("Bet").innerHTML = "Beta: " + event.beta;
var a = document.getElementById("Alp").innerHTML = "Alpha: " + event.alpha;
if (event.gamma <-2 &&  event.gamma > - 20 && event.beta < 5 && event.beta < -5 )  {
socket.emit('lDown');
socket.emit('background', 'blue'); // this will triggered to the web server to change the background function.
// with the help of following function the background color of the mobile screen and canvas will change.
socket.on('giggle', function (data) 
    if (data == 'blue') {
        // by adding this function just the background screen of the mobile will change.
    document.body.style.backgroundColor = "blue";
    }
      });

} else if(event.gamma > 70  &&  event.gamma  < 99 && event.alpha > 120 && event.alpha < 190 ) {
    socket.emit('left');
    document.body.style.backgroundColor = "green";
    }   else if (event.gamma > 70  &&  event.gamma  < 99) {
            socket.emit('right');
            document.body.style.backgroundColor = "pink";
               if (event.beta < - 80 &&  event.beta > - 99 ) {
                socket.emit('up');
                document.body.style.backgroundColor = "red";
                } else if (event.beta > 75  &&  event.beta < 95) {
                    socket.emit('down');
                    document.body.style.backgroundColor = "yellow";
                    } else if (event.gamma < -5  &&  event.gamma > - 20 && event.beta > 165 && event.beta < 180 ) {
                        socket.emit('lup');
                        document.body.style.backgroundColor = "#A52A2A";
                        } 
}



}