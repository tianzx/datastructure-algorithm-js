var Stack = function() {
	
	this.items = [];
	console.log("success");
	
}
Stack.prototype.push = function(element) {
	this.items.push(element);
}
Stack.prototype.pop = function(){
	return this.items.pop();
}
Stack.prototype.peek = function(){
	return this.items[length-1];
}
Stack.prototype.isEmpty = function(){
	return this.items.length ==0;
}
Stack.prototype.clear = function() {
	return this.items=[]
}
Stack.prototype.size = function() {
	return this.items.length;
}
var stack = new Stack();
stack.push(1);
stack.push(3);
stack.push(2);
stack.push(22);
stack.push(21);

console.log(stack.items);
stack.pop();
console.log(stack.items);