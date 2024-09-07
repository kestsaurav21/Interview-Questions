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


// DisAdvantage: 

// 1. Callback hell
// When there is large code base , there are multiple api independent on each other
// then we end up falling in Callback hell
// -->> what happen code started growing horizontal inside of vertical.
// 2. Inversion of control
// -->> You lose the control of the code. because you gave the control of some function to another function. 

const cart = ["shoe", "pant", "kurta"];

api.createOrder(cart, function () {

    api.proceedToPaymet( function(){

        api.showOrderSummary()
    
    })
})




