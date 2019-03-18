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

/* //window.addEventListener("deviceorientation", handleOrientation, true);
function handleOrientation(event) {
  if (200 > event.alpha > 129) {
document.body.style.backgroundColor = "red";
console.log("Hello");
}
};*/

// greater than > , less than <
// uppright
/* function colorTheBackground(event){
  if (event.rot.beta < 80 && event.rot.beta > 1) {
    console.log("Hello bye");
    document.body.style.backgroundColor = "red";
  } else if (event.rot.beta > 81 && event.rot.beta < 170) {
    document.body.style.backgroundColor = "blue";
  } else if (event.rot.beta > 171 && event.rot.beta ) {
  document.body.style.backgroundColor = "green";
  } else if (event.rot.gamma < 70 && event.rot.beta < 1 && event.rot.beta < 170) {
  document.body.style.backgroundColor = "purple";
  } else if (event.rot.gamma > -70 && event.rot.beta < -1)  {
  document.body.style.backgroundColor = "yellow";
  }
}; */

//sideways
/*
 function colorTheBackground(event){
  if (event.rot.gamma > 0 && event.rot.gamma < 30 && event.rot.beta < 1 && event.rot.beta > -178) {
    document.body.style.backgroundColor = "red";
  } else if (event.rot.gamma < -60) {
    document.body.style.backgroundColor = "blue";
  } else if (event.rot.alpha > 220 && event.rot.beta < -179) {
  document.body.style.backgroundColor = "green";
  }
}; 
*/

function colorTheBackground(event){
  if (event.rot.beta > -1 && event.rot.beta < 80 ) {
    console.log("Hello bye");
    document.body.style.backgroundColor = "red";
  }
 else if(event.rot.beta > 81 && event.rot.beta <170  )
 { document.body.style.backgroundColor = "blue";}

 else if(event.rot.beta >170 && event.rot.beta < 200 )
 { document.body.style.backgroundColor = "green";}

 else if(event.rot.beta >-105 && event.rot.beta < -95 )
 { document.body.style.backgroundColor = "yellow";}
};

//rotation
/* function colorTheBackground(event){
  if (event.rot.alpha > 8 && event.rot.alpha < 45) {
    document.body.style.backgroundColor = "red";
  } else if (event.rot.alpha > 46 && event.rot.alpha < 50) {
    document.body.style.backgroundColor = "blue";
  } else if (event.rot.alpha > 329 && event.rot.alpha < 342 ) {
  document.body.style.backgroundColor = "green";
  }
};
 */

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