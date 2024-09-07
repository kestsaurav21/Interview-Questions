// Print 1,2,3,..5 after each second 
// --> Use let
// function x(){
//     for(let i = 1; i<=5; i++){
//         setTimeout(function (){
//             console.log(i);
//         }, 1000);
//     }
// }

// x();

// --> Without let


function y(){
    for(var i = 1; i<=5; i++){
        function close(x){
            setTimeout( function (){
                console.log(x);
            }, i*1000)
        }
        close(i);
    }
}

y();