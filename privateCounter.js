
// Create a private counter with closure.

function counter(){

    var count = 0;

    function add(inc){
        count += inc;
    }

    function retrive(){
        return "Counter = " + count;
    }    

    return {add, retrive}

}

const c = counter();
c.add(5)
c.add(56)
console.log(c.retrive());
