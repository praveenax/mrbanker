// data.js

// var require = function(path) {

//   // ...

//   return module.exports;
// };

var decision_tree = [
	{	
		node_id:"p1",
		node_name:"Transaction",
		child_nodes:[
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
	}
];

// return decision_tree;

exports.data = decision_tree