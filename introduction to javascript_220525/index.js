// 🔹 PROMISE CREATION & CALLING
const mahakWork = new Promise((done, fail) => {
  setTimeout(() => {
    console.log("I'm Mahak! My work is done!");
    done("Assignment ready");
  }, 3000);
});

function mayaTask() {
  const file = mahakWork;
  console.log("DATA:", mahakWork);
  console.log("Bye Maya!");
}
mayaTask();

// 🔹 PROMISE WITHOUT .then (Non-working)
function mahakAssignment() {
  setTimeout(() => {
    console.log("Mahak Finished Work");
    return "Bye"; // won't return correctly
  }, 3000);
}
function mayaTask2() {
  const task = mahakAssignment;
  console.log("Data:", task); // shows function reference
}
mayaTask2();

// 🔹 ASYNC AWAIT WORKFLOW
console.log("Class Start");

const projectByMahak = new Promise((res) => {
  setTimeout(() => {
    console.log("Mahak started project");
    res("Project Done by Mahak");
  }, 3000);
});

async function checkMahakProject() {
  console.log("Checking Attendance...");
  const result = await projectByMahak;
  console.log("Received:", result);
  console.log("Evaluating...");
}
checkMahakProject();

console.log("Lunch Break");

// 🔹 FETCH API EXAMPLE
async function getProductData() {
  try {
    const res = await fetch("https://dummyjson.com/products");
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log("Error:", err);
  }
}
getProductData();

// 🔹 CALL, APPLY, BIND
function admission(greet, fee) {
  console.log(greet + this.name + fee);
}

const student1 = { name: "Mahak" };
const student2 = { name: "Maya" };

admission.call(student1, "Hello ", "- Pay ₹2000");
admission.apply(student2, ["Hi ", "- Pay ₹5000"]);

const call1 = admission.bind(student1, "Hey ", "- 2k Fees");
const call2 = admission.bind(student2, "Hey ", "- 5k Fees");
call1();
call2();

// 🔹 CURRYING
function add(a) {
  return (b) => (c) => a + b + c;
}
console.log(add(5)(10)(15));

// Subway order with Mahesh
function chooseBread(bread) {
  return (filling) => (cheese) =>
    `Bread: ${bread}, Filling: ${filling}, Cheese: ${cheese}`;
}
console.log(chooseBread("Multigrain")("Paneer")("Yes Cheese"));

// 🔹 EVENT BUBBLING / CAPTURING
const grand = document.getElementById("grandparent");
const par = document.getElementById("parent");
const ch = document.getElementById("child");

grand.addEventListener("click", () => {
  console.log("Mahesh clicked GRANDPARENT");
}, true);

par.addEventListener("click", () => {
  console.log("Mahesh clicked PARENT");
}, true);

ch.addEventListener("click", () => {
  console.log("Mahesh clicked CHILD");
}, true);
