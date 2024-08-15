// ----- UseCases

// 1. Get name from given array of users
// 2. get back only active users
// 3. Sort users by age descending


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

// ----- 1 -------
// --- Solution 1 using map
console.log("1. name from given array of users");

const names = users.map((x) => x.name);
console.log(" Using Map ",  names)

// ----- Solution 2  using for loop
const nameArr = []
for(let i=0; i<users.length; i++){
    nameArr.push(users[i].name);
}
console.log(" Using for loop ",nameArr);


// Solution 3 using forEach

const namesArr = []
users.forEach( x => {
    namesArr.push(x.name);
});

console.log(" Using forEach ",namesArr);

// ----- 2. -------
console.log("2. get back only active users");

// Solution 1 using forEach
const active = []
users.forEach( x=> {
    if(x.isActive){
        active.push(x.name);
    }
})

console.log(" Using forEach: ",active);

// Solution 2 using filter

const activeUser = users.filter((user) => user.isActive).map((user) => user.name);

console.log(" Using Filter and map: ",activeUser);

// ----- 3. -------
console.log(" 3. Sort users by age descending");

const sortedList =
    users.sort((user1, user2) => user1.age < user2.age ? 1 : -1)
    .map((user)=> user.name);
console.log(sortedList);




