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
    });
    
    
        

});