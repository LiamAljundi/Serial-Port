var http = require('http');
var express = require('express');
var five = require('johnny-five');
var io = require('socket.io');

var board = new five.Board();
var app = express();
var PORT = 8080;
app.use(express.static(__dirname + '/public'));


board.on('ready', function () {
    var led = new five.Led(10);
    var led2 = new five.Led(11);
    var led3 = new five.Led(9);
    var button = new five.Button(4);
    
    button.on("release", function() {
       led.toggle();
       led2.toggle();
       led3.toggle();
      });

 

    var server = http.createServer(app).listen(PORT, function (req, res) {
 
    });

    io = io.listen(server);
        // server is listening to the canvas buttons.
    io.on('connection', function (socket) {
    console.log('connected..')
    
        socket.on('red', function () {
        led.toggle();

        });
        
        socket.on('green', function () {
            led2.toggle();
    
            });
            socket.on('blue', function () {
                led3.toggle();
        
                });
    // Sending data for the  intensity of light
    
            socket.on('slid', function (data) {
            led.brightness(data);
            });
   
    // turning the light on/off by the motion streams 
                socket.on('RedON', function () {
                led.on();
                });
                socket.on('YellowON', function () {
                    led2.on();
                    });
                  
                socket.on('BlueON', function () {
                    led3.on();
                    });
                    socket.on('AllOFF', function () {
                        led.off();
                        led2.off();
                        led3.off();
                        });
                  // control in intensity of lights
                  socket.on('intensity', function () {
                    led.intensity(10);
                    led2.intensity(10);
                    led3.intensity(10);
                    });
                    socket.on('intensityFull', function () {
                        led.intensity(100);
                        led2.intensity(100);
                        led3.intensity(100);
                        });
            });
});