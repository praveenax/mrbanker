// script.js


$(document).ready(function () {

	view = function(param) {
    console.log($(param).attr("nodeid"));

    var nodeId = $(param).attr("nodeid");

    emitMsg('node_event', {
                nodeId: '' + nodeId
    });

    // socket.emit('node_event', {
    //             nodeId: '' + $nodeId
    // });
	}

	
    

    $(".chat-btn").on("click", function (data) {
        console.log(data);
        view('test');
    });

    var socket = io.connect();

    emitMsg = function(event_name,event_data){
    	socket.emit(event_name, event_data);

    }

    socket.on('chat-resp', function (data) {
        console.log(data);

        var type = data["type"];

        if (type == 2) {

            var link_items = data["links"];

            var link_html_content = "";
            // $("#chatArea").prepend("<div class='link_box'>");
            link_html_content = link_html_content + "<div class='hi_msg'>" + data["msg"] + "</div><br><div class='link_box'><div class='msgDiv'>";

            for (item in link_items) {
                console.log(link_items[item]);
                // var node_id_tmp = "'"+ link_items[item]["node_id"]+"'";
                var node_id_tmp = link_items[item]["node_id"];
                var node_name_tmp = link_items[item]["node_name"];
                link_html_content = link_html_content + "<input nodeid='"+node_id_tmp+"' type='button' class='btn btn-info chat-btn'   value='" + node_name_tmp + "'  /><br>";
                // $("#chatArea").prepend("<div class='msgDiv'><a target='blank' href="+link_items[item]["url"]+">"+link_items[item]["name"]+"</div>" + "<br>");	
            }
            // $("#chatArea").prepend("</div>");
            link_html_content = link_html_content + "</div></div>";

            $("#chatArea").prepend(link_html_content);

            $('.chat-btn').removeAttr("onclick");
			$('.chat-btn').attr("onClick", "view(this)");
            
            $("#sendButton").click();
        }else if(type == 3){
        	var link_items = data["links"];

            var link_html_content = "";
            // $("#chatArea").prepend("<div class='link_box'>");
            link_html_content = link_html_content + "<div class='hi_msg'>" + data["msg"] + "</div><br><div class='link_box'><div class='msgDiv'>";

            for (item in link_items) {
                console.log(link_items[item]);

                var blog_title = link_items[item]["link_title"];
                var blog_link = link_items[item]["link"];
                var blog_img = link_items[item]["link_img"];

                // var node_id_tmp = "'"+ link_items[item]["node_id"]+"'";
                // var node_id_tmp = link_items[item]["node_id"];
                // var node_name_tmp = link_items[item]["node_name"];
                // link_html_content = link_html_content + "<input nodeid='"+node_id_tmp+"' type='button' class='btn btn-info chat-btn'   value='" + node_name_tmp + "'  /><br>";

                link_html_content = link_html_content + "<img src='"+blog_img+"' class='blog_img' width=150 height=150 /><br><h4><a target='blank' href='"+blog_link+"' >"+blog_title+"</a></h4>";
                // $("#chatArea").prepend("<div class='msgDiv'><a target='blank' href="+link_items[item]["url"]+">"+link_items[item]["name"]+"</div>" + "<br>");	
            }
            // $("#chatArea").prepend("</div>");
            link_html_content = link_html_content + "</div></div>";

            $("#chatArea").prepend(link_html_content);

            $('.chat-btn').removeAttr("onclick");
			$('.chat-btn').attr("onClick", "view(this)");
            
            $("#sendButton").click();

        } else {
            $("#chatArea").prepend("<div class='msgDiv' >" + $("#chatInput").val() + "</div><br><br>");
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

            socket.emit('chat', {
                msg: '' + $("#chatInput").val()
            });


        }
        //115
    });




});


// function view(param) {
//     console.log($(param).attr("nodeid"));

//     var nodeId = $(param).attr("nodeid");

//     emitMsg('node_event', {
//                 nodeId: '' + $nodeId
//     });

//     // socket.emit('node_event', {
//     //             nodeId: '' + $nodeId
//     // });
// }