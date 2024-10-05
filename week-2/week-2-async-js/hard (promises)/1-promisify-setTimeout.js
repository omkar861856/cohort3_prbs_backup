/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    const newPromise = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(
                console.log("Resolved")
            )
            
        }, `${n}000`);
    })
}

wait(3);

// solved.
