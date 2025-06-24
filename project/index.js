// const products = [
//   { id: 1, name: "Smartphone", category: "Electronics", price: 15000, purchases: 320, listings: 4, users: [ { name: "Mahak", age: 22 }, { name: "Maya", age: 28 } ] },
//   { id: 2, name: "Laptop", category: "Electronics", price: 55000, purchases: 150, listings: 6, users: [ { name: "Mahesh", age: 35 }, { name: "Maya", age: 29 } ] },
//   { id: 3, name: "Shoes", category: "Fashion", price: 2500, purchases: 420, listings: 3, users: [ { name: "Amit", age: 18 }, { name: "Mahak", age: 21 } ] },
//   { id: 4, name: "Headphones", category: "Electronics", price: 3000, purchases: 280, listings: 2, users: [ { name: "Mahesh", age: 33 } ] },
//   { id: 5, name: "T-shirt", category: "Fashion", price: 999, purchases: 500, listings: 10, users: [ { name: "Maya", age: 19 }, { name: "Ravi", age: 20 } ] },
//   { id: 6, name: "Washing Machine", category: "Appliances", price: 30000, purchases: 90, listings: 4, users: [ { name: "Mahesh", age: 40 } ] },
//   { id: 7, name: "AC", category: "Appliances", price: 35000, purchases: 110, listings: 3, users: [ { name: "Mahak", age: 32 } ] },
//   { id: 8, name: "Jeans", category: "Fashion", price: 1999, purchases: 310, listings: 6, users: [ { name: "Maya", age: 22 } ] },
//   { id: 9, name: "Fridge", category: "Appliances", price: 25000, purchases: 95, listings: 2, users: [ { name: "Mahesh", age: 38 } ] },
//   { id: 10, name: "Book", category: "Stationery", price: 399, purchases: 600, listings: 12, users: [ { name: "Maya", age: 18 }, { name: "Mahak", age: 22 } ] },
//   { id: 11, name: "Blender", category: "Appliances", price: 3500, purchases: 160, listings: 3, users: [ { name: "Mahesh", age: 36 } ] },
//   { id: 12, name: "Tablet", category: "Electronics", price: 25000, purchases: 200, listings: 4, users: [ { name: "Maya", age: 27 } ] },
//   { id: 13, name: "Jacket", category: "Fashion", price: 3999, purchases: 180, listings: 7, users: [ { name: "Mahak", age: 23 } ] },
//   { id: 14, name: "Printer", category: "Electronics", price: 8000, purchases: 90, listings: 3, users: [ { name: "Mahesh", age: 45 } ] },
//   { id: 15, name: "Watch", category: "Fashion", price: 2999, purchases: 340, listings: 5, users: [ { name: "Maya", age: 26 } ] },
//   { id: 16, name: "Notebook", category: "Stationery", price: 199, purchases: 720, listings: 10, users: [ { name: "Mahak", age: 17 } ] },
//   { id: 17, name: "Lamp", category: "Furniture", price: 1500, purchases: 140, listings: 2, users: [ { name: "Maya", age: 31 } ] },
//   { id: 18, name: "Curtains", category: "Home Decor", price: 1299, purchases: 200, listings: 4, users: [ { name: "Mahesh", age: 41 } ] },
//   { id: 19, name: "Mirror", category: "Home Decor", price: 899, purchases: 260, listings: 3, users: [ { name: "Maya", age: 30 } ] },
//   { id: 20, name: "Charger", category: "Electronics", price: 699, purchases: 410, listings: 6, users: [ { name: "Mahak", age: 24 } ] }
// ];




// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // products jo zyada bik rahe hain
// const famous = products.filter(p => p.purchases > 100);

// // jo products stock me kam hai, dikha do unko
// const kamStock = products.filter(p => p.listings < 5);

// // sabse zyada paisa kamane wala product
// const king = products.reduce((max, p) =>
//   (p.purchases * p.price) > (max.purchases * max.price) ? p : max
// );

// // sab user ke age nikal ke laa (ek list me)
// const allAges = products.flatMap(p => p.users.map(u => u.age));

// // bas naam chahiye sab products ke
// const names = products.map(p => p.name);-

// // kitna paisa kamaya total?
// const paisa = products.reduce((sum, p) => sum + (p.purchases * p.price), 0);

// // electronics wale products kisne kharide
// const elecBuyers = products
//   .filter(p => p.category === "Electronics").flatMap(p => p.users.map(u => u.name));


// // category wise kitna paisa kamaya
// const catWise = products.reduce((acc, p) => {
//   acc[p.category] = (acc[p.category] || 0) + (p.price * p.purchases);
//   return acc;
// }, {});

// // jinko 30 ke upar wale log kharidte hai
// const age30plus = products.filter(p =>
//   p.users.some(u => u.age > 30)
// );

// console.log("famous =>", famous);
// console.log("kamStock =>", kamStock);
// console.log("king =>", king.name);
// console.log("allAges =>", allAges);
// console.log("names =>", names);
// console.log("total paisa =>", paisa);
// console.log("elecBuyers =>", elecBuyers);
// console.log("catWise =>", catWise);
// console.log("age30plus =>", age30plus);



// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// cb=callback

const cart = ["Phone", "T-shirt", "Watch"];

function addToCart(cart, cb) {
  console.log(" Added to cart:", cart);
  cb();
}

function orderDetails(cb) {
  console.log(" Purchase details verified");
  cb();
}

function addAddress(cb) {
  console.log(" Address added successfully");
  cb();
}

function makePayment(cb) {
  console.log(" Payment done");
  cb();
}

function likeProduct() {
  console.log(" Product Liked");
}

//  Callbacks 
addToCart(cart, function () {
  orderDetails(function () {
    addAddress(function () {
      makePayment(function () {
        likeProduct();
      });
    });
  });
});

/////////////////////////////////////////////////////////////////////////////////////////////
// const cartItems = ["Laptop", "Shoes", "Charger"];

// function addToCart(cart) {
//   return new Promise((res, rej) => {
//     console.log("Cart added:", cart);
//     res("Cart Done");
//   });
// }

// function orderInfo(status) {
//   return new Promise((res, rej) => {
//     console.log("Purchase done ");
//     res("Purchase Done");
//   });
// }

// function addressAdd(status) {
//   return new Promise((res, rej) => {
//     console.log("Address added ");
//     res("Address Done");
//   });
// }

// function payNow(status) {
//   return new Promise((res, rej) => {
//     console.log("Payment Success ");
//     res("Paid");
//   });
// }

// function likeNow(status) {
//   console.log("Product Liked ");
// }

// //  Chaining Promises
// addToCart(cartItems)
//   .then(orderInfo)
//   .then(addressAdd)
//   .then(payNow)
//   .then(likeNow)
//   .catch((err) => console.log(" Error:", err));

///////////////////////////////////////////////////////////////////////////////////////////////////
const username = "Mahakkk-debug";  // 👈 your GitHub ID

fetch(`https://api.github.com/users/${username}`)
  .then(response => response.json())
  .then(data => {
    const content = `
      <img src="${data.avatar_url}" alt="Profile Picture" />
      <h3>${data.name}</h3>
      <p>@${data.login}</p>
      <p>Followers: ${data.followers}</p>
      <p>Following: ${data.following}</p>
      <p>${data.bio || "No bio"}</p>
    `;
    document.getElementById("profile").innerHTML = content;
  })
  .catch(error => {
    console.log("Error:", error);
  });
