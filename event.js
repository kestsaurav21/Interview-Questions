


function attachEventListeners(){
    let count =0;

    document.getElementById("clickMe")
    .addEventListener("click", function xyz(){
        console.log("Button Clicked!", ++count);
    })

}

attachEventListeners();


//Why do we need to remove Event Listener
// Event Listener are heavy it take memory
// if the call stack is empty after code execution
// it will still take the memory.

