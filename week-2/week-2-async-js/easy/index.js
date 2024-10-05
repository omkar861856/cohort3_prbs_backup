let count = 0;

// setInterval(()=>{

//     count++

//     console.log(count)

// },1000)

// counter using setTimeout

// for(let i=0; i<1000; i++){

//     setTimeout(()=>{
//         count++
//         console.log(count)
//     },`${i}000`)

// }

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 

// blocking task 

function BlockingTask(n){
    const start = Date.now()
    while(Date.now() - start< `${n}000`){

    }
}

BlockingTask(4);

console.log("Task complete")









