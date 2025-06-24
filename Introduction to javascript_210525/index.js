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




// function admissionProcess(greet, fees) {
//     console.log(greet + this.name + fees);
// }

// const student = { name: "Yateesh" };
// const student2 = { name: "Anwesha" };

// // Using .call() to set 'this' manually
// admissionProcess(student, "Hello, ", " Your Fees: 2 Lacs");
// admissionProcess(student2, "Hello, ", " Your Fees: 5 Lacs");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// 🔸 REDUCE EXAMPLES
// const nums = [4, 6, 2, 3, 1];

// const total = nums.reduce((a, b) => a + b, 0);
// console.log("Sum:", total);

// const max = nums.reduce((a, b) => a > b ? a : b);
// console.log("Max:", max);

// // 🔸 USERS ARRAY - MAP, FILTER, REDUCE
// const users = [
//   { first: "Pratiyush", last: "Ray", age: 25 },
//   { first: "Yateesh", last: "Gangwar", age: 19 },
//   { first: "Suraj", last: "Nagaich", age: 20 },
//   { first: "Ambika", last: "Mishra", age: 18 },
//   { first: "Tanmay", last: "Kumar", age: 22 },
// ];

// const fullNames = users.map(u => `${u.first} ${u.last}`);
// console.log("Full Names:", fullNames);

// const avgAge = users.reduce((sum, u) => sum + u.age, 0) / users.length;
// console.log("Avg Age:", avgAge);

// const minors = users.filter(u => u.age < 20).map(u => u.last);
// console.log("Below 20:", minors);

// // 🔸 PROMISE EXAMPLES
// const cart = ["shoes", "watch", "shirt"];

// function createOrder(items) {
//   return new Promise((res, rej) => {
//     items.length ? res("Order#001") : rej("Cart Empty");
//   });
// }

// function payOrder(orderId) {
//   return Promise.resolve("Paid for " + orderId);
// }

// createOrder(cart)
//   .then(payOrder)
//   .then(console.log)
//   .catch(err => console.log("Error:", err));

// //  BASIC PROMISE
// const quickPromise = new Promise((res) => res("Done"));
// quickPromise.then(() => console.log("Promise chain active"));

// //  PROMISE API METHODS
// const p1 = new Promise((_, rej) => setTimeout(() => rej("Fail 1"), 1000));
// const p2 = new Promise((_, rej) => setTimeout(() => rej("Fail 2"), 1000));
// const p3 = new Promise(res => setTimeout(() => res("Success 3"), 4000));

// Promise.any([p1, p2, p3])
//   .then(res => console.log("Any Success:", res))
//   .catch(err => console.log("All Failed:", err));

// Uncomment to test other Promise methods:
// Promise.all([p1, p2, p3]).then(console.log).catch(console.error);
// Promise.allSettled([p1, p2, p3]).then(console.log);
// Promise.race([p1, p2, p3]).then(console.log).catch(console.error);
