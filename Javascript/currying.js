// Currying in JavaScript 
// Currying is a functional programming technique that
// involves breaking down a function that takes multiple arguments
// into a series of nested function that take one argument each.
// This creates a chain of functions where each function return another function
// until final result is acheived.


//Example: Fucntion with multiple arguments
function add(num1, num2, num3){
    return num1 + num2 + num3;
}

const result = add(5, 10, 20);
console.log(result);

// Currying Function

function addCurrying(num1){
    return function(num2){
        return function(num3){
            return num1+num2+num3;
        }
    }
}

const result1 = addCurrying(10)(10)(20);
console.log("Result with Currying: ", result1);
