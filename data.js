// data.js


var blogs = require('./blogs');

console.log(blogs);

var decision_tree = [
	{	
		node_id:"p1",
		node_name:"Transaction",
		node_type:1,
		child_node:[
			{	
				node_id:"p1c1",
				node_name:"Security password correct "
			},
			{	
				node_id:"p1c2",
				node_name:"Security Wrong password"
			},
			
		]
	},{
		node_id:"p2",
		node_name:"Withdraw",
		node_type:1,
		child_node:[
			{	
				node_id:"p2c1",
				node_name:"Correct password"
			},
			{	
				node_id:"p1c2",
				node_name:"Wrong password"
			}
		]
			
	},{
		node_id:"p3",
		node_name:"Bank Balance",
		node_type:1,
		child_node:[
			{	
				node_id:"p3c1",
				node_name:"Correct password"
			},
			{	
				node_id:"p3c2",
				node_name:"Wrong password"
			}
			]
			
	},{
		node_id:"p4",
		node_name:"Value Added Service",
		node_type:1,
		child_node:[
			{	
				node_id:"p4c1",
				node_name:"Personal"
			},
			{	
				node_id:"p4c2",
				node_name:"Business"
			}
			]
	},{
		node_id:"p5",
		node_name:"RBS Digiprints",
		node_type:3, //3-indicates blog arr
		blog_arr:blogs["data"]
	}
];

// return decision_tree;


exports.data = decision_tree