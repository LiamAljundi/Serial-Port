let socket = io();



// adding motion stream features 

window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
    console.log(event.alpha)
if (event.alpha > 83 &&  event.alpha < 86) {
socket.emit('Timer5'); //  it fire the function to the server when mobile is rotate it to above mentioned angles
} else if (event.alpha > 180 &&  event.alpha < 183) {
    socket.emit('Timer10');
    } 
else if (event.alpha > 270 &&  event.alpha < 273) {
    socket.emit('Timer15'); //it fire  when mobile is rotate it to above mentioned angles
    }
    else if (event.alpha > 20 &&  event.alpha < 25) {
        socket.emit('AllOFF');  // 
        } 
        else if (event.alpha > 100 &&  event.alpha < 105) {
            socket.emit('AllOFF');
            } 
            else if (event.alpha > 200 &&  event.alpha < 205) {
                socket.emit('AllOFF');
                } 
        // Passing to turn off function to the server
      
            else if (event.gamma < -30 ) {
                socket.emit('pull');
                }
}






