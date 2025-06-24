// for (var i=0; i<=10;i++){
//     setTimeout(()=>{
//        console.log(i);
//     },2000)
// }
// var abc = function xyz() 
// {
  
// }
// console.log(abc);
// console.log(xyz);



// //////////// reduce:
// const arr =[1,2,2,1,2]
// let ans =0;
// for (let i=0;i<arr.length;i++){
//     ans+=arr[i];

// }
// console.log(ans);
// const arr=[1,2,3,4,5,6];
// let max= arr.reduce(function (acc,curr){
//     return curr > acc? curr : acc;
// });
// console.log(max);



// ///////////////////object
// const mahakassignment = new Promise(function(resolve , reject){
//     setTimeout(()=>{
//         console.log("i am mahak ! my work is done !!!");
//         },5000);
// });
// console.log

// console.log("START");

// async function getProducts() {
//   try {
//     const res = await fetch("https://dummyjson.com/products");
//     const resData = await res.json();  // ✅ await and no arguments
//     console.log(resData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// getProducts();  // ✅ Don't forget to call the function

// //////////call()
// function admissionProcess(ge)




function admissionProcess(greet, fees) {
    console.log(greet + this.name + fees);
}

const student = { name: "Yateesh" };
const student2 = { name: "Anwesha" };

// Using .call() to set 'this' manually
admissionProcess(student, "Hello, ", " Your Fees: 2 Lacs");
admissionProcess(student2, "Hello, ", " Your Fees: 5 Lacs");
