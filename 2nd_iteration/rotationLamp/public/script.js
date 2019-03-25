var lastMsgEl = null;
if (document.readyState != 'loading') onDocumentReady();
else document.addEventListener('DOMContentLoaded', onDocumentReady);

function handleCommand(d) {
   lastMsgEl.innerHTML =  `text: ${d.text} <br />int: ${d.integer} <br />float: ${d.float}`;
}

function onDocumentReady() {
    var socket = new ReconnectingWebsocket("ws://" + location.host + "/serial");
    var sendFormEl = document.getElementById('sendForm');
    var lastMsg = null;
    lastMsgEl = document.getElementById('lastMsg');
    socket.onmessage = function(evt) {
        // Debug: see raw received message
        //console.log(evt.data);
        
        // Parse message, assuming <Text,Int,Float>
        var d = evt.data.trim();

        if(d > 350 && d <550){
          document.getElementById("dot1").id= "newDot1";
        }else{
          document.getElementById("dot1").id= "dot1";
        };

        if(d > 550 && d <750){
          document.getElementById("dot2").id= "newDot2";
        }else{
          document.getElementById("dot2").id= "dot2";
        };
        if(d > 750 && d <950){
          document.getElementById("dot3").id= "newDot3";
        }else{
          document.getElementById("dot3").id= "dot3";
        };
        if(d > 950 && d <1023){
          document.getElementById("dot4").id= "newDot4";
        }else{
          document.getElementById("dot4").id= "dot4";
        };
        

        console.log(d) ;
        if (d.charAt(0) == '<' && d.charAt(d.length-1) == '>') {
            // Looks legit
            d = d.split(',');    
            if (d.length == 3) { // Yes, it has three components as we hoped
                handleCommand({
                    text:d[0].substr(1), 
                    integer: parseInt(d[1]), 
                    float: parseFloat(d[2].substr(0,d.length-1))
                });
                return;          
            }

        }
        
        // Doesn't seem to be formatted correctly, just display as-is
        if (evt.data != lastMsg) {
            lastMsgEl.innerText =  evt.data;
            lastMsg = evt.data;
        }
    }
    socket.onopen = function(evt) {
        console.log("Socket opened");
    }

    sendFormEl.addEventListener('submit', function(evt) {
        evt.preventDefault();
        var send = document.getElementsByClassName('sendtoSerial').value;
        socket.send(send);  
    })
}

    function lightOff() {
    document.getElementsByClassName('sendtoSerial').value = '0';
    console.log('button pressed')
  }function light1() {
    document.getElementsByClassName('sendtoSerial').value = '1';
    console.log('button pressed')
  }
  function light2() {
    document.getElementsByClassName('sendtoSerial').value = '2';
    console.log('button pressed')
  }
  function light3() {
    document.getElementsByClassName('sendtoSerial').value = '3';
    console.log('button pressed')
  }
  function light4() {
    document.getElementsByClassName('sendtoSerial').value = '4';
    console.log('button pressed')
  }

