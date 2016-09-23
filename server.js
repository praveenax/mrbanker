// server.js

var express = require('express');
var app = express();

var http = require('http').Server(app);
var io = require('socket.io')(http);
var _ = require('underscore');


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
    
    properEmit = function(event_name,event_msg,event_links){
    	io.emit(event_name, {
					type:2,
			        msg: event_msg,
			        links:event_links

		});
    }


    socket.on('chat', function (data) {
    
    	var inp_chat_str = data["msg"];

    	if(inp_chat_str == "@banker"){

    		properEmit('chat-resp',"Hi. I am Mr.Banker. What can I help you with?",decision_tree["data"]);

		}else{
    		io.emit('chat-resp', {
    			type:1,
        		msg: ""+data["msg"]
    		});
    	}

    	
  	});

  	
  	 socket.on('node_event', function (data) {
    
    	var inp_chat_str = data["nodeId"];
		console.log(data);
    	console.log(inp_chat_str);
    	var tmp_arr = [];
    	var tmp_node_name = "";

    	var data_arr = decision_tree["data"];

    
    	//find unique id from the tree

    	for(item in data_arr){
    		var tmp_obj = data_arr[item];

    		if(tmp_obj["node_id"] == inp_chat_str ){
    			tmp_arr = tmp_obj["child_node"];
    			tmp_node_name = tmp_obj["node_name"];

    			break;
    		}


    	}

    	properEmit('chat-resp',"Your Choice: "+tmp_node_name,tmp_arr);

  
    	
  	});

});

var server = http.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('App listening at http://%s:%s', host, port);
});