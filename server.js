// server.js

var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);

var decision_tree = require('./data');

console.log(decision_tree);



app.use(express.static('client'));

app.get('/', function (req, res) {

    res.sendfile('client/banker.html');

});

app.get('/chatMsg', function (req, res) {
    
    var q = req["query"]["q"];
	res.send("Hi");
    
});


io.on('connection', function (socket) {
    console.log('a user connected');
    // io.emit('chat', {
    //     msg: "TestMsg"
    // });


    socket.on('chat', function (data) {
    	console.log(data);

    	var inp_chat_str = data["msg"];

    	if(inp_chat_str == "@banker"){
			io.emit('chat-resp', {
					type:2,
			        msg: "Hi. I am Mr.Banker. What can I help you with?",
			        // links:[{name:"Google",url:"http://www.google.com"},{name:"Facebook",url:"http://www.facebook.com"},{name:"Github",url:"http://www.github.com"}]
			        links:decision_tree["data"]

			 });
    	}else{
    		io.emit('chat-resp', {
    			type:1,
        		msg: ""+data["msg"]
    		});
    	}

    	
  	});

});

var server = http.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});