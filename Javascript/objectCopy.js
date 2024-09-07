//In JS, Array copy operations creates a shallow copies.

// Object.assign creates a shallow copy
// {...} spread operator creates a shallow copy

//TODO: Shallow Copy creates do not create a copy but it share same reference
// Only first level of Object is copied.
// const sourceObject = { a: 1, b: 2 };
// const shallowCopy = Object.assign({}, sourceObject);

// console.log(shallowCopy); // { a: 1, b: 2 }


// spread operator creates a shallow copy
// const sourceObject = { a: 1, b: 2 };
// const shallowCopy = { ...sourceObject };

// console.log(shallowCopy); // { a: 1, b: 2 }

// Object.create creates shallow copy a new object based on prototype (__proto__ will hold the a:1 and b:2 in newObject - prototype chain)
// const myObject = { a: 1, b: 2 };
// const newObject = Object.create(myObject);

// console.log(newObject.a); // 1
// console.log(newObject.b); // 2

// Deep copy
// function deepCopy(obj) {
//   if (obj === null || typeof obj !== 'object') {
//     return obj;
//   }

//   if (Array.isArray(obj)) {
//     return obj.map(item => deepCopy(item));
//   }

//   const newObj = {};
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       newObj[key] = deepCopy(obj[key]);
//     }
//   }

//   return newObj;
// }





// const sourceObject = { a: 1, b: { c: 2, d: { e: 3 } } };
// const deepCopyObject = deepCopy(sourceObject);

// console.log(deepCopyObject);

//Now  you can see if we update newArr then 
const _ = require('lodash');

var obj1 = {
  name: "saurav",
  address: {
    street: "Linkin road",
    city: "faridabad"
  }
}

var obj2 = JSON.parse(JSON.stringify(obj1))
obj2.name = 'saurabh';
obj2.address.city = "delhi";

console.log(obj1);
console.log(obj2);


//issue with stringify -> 
// 1.if suppose key : value--> is function then stringify function donot accept this.
// 2. stringify takes alot of time if huge data is there

// lodash 
var obj3 = _.cloneDeep(obj1);

console.log(obj3);



