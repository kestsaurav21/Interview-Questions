const cart = ["kurta", "tshirt", "shoe", "pant"];

// const promise = createOrder(cart); //OrderId


const promise = createOrder(cart);

promise.then(function(orderId){
    console.log(orderId);
})
.catch(function(err){
    console.log(err.message);
})


//Create Promise
function createOrder(cart){

    const pr = new Promise(function(resolve, reject){


        if(!validateCart()){
            const err = new Error("Not a valid cart")
            reject(err)
        }
        const orderId = "123132";

        if(orderId){
            resolve(orderId)
        }
    })

    return pr;
    
}

function validateCart(cart){
    return false;
}


