alert("hello please open developer console and select task");
function task1 (){
	var a = prompt("write first number");
	var b = prompt("write second number");
	var c = (a + b) / 2;
	if(a != b){
		console.log("average = " + c);
	}
	else {
		console.log("error");
	}	
	console.log("-=The End=-");
}
function task2 (){
	for (var i = 8; i > 0; i--) {
    	for (var j = i; j < 9; j++) {
        	document.write("* ");
    	}

    	document.write("<br/>");
	}
}
function task3 (){
	var a = prompt("write first number");
	var b = prompt("write second number");
	var c = prompt("write third number");
	var max = Math.max(a, b, c);
	alert(max);
}
function task4 (){
	var a = 9, b = 1;
	var sum = 0;
	for (var i = (a - 1); i > b; i--){
		sum +=i;
	}
	console.log(sum + "\n");
	for (var i = (a - 1); i > b; i--){
		if (i % 2 != 0){
			console.log(i);
		}
	}
}