// Difference b/w function Statement and function expression
// Answer - hoisting (they behave differenmtly )
a(); //a called
b(); // Error b is not a function

//  function Statement and Functioon declaration both are same

function a(){
    console.log("a called");
}

// function expression

var b = function(){
    console.log("b called");
}

// ------- Anonymous Function -------
// function having no name OR function without a name
//TODO: Anonymous Function are used in place where function are used as values.

var c = function(){
    //Anonymous Function
}





//Parameters vs Arguments

// function a (parameter){
//     return parameter
// }
// a(arguments)





//Named function expression

var d = function xyx(){
    //Named function expression
}


// First Classs Function: 
// a function can be passed as an argument to other functions,
// can be returned by another function and can be assigned as 
// a value to a variable
// Case 1: Passing a function as an argument

// function sayHello(){
//     return "Hello, ";
// }
// function greet(message, x){
//     console.log(message(), x);
// }
// greet(sayHello, "Javascript!"); //Hello Javascript!

//Case 2: Returning a function

function sayHello(){
    return () => {
        console.log("Hello return function");
    }
}


