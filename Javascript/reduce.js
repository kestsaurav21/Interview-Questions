// const arr = [2, 4, 6, 1, 7]

// const sum = arr.reduce(function(acc, cur){
//     acc += cur;
//     return acc;
// }, 0);

// console.log(sum);


// const maximum = arr.reduce(function(max, cur){
//     if(cur > max){
//         max = cur
//     }
//     return max
// }, 0)

// console.log(maximum);



const users = [
    {  firstName: "saurav" , lastName: "kestwal" , age: 22 },
    {  firstName: "mayank" , lastName: "kestwal" , age: 27 },
    {  firstName: "vaibhav" , lastName: "mawari" , age: 22 },
    {  firstName: "gaurav" , lastName: "singh" , age: 25 }
]


// const output = users.map( x =>  x.firstName + " " + x.lastName)
// console.log(output);
// const output = users.reduce( function(acc, cur){
//     if(acc[cur.age]){
//         acc[cur.age] = ++acc[cur.age];
//     }
//     else{
//         acc[cur.age] = 1;
//     }

//     return acc;
// }, {})

// console.log(output);

// const output = users.filter( x => x.age > 22).map(x => x.firstName);

// console.log(output);

// reduce 
 
const output = users.reduce(function(acc, cur){
    if(cur.age > 22){
        acc.push(cur.firstName);
    }
    return acc;
}, [])

console.log(output);


