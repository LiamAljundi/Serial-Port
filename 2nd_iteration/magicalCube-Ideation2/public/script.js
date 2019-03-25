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
    dimTheLight(e);
 // lightLayingDown(e);
    
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


// accel B = 2.3
//create a function 
function dimTheLight(e) {
  if (e.rotMotion.beta > 400 ) {
    console.log("hi");
    document.body.style.backgroundColor="grey";
   document.getElementById('last').style.backgroundColor="grey";

  }

/*else {
  console.log("hello");
  document.body.style.backgroundColor="black";
  document.getElementById('last').style.backgroundColor="white";

  
}*/
};

dimTheLight();

//sideways twist control of 2 different "dimming" states of the light by changing the size of the white window
 function changeLightAmount(event){
  if (event.rot.gamma > 0 && event.rot.gamma < 90) {
    document.getElementById('last').style.width = "500px"
    document.getElementById('last').style.height = "500px"
  } else if (event.rot.gamma > -90 && event.rot.gamma < 0) {
    document.getElementById('last').style.height = "600px";
    document.getElementById('last').style.width = "1200px"
  } 
}; 

//dimTheLight when the object is layed down
 /*function lightLayingDown(event){
  if (event.accel.z > 10) {
    document.body.style.backgroundColor = "Black";
    document.getElementById('last').backgroundColor = "White";
    document.getElementById('last').style.width = "200px";
    document.getElementById('last').style.height = "200px";
    console.log("bye");
  }  
 }; */
 
 

