
const sourceObject = { a: 1, b: { c: 2, d: { e: 3 } } };


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


// DEEP COPY

function deepCopy(obj){
    if(obj === null || typeof obj !== 'object'){
        return obj;
    }

    if(Array.isArray(obj)){
        return obj.map(item => deepCopy(item));
    }

    const newObj = {};

    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            newObj[key] = deepCopy(obj[key]);
        }
    }

    return newObj;
}

var copyObject = deepCopy(sourceObject);

console.log(sourceObject);
console.log(copyObject);

