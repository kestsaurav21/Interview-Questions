// Callback function
// callback function is a which passed inside another function as an argument.


//Advantage: 
// It provides Javascript the ability to perform 
// asynchronous operation in Javascript( which is a single threaded lanaguage)


// Ex:

setTimeout(()=>{
    console.log("timer");
}, 1000)


function x(y){
    console.log("x");
    y();
}


x(function y(){
    console.log("y");
})





