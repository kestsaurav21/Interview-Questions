//Async: keyword used before an function to create a async function.
//await: ==> only be used inside a async f()
//Important: It always return a promise.

//How to create a promise
const pr = new Promise((resolve, reject)=> {
    resolve("Promise resolved value!!")
})


async function getData() {

    return pr;
}

// const dataPromise = getData();

// dataPromise.then((res) => console.log(res));

// Async and await: used to handle the promises.

// how to handle promises without async and await

function handlePromiseWithoutAsync(){
    pr.then((res) => console.log(res));
    
}

handlePromiseWithoutAsync()

// With use of Async await

async function handlePromise(){
    const val = await pr;
    console.log(val);
    

}

handlePromise()
