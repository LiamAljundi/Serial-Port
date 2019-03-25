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
  if (e.rotMotion.beta > 500 ) {
    console.log("hi");
    document.body.style.backgroundColor="grey";
    document.getElementById('last').style.backgroundColor="grey";
  }
};
dimTheLight();

//setting a function with an array of random colors
/*function colors() {
  let colorArray = [];

  for (let i = 0; i < 3; i++) {
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0)); // adding colors to array by random color codes
  }
  // rgb code turn to a  hex code
  let color = colorArray.map(x => x.toString(16)).join("");
  //return it in a hex form
  return `#${color}`;
} 
*/

//sideways twist control of 2 different "dimming" states of the light
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
 
