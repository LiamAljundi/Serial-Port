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
        
        //function to style buttons when all light are off
        function controlLightOff(){
          document.getElementById("light4").style.backgroundColor = "#383838"; 
          document.getElementById("light3").style.backgroundColor = "#383838"; 
          document.getElementById("light2").style.backgroundColor = "#383838"; 
          document.getElementById("light1").style.backgroundColor = "#383838";

          document.getElementById("light1").style.color = "White";
          document.getElementById("light2").style.color = "White"; 
          document.getElementById("light3").style.color = "White"; 
          document.getElementById("light4").style.color = "White"; 
        };

        //function to style buttons when ambient lights are off
        function ambientOff(){
          document.getElementById("light3").style.backgroundColor = "#383838"; 
          document.getElementById("light2").style.backgroundColor = "#383838"; 
          document.getElementById("light1").style.backgroundColor = "#383838";

          document.getElementById("light1").style.color = "White";
          document.getElementById("light2").style.color = "White"; 
          document.getElementById("light3").style.color = "White"; 
        };
         
        //when ambient1 is on
        function controlLight1(){
          document.getElementById("light1").style.backgroundColor = "#fdd72e"; 
          document.getElementById("light1").style.color = "black"; 
        };

        //when ambient2 is on
        function controlLight2(){
          document.getElementById("light2").style.backgroundColor = "#fdd72e"; 
          document.getElementById("light2").style.color = "black"; 
        };

        //when ambient3 is on
        function controlLight3(){
          document.getElementById("light3").style.backgroundColor = "#fdd72e"; 
          document.getElementById("light3").style.color = "black"; 
        };

        //when focused is on
        function controlLight4(){
          document.getElementById("light4").style.backgroundColor = "#fdd72e"; 
          document.getElementById("light4").style.color = "black"; 
        };

        // communication with Arduino: get data values from the potentiometer 
        var d = evt.data.trim();

        //when the value send by Arduino matches, turn ambient1 on
        if(d > 350 && d <550){
          controlLight1();
        }
        //if it matches, turn ambient1 and ambient2 on
        else if(d > 550 && d <750){
          controlLight2();
          controlLight1();
        } 
        //if it matches, turn ambient1, ambient2 and ambient3 on
        else if(d > 750 && d <950){
          controlLight3();
          controlLight2();
          controlLight1();
        }
        //if it matches, turn focused on and all ambients off
        else if(d > 950 && d <1024){
          controlLight4();
          ambientOff();

        }
        //if the value is less than 350, turn all off
        else{
          controlLightOff();
        }
        

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

  //Buttons to control the light 
  function lightOff() {
    document.getElementsById('sendtoSerial').value = '0';
    console.log('button pressed')
  }
  
  function light1() {
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

