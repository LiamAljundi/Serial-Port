
var http = require('http'); // effective will working in http
var express = require('express'); //  web server
var five = require('johnny-five'); // API
// this communicate between the clint site and server site and provide real time effects.
var io = require('socket.io'); 

five.Board().on("ready", function() {

    var app = express();
var PORT = 8080;
app.use(express.static(__dirname + '/public')); // our server static file is located

  // Initialize the RGB LED
  var led = new five.Led.RGB({
    pins: {
      red: 9,
      green: 10,
      blue: 11
    }
  }); 
// this is our web server
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
// this function will triggered back to the clint with one argument for changing the background. 
socket.on('background', function (data) {
  socket.broadcast.emit('background', data);
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
    led.color('red')
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