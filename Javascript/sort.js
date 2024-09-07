// Javascript Array sort()

// sort() method sorts the items of an array in a
// specific order

// Syntax :

// arr.sort(compareFunction);
// compareFunction : it is a f() that compares two items of an array.
// function(a, b){
//     sort logic
//     return a or b;
// }

const arr = ['a', 'Z', 'i', 'A', 'e', 'o', 'u' ];
arr.sort();
console.log(arr);

const nums = [4,1,3,61,23,8,16,40,68];
console.log(nums.sort((a,b)=> {
    return a-b;
}));

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

const sortUser = users.sort((a,b) => {
    return a.age-b.age;
}).map((user) => user.name)
console.log(sortUser);
