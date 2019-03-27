
var http = require('http');
var express = require('express');
var five = require('johnny-five');
var io = require('socket.io');

five.Board().on("ready", function() {

    var app = express();
var PORT = 8080;
app.use(express.static(__dirname + '/public'));

  // Initialize the RGB LED
  var led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  }); 

  var server = http.createServer(app).listen(PORT, function (req, res) {
 
});

io = io.listen(server);
    // server is listening to the canvas buttons.
io.on('connection', function (socket) {
console.log('connected..')

socket.on('lDown', function () {
                    
    led.on();
    led.color("blue");
});
socket.on('left', function () {
                
    led.on();
    led.color('green')
});
socket.on('right', function () {
                
    led.on();
    led.color('pink')
});
socket.on('up', function () {
                
    led.on();
    led.color('#FFC0CB')
});
socket.on('down', function () {
                
  led.on();
  led.color('#FFFF00')
});
socket.on('lup', function () {
                
  led.on();
  led.color('#A52A2A')
});


});

});