// Make a function that can be invoked anywhere
function runningLogger(){
	console.log('I am running!');
}
runningLogger();
console.log('+++++++++++++++++');
// Make a function i.e callable
function multiplyByTen(arg){
	var result = arg * 10;
	return result;
}
console.log(multiplyByTen(5));
console.log('+++++++++++++++++');

// Write two function
function stringReturnOne(){
	var string1 = "FunctionBulider!";
	console.log(string1)
}
function stringReturnTwo(){
	var string2 = "Two Functions";
	console.log(string2)
}
stringReturnOne();
stringReturnTwo();
console.log('+++++++++++++++++');

// Function caller has one parameter which might be a function
// Write a function named caller that has one parameter.
// If the argument provided to caller is a function (typeof may be useful), 
// invoke the argument. Nothing is returned.
function caller(param){
	if(typeof param === 'function'){
		console.log(typeof(param));
	}
	// else{
	// 	return false;
	// }
}
var arg = function subcaller1(){
};
caller(arg);
caller('string');
console.log('+++++++++++++++++');

// Write function myDoubleConsole
function myDoubleConsoleLog(arg1,arg2){
	console.log(arg1);
	console.log(arg2);
	return 'hi';
}
function arg1(){
	return arg1;
}
function arg2(){
	return arg2;
}
myDoubleConsoleLog(5,2);
console.log('+++++++++++++++++');

// Write a function named caller2 that has one parameter. 
// It console.log's the string 'starting', waits 2 seconds, and then invokes the argument if the argument is a function. 
// (setTimeout may be useful for this one.) The function should then console.log ‘ending?’ and return “interesting”.  
// Invoke this function by passing it myDoubleConsoleLog.
function caller2(parameter1){
	console.log('starting');
	var X = setTimeout(function(){
		console.log(arg2());
	}, 2000)
	return caller2;
}
var arg2 = function(){
	console.log('ending');  
	return 'interesting';
} 
// caller2()
console.log(myDoubleConsoleLog(caller2(),arg2));

