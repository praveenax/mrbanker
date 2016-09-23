// script.js

$(document).ready(function () {

        	 var socket = io.connect();
			 socket.on('chat-resp', function (data) {
			 	console.log(data);

			 	var type = data["type"];

			 	if(type==2){

			 		var link_items = data["links"];

			 		var link_html_content = "";
			 		// $("#chatArea").prepend("<div class='link_box'>");
			 		link_html_content = link_html_content + "<div class='hi_msg'>"+data["msg"]+"</div><br><div class='link_box'><div class='msgDiv'>";

			 		for(item in link_items){
			 			console.log(link_items[item]);
			 			link_html_content = link_html_content + "<a target='blank' href="+link_items[item]["url"]+">"+link_items[item]["name"]+"" + "<br>";
	                	// $("#chatArea").prepend("<div class='msgDiv'><a target='blank' href="+link_items[item]["url"]+">"+link_items[item]["name"]+"</div>" + "<br>");	
			 		}
			 		// $("#chatArea").prepend("</div>");
			 		link_html_content = link_html_content + "</div></div>";

			 		$("#chatArea").prepend(link_html_content);
			 		$("#sendButton").click();
			 	}else{
				 	 $("#chatArea").prepend("<div class='msgDiv' >"+$("#chatInput").val() + "</div><br><br>");
				 	 $("#sendButton").click();
			 	}
			    console.log(data["msg"]);

			    

			    // socket.emit('my other event', { my: 'data' });
			 });

            $("#chatInput").focus();

            $("#sendButton").on("click", function () {

            	

                // $("#chatArea").prepend("<div class='msgDiv' >"+$("#chatInput").val() + "</div><br><br>");
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