function manipulate(){

    return new Promise((resolve,rejet)=>setTimeout(()=>resolve("this is a car"),2000))
}

// const promise1 = manipulate();

// promise1.then((value)=>{

//     console.log(value);
// });



 async function main(){

    const result =  await manipulate();
    console.log(result);

    console.log('this is my work');

}

main();