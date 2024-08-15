// Use Cases - 2
// 1. check if user with such name exist.
// 2. Adding element to the Array. 
// 3. Remove duplicate element in the Array. 
// 4. Concatenating the Array. 

// use of : - set object, Includes(), some(), 
//    conact(), reduce(), find(), findIndex() 


const users = [
    {
        id: 1,
        name: "Vaibhav",
        isActive: true,
        age: 23
    },
    {
        id: 2,
        name: "Sachin",
        isActive: false,
        age: 22
    },
    {
        id: 4,
        name: "Roshan",
        isActive: false,
        age: 27
    },
    {
        id: 3,
        name: "Rajesh",
        isActive: true,
        age: 25
    }
]



// 1. check if user with such name exist.
// console.log("1. check if user with such name exist.");

//Basic solution

// function isNameExist(name, users) {
//     let exist = false;
//     for(let i =0; i<users.length; i++){
//         if(users[i].name === name){
//             exist = true;
//         }
//     }
//     return exist;
// } 


// const checkUser = isNameExist("Roshani", users);
// console.log(checkUser);

// better solution Level -1

// const isNameExist = (name, users) => {
//     const user = users.find((user) => user.name === name);
//     return Boolean(user);
//  }
    
// Level - 2 

// const isNameExist = (name, users) => {
//     const index = users.findIndex((user) => user.name === name);
//     console.log(index);
//     return index;
// }

// isNameExist("Rohan", users);


// 2. Adding element to the Array. 

// const arr = [1,2,3]

// const append = (arr, ele) => {

//     return [...arr, ele];

//     // arr.push(ele);
//     // return arr;
// }
// console.log(append(arr, 4));
// console.log(arr);

// let obj = {
//     id: 5,
//     name: "Ritika",
//     isActive: true,
//     age: 21
// }


// const append = (users, obj) => {
//     return [...users, obj];
// }
// console.log(append(users, obj));
// console.log(users);

// 3. Remove duplicate Element from array.


const arr = [1,3,2,5,4,6,1,3,3]

//Solution 1
// function unique(arr){
//     const uniqueElement = [] 
//     arr.forEach( x => {
//         if(!uniqueElement.includes(x)){
//             uniqueElement.push(x);
//         }
//     });

//     return uniqueElement;
// }

// const uniqueArr = unique(arr);
// console.log(uniqueArr);

// Solution 2

// function uniqueElement(arr){
//     return [...new Set(arr)]
// }

// console.log(uniqueElement(arr));
// console.log(arr);


// Solution 3 -- reduce()

function uniqueElement(arr){

    return arr.reduce((acc, cur) => {
        return acc.includes(cur) ? acc : [...acc, cur];
    }, [])
}

console.log(uniqueElement(arr));
// // console.log(arr);









