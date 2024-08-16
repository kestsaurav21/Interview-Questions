// These are the function which are use to define the context of this

//call - pass arguments separetly 
//apply - pass arguments as array of arguments


function getName(city1, city2, city3){
    console.log(this.fname + " " + this.lname + " has lived in " + city1 + ", "
        + city2 + " and " + city3 )

}

const cities =["delhi", "mumbai", "NYC"]

let person = {
    fname: "Saurav",
    lname: "Kestwal"
}

getName.call(person, "delhi", "mumbai", "NYC")
getName.apply(person, cities)

//bind : it return function of current function

const bindName = getName.bind(person)
bindName("delhi", "mumbai", "NYC")