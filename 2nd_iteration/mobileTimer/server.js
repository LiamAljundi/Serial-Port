var http = require('http');
var express = require('express');
var five = require('johnny-five');
var io = require('socket.io');


var board = new five.Board();
var app = express();
var PORT = 8080;
app.use(express.static(__dirname + '/public'));


board.on('ready', function () {
    var led = new five.Led(2);
    var led2 = new five.Led(11);
    var led3 = new five.Led(9);
    var led4 = new five.Led(10);
 


    var server = http.createServer(app).listen(PORT, function (req, res) {
 
    });

    io = io.listen(server);
        // server is listening to the canvas buttons.
    io.on('connection', function (socket) {
    console.log('connected..')
    

    // turning the light on/off by the motion streams 
                socket.on('Timer15', function () {
                    
                    led.on();
                    setTimeout(function() { led.off(); }, 15000);
                    
                });
               socket.on('Timer10', function () {
                    
                    led2.on();
                    setTimeout(function() { led.off(); }, 10000);
                    });
             
                socket.on('Timer5', function () {
                    
                    led3.on();
                    setTimeout(function() { led2.off(); }, 5000);
                
                    });
                    socket.on('AllOFF', function () {
                        led.off();
                        led2.off();
                        led3.off();
                        });
                  // by pulling the phone it will turn on the blue light to notice
                  
                    socket.on('pull', function () {
                        led.off();
                        led2.off();
                        led3.off();
                        led4.on();
                        });
            });
});