// console.log(); is used to print something on the console
// It is used for debugging.
// And is only visible to the developer and not to the user.
var a = 12;
var b = 22;
var c = a + b;
console.log(c);
// alert() is used to show a pop-up message to the user.
alert("Hello Mittar");
// prompt() is used to take input from the user.
prompt("What is your name?");


//Variable and Constants are for storing data in a program.
// Variable is a container that can hold a value that can be changed later.
// Constant is a container that can hold a value that cannot be changed later.
var discount = 20;
discount = 30;
console.log(discount); // Output: 30
const discount = 20;
discount = 30;
// This will give an error because we cannot change the value of a constant.
console.log(discount); // Output: 20


// COMPILER AND INTERPRETER
//  A compiler converts the entire code into machine code at once and then executes it.
// An interpreter converts the code into machine code line by line and executes it immediately.

//JET Compiler (Just in Time Compiler)
/*JET uses both compiler and interpreter.
It uses an interpreter to start or execute the code.
And it uses the compiler power to run the code faster after it has been executed once.
*/
//It'a a compiler that converts the code into machine code before executing it.
//It's Mostly used in javaScript engines like V8(used in chrome) and SpiderMonkey(used in firefox)


//Window is a global object in JavaScript that represents the browser window.
//It provides methods and properties to interact with the browser and the user.
//Or Window is a collection tool which are provided by the browser which we can use in our javaScript code to interact with the browser and the user.
//For example, we can use the window object to show an alert message to the user.
window.alert();
//We can also use the window object to take input from the user.
window.prompt();
//We can also use the window object to get the current URL of the page.
console.log();
//they all are part of the window object which are provided by the browser.(but are provided to use in javaScript code)



