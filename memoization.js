// Memoization: an optimization technique used to make appplication perform faster, 
// It stores the computed result in cache and retrieve the same result if needed instead 
// of calculating again. 




// Normal function
// function sum(a,b){
//     return a+b;
// }

// console.log(sum(4,3));



function sum2(){
    const obj = {};

    return function (a,b){

        console.log("obj is : ", obj);
        
        if(obj[`${a}, ${b}`]){
            console.log("already inside the cache.");
            return  obj[`${a}, ${b}`];
        }
        else{
             return obj[`${a}, ${b}`] = a+b;
        }
    }
}





const memoization = sum2();

console.log(memoization(5,3));
console.log(memoization(42,3));
console.log(memoization(5,3));

