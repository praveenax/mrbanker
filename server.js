// server.js

var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('client'));

app.get('/', function (req, res) {

    res.sendfile('client/banker.html');

});


io.on('connection', function (socket) {
    console.log('a user connected');
    io.emit('chat', {
        msg: "TestMsg"
    });
});

var server = http.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});