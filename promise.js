// Promise is an object that represent the eventual completion of
// an asynchronous operations and its resulting value.
// Completion could be Successful or failure.


//TODO: States of Promises:- 3 states
//1. Pending : initial state which we start form
//2. fulfilled: means promise is fulfilled successfully.
//3. Rejected: promise is rejected, there was an error.


//TODO: NEED of Promises:
//  Created to avoid callback hell.

const cart = ["kurta", "tshirt", "shoe", "pant"];

createOrder(cart, function(orderId){ //orderId

    proceedToPayment(orderId, function(paymentInfo){ //paymentInfo

        showOrderSummary(); 
    });
});


const promise = createOrder(cart);

promise.then(function(orderId){
    proceedToPayment(orderId);
})





const GITHUB_API = "https://api.github.com/users/kestsaurav21";

const user = fetch(GITHUB_API);

console.log(user);

user.then(function(data){
    console.log(data);
    
})