var Benchmark = require("benchmark");
var CircularDequeue = require("../js/queue.js");

var cdQueue = new CircularDequeue();
var array = new Array();

var l = 1000;

while(--l) {
	cdQueue.push(l);
	array.push(l);
}

var suite = new Benchmark.Suite();

suite
	.add("circular-queue push", function(){
		var a = cdQueue.shift();
		var b = cdQueue.shift();
		var c = cdQueue.shift();

		cdQueue.push(a);
		cdQueue.push(b);
		cdQueue.push(c);
	})
	.add("regular array push", function(){
		var a = array.shift();
		var b = array.shift();
		var c = array.shift();

		array.push(a);
		array.push(b);
		array.push(c);
	})
	.add("circular-queue pop", function(){
		cdQueue.pop();
		cdQueue.pop();
		cdQueue.pop();
	})
	.add("regular array pop", function(){
		array.pop();
		array.pop();
		array.pop();
	})
	.add("circular-queue unshift", function(){
		var a = cdQueue.shift();
		var b = cdQueue.shift();
		var c = cdQueue.shift();

		cdQueue.unshift(a);
		cdQueue.unshift(b);
		cdQueue.unshift(c);
	})
	.add("regular array unshift", function(){
		var a = array.shift();
		var b = array.shift();
		var c = array.shift();

		array.unshift(a);
		array.unshift(b);
		array.unshift(c);
	})
	.add("circular-queue shift", function(){
		cdQueue.shift();
		cdQueue.shift();
		cdQueue.shift();
	})
	.add("regular array shift", function(){
		array.shift();
		array.shift();
		array.shift();
	})
	.on("cycle", function(e) {
		console.log("" + e.target);
	})
	.run();


