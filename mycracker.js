
function myFunction() {

	var i = 0;
	var node = document.createElement("LI");
  var textnode = document.createTextNode(i);
  node.appendChild(textnode);
  document.getElementById("demo").appendChild(node);
	
};

