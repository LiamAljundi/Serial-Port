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
  

  if (!frozen) {
    showData(e);
      //call the function for changing background color
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


//creating background color change as an outcome of continuous phone rotation 
 function colorTheBackground(event){
  if (event.rot.alpha > 0 && event.rot.alpha < 15) {
    document.body.style.backgroundColor = "gold";}
    else if (event.rot.alpha > 15 && event.rot.alpha < 30) {
      document.body.style.backgroundColor = "orange" ;
  } else if (event.rot.alpha > 30 && event.rot.alpha < 45 ) {
  document.body.style.backgroundColor = "red";}
  else if (event.rot.alpha > 45 && event.rot.alpha < 60 ) {
    document.body.style.backgroundColor = "maroon";
  }
  else if (event.rot.alpha > 60 && event.rot.alpha < 75 ) {
    document.body.style.backgroundColor = "purple"; 
  }
  else if (event.rot.alpha > 75 && event.rot.alpha < 90 ) {
    document.body.style.backgroundColor = "navy"; 
  }
  else if (event.rot.alpha > 90 && event.rot.alpha < 105 ) {
    document.body.style.backgroundColor = "blue"; 
  }
  else if (event.rot.alpha > 105 && event.rot.alpha < 120 ) {
    document.body.style.backgroundColor = "aqua";   
  }
  else if (event.rot.alpha > 120 && event.rot.alpha < 135 ) {
    document.body.style.backgroundColor = "green";   
  }
  else if (event.rot.alpha > 135 && event.rot.alpha < 150 ) {
    document.body.style.backgroundColor = "lime";   
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