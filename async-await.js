const promise = new Promise((resolve , reject) => {
    resolve("promise resolved");
    console.log("Promise Successfully resolved");

})

async function a() {
    const value = await promise;
    console.log(value);
    
}
a();
console.log("Mid promise");

// another way 
function asyncFunction(){
    let p = new Promise((res , reject) => {
       res("promise resolved successfully");

    })
    return p;
}

async function main(){
    let value = asyncFunction();
    console.log(value);
}

main();
