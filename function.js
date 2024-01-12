// Functions are very beautiful in javascript they are the heart of javascript.

// -->Function Statement aka Function Description
function a(){
    let x=10;
    console.log(x);
}
a();
// -->Function Declaration 
var b=function ()
{
    console.log("b called");
}
b();
// --> Anonymous Function
// 1.function with no name
// 2.They give syntax error because a function should always have a name

// *function(){
//   console.log("anonymous");
// }

//  Anonymous function are used when fuction is assigned as value to some variable like in function declaration 

// -->Named Function Expression 
// Function Declaraation with function name is named function expression 
 var b=function xyz(){
    console.log("xyz");
 }
  xyz(); // Not allowed through a error.
  b();  //Correct way.
  
//   -->First Class Function 
//  The ability of functions to pass as argument to another function,treated as value and returned from another function is called first class function.s
