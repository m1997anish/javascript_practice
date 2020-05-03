//async programming.

function doSomething(){
return new Promise((resolve,reject)=>setTimeout(()=>resolve("promise is resolved"),3000));
}

//used in fetch api.
//fetch().then((value)=>value.json()).then((jsonValue)=>{console.log()})

//  console.log("halka kam");

async function displaySomething(){
 const result= await doSomething();
 console.log(result);
 console.log("halka kam"); 

}

displaySomething();