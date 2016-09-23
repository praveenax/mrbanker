// script.js

$(document).ready(function () {

        	 var socket = io.connect();
			 socket.on('chat-resp', function (data) {
			 	console.log(data);
			    console.log(data["msg"]);

			    $("#sendButton").click();
                $("#chatArea").prepend("<div class='msgDiv'>"+data["msg"]+"</div>" + "<br><br>");

			    // socket.emit('my other event', { my: 'data' });
			 });

            $("#chatInput").focus();

            $("#sendButton").on("click", function () {

            	

                $("#chatArea").prepend("<div class='msgDiv' >"+$("#chatInput").val() + "</div><br><br>");
                $("#chatInput").val("");

            });

            $("#chatInput").keypress(function (event) {

                var key = event.which;
                if (key == 13) {

                	socket.emit('chat', { msg: ''+$("#chatInput").val() });
                    

                }
                //115
            });

            $("#yesBtn").on("click", function () {
                $.ajax({
                    url: "/feedback?q=yes",
                    success: function (result) {
                        console.log(result);
                       

                    }
                });
            });

            $("#noBtn").on("click", function () {
                $.ajax({
                    url: "/chatMsg?q=no",
                    success: function (result) {
                        console.log(result);
                      

                    }
                });
            });
});