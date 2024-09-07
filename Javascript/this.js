//this is a gloabl space

console.log(this);  //Gloabl Object
// Value of this is always Global Object--> 
//***----Window(incase of browser)------


//this inside a function

function x(){
    // Value depend on Strict / non strict mode
    console.log(this); 
    //Window --> non strict
    //undefined --> strict
}
x();

// -*** NOTE 'this' behave different in strict mode.
//NOTE--> Important
// Value of 'this' keyword inside a function is --> Undefined
// But since we have a concept of this substitution in Javascript
// Because of it the value of 'this' --> Global Object 
//IF NON STRICT MODE is used

// this in non-strict mode - (this substitution)
//** if the value of this keyword => undefined or null
//  then this will be replaced by Global Object 

// "use strict"

// function x(){
//     console.log(this);
// }
// x(); //undefined
// window.x() //window

// value inside a object's method

const obj = {
    a: 10,
    x: function () {
        console.log(this);
        
    }
}

obj.x(); // obj 