// server.js

var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(express.static('client'));

app.get('/', function (req, res) {

    res.sendfile('client/banker.html');

});

app.get('/chatMsg', function (req, res) {
    //res.send('Hello World!');
    var q = req["query"]["q"];

    // res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    // var val = compareQuestion(q);
     // res.send("Hi" + val);
    res.send("Hi");
    // var dataSpl = speak.classify("What is your name?");

    //console.log(req);
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