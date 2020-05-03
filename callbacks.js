//anonymus function

// const manish=()=>{
//     console.log("i am anonymus");
//     }

   
// function add(x,y,callback){
//  console.log(x+y);

//  callback();
// }

// add(2,2,()=>{console.log("callback in function parameter")});

// function button(callback){
// callback(69);
// }

// button((value)=>console.log(value));


// const names=["manish","tarandeep"];

//use case of callback
// names.map((value,index)=>console.log(`${value} index is ${index}`));


//callbacks assignment
//1. forEach
//2. map function on array
//3. custom function with callback() without value
//4 . custom function with callback value
//5. component bnana aa function te class 
//6.use karne a props .


 
 function zero(a,b,c,callback){

    console.log(a+b+c);
    callback();
    }


    zero(1,2,3,()=>{console.log("this is callback")})