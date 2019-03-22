var socket = null;
var frozen = false;

if (document.readyState != 'loading') ready();
else document.addEventListener('DOMContentLoaded', ready);

function ready() {
  
  document.getElementById('last').addEventListener('click', e=> {
    frozen = !frozen;
    document.getElementById('last').classList.toggle('frozen');
  });
  
    
  initWebsocket();
}

function onData(e) {
  var accel = e.accel;
  var accelGrav = e.accelGrav;
  var rot = e.rot;
  
 // console.log("hello its Clint's code");
  if (!frozen) {
    showData(e);
    colorTheBackground(e);
  }
}


function initWebsocket() {
  const url = 'ws://' + location.host + '/ws';
  socket = new ReconnectingWebsocket(url);

  // Connection has been established
  socket.onopen = function(evt) {
    console.log('Web socket opened: ' + url);
  };

  // Received a message
  socket.onmessage = function(evt) {
    // To convert text back to an object (if it was sent with 'sendObject'):
    var o = JSON.parse(evt.data);
    onData(o);
  };
}

// > greater < smaller
//rotation
 function colorTheBackground(event){
  if (event.rot.alpha > 6 && event.rot.alpha < 12) {
    document.body.style.backgroundColor = "red";
  } else if (event.rot.alpha > 0 && event.rot.alpha < 6) {
    document.body.style.backgroundColor = "blue";
  } else if (event.rot.alpha < 360 && event.rot.alpha > 354 ) {
  document.body.style.backgroundColor = "green";
  } else if (event.rot.alpha < 353 && event.rot.alpha > 337 ) {
    document.body.style.backgroundColor = "white";
  } else if (event.rot.alpha < 336 && event.rot.alpha > 330 ) {
    document.body.style.backgroundColor = "purple";
  } else if (event.rot.alpha < 329 && event.rot.alpha > 323 ) {
    document.body.style.backgroundColor = "yellow"; 
  } else if (event.rot.alpha < 322 && event.rot.alpha > 316 ) {
    document.body.style.backgroundColor = "teal";
  }
};
 

function showData(m) {
  let html = 'accel';
  html += '<table><tr><td>' + m.accel.x.toFixed(3) + '</td><td>' + m.accel.y.toFixed(3) + '</td><td>' + m.accel.z.toFixed(3) + '</tr></table>';
  html += '</table>';
  
  html += 'rot';
  html += '<table><tr><td>' + m.rot.alpha.toFixed(3) + '</td><td>' + m.rot.beta.toFixed(3) + '</td><td>' + m.rot.gamma.toFixed(3) + '</tr></table>';
  
  html += 'rotMotion';
  html += '<table><tr><td>' + m.rotMotion.alpha.toFixed(3) + '</td><td>' + m.rotMotion.beta.toFixed(3) + '</td><td>' + m.rotMotion.gamma.toFixed(3) + '</tr></table>';
  
  html += 'accelGrav';
  html += '<table><tr><td>' + m.accelGrav.x.toFixed(3) + '</td><td>' + m.accelGrav.y.toFixed(3) + '</td><td>' + m.accelGrav.z.toFixed(3) + '</tr></table>';
  html += '</table>';
  document.getElementById('last').innerHTML = html;
}