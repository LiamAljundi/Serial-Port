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
    
   

 

    var server = http.createServer(app).listen(PORT, function (req, res) {
 
    });

    io = io.listen(server);

    io.on('connection', function (socket) {
    console.log('connected..')
    
        socket.on('red', function () {
        led.toggle();

        });
        
        socket.on('green', function () {
            led.toggle();
    
            });
    });
    
    
        

});