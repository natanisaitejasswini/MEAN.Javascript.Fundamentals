//  Example 1
var hello = "interesting";
function example() {
  var hello = "hi!"; 
  console.log(hello); //hi
}
example();
console.log(hello); //interesting
console.log('*********')

// Answer 
var hello;
function example(){
	var hello;
	hello = "hi!"; 
	console.log(hello); //hi
}
hello = "interesting";
example();
console.log(hello); //interesting
console.log('++++++++++++')

/////////////////////////////////////////////////////////////////////

// Problem1
console.log(first_variable); //undefined
var first_variable = "Yipee I was first!";
function firstFunc() {
  first_variable = "Not anymore!!!";
  console.log(first_variable) //Yipee I was first!
}
console.log(first_variable);
console.log('*********')

// Answer
var first_variable;
function firstFunc() {
	var first_variable;
  	first_variable = "Not anymore!!!";
  	console.log(first_variable);
}
console.log(first_variable); //"undefined"
first_variable = "Yipee I was first!";
console.log(first_variable); //"Yipee I was first!"
console.log('++++++++++++')

/////////////////////////////////////////////////////////////////////

// Problem2
var food = "Chicken";
function eat() {
  food = "half-chicken";
  console.log(food);
  var food = "gone";       // CAREFUL!
  console.log(food);
}
eat();
console.log(food);
console.log('*********')

// Answer
var food;
function eat(){
	var food;
	food = "half-chicken";
	console.log(food); //half-chicken
	var food;
	food = "gone";
	console.log(food); //gone
}
eat();
food = "Chicken";
console.log(food); //chicken
console.log('++++++++++++')

//////////////////////////////////////////////////////////

//Problem3
var new_word = "NEW!";
function lastFunc() {
  new_word = "old";
}
console.log(new_word); //NEW!
console.log('*********')

// Answer
var new_word
function lastFunc() {
  var new_word;
  new_word = "old";
}
new_word = "NEW!";
console.log(new_word); //NEW!
console.log('++++++++++++')













