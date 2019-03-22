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
    //showData(e);
    changeLightAmount(e);
    //dimTheLight(e);
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

//sideways control of different "dimming" states of the light
 function changeLightAmount(event){
  if (event.rot.gamma > 0 && event.rot.gamma < 45) {
    document.getElementById('last').style.height = "100px";
    document.getElementById('last').style.width = "100px"
  } else if (event.rot.gamma > 45 && event.rot.gamma < 90) {
    document.getElementById('last').style.height = "300px";
    document.getElementById('last').style.width = "300px"
  } else if (event.rot.gamma > -90 && event.rot.gamma < -45) {
    document.getElementById('last').style.height = "600px";
    document.getElementById('last').style.width = "600px";
  } else if (event.rot.gamma > -45 && event.rot.gamma < 0) {
    document.getElementById('last').style.height = "600px";
    document.getElementById('last').style.width = "900px";
  }
}; 

//dimTheLight when the object is layed down
 /*function dimTheLight(event){
  if (event.rot.beta > -2 && event.rot.beta < 3) {
    document.body.style.backgroundColor = "grey";
    document.getElementById('last').backgroundColor = "grey";
  } else {
    document.body.style.backgroundColor = "black";
    document.getElementById('last').style.backgroundColor= "white";
    document.getElementById('last').style.height = "100px";
    document.getElementById('last').style.width = "100px"
  }
 }; */
 
