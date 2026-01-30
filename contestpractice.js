// // Given input
// let searchQuery = " Learn JavaScript Functions Arrow IIFE ";

// // 1️⃣ Trim the input string and print cleaned value & length
// let cleanedQuery = searchQuery.trim();
// console.log("Cleaned String:", cleanedQuery);
// console.log("Length:", cleanedQuery.length);

// // 2️⃣ Convert to lowercase and uppercase
// console.log("Lowercase:", cleanedQuery.toLowerCase());
// console.log("Uppercase:", cleanedQuery.toUpperCase());

// // 3️⃣ Extract the word "JavaScript" using substring / slice
// let jsStart = cleanedQuery.indexOf("JavaScript");
// let jsWord = cleanedQuery.substring(jsStart, jsStart + 10);
// console.log("Extracted word:", jsWord);

// // 4️⃣ Check whether query contains: functions, arrow, iife
// let lowerQuery = cleanedQuery.toLowerCase();

// console.log("Contains 'functions':", lowerQuery.includes("functions"));
// console.log("Contains 'arrow':", lowerQuery.includes("arrow"));
// console.log("Contains 'iife':", lowerQuery.includes("iife"));

// // 5️⃣ Print character at index 6 and ASCII value of first character
// let charAtSix = cleanedQuery.charAt(6);
// let asciiValue = cleanedQuery.charCodeAt(0);

// console.log("Character at index 6:", charAtSix);
// console.log("ASCII of first character:", asciiValue);

// // 6️⃣ Case-insensitive check for word "javascript"
// console.log(
//   "Case-insensitive check for 'javascript':",
//   lowerQuery.includes("javascript")
// );

// let cart = ["1", "2", "3", "4", "5"];
// let promise = createOrder(cart);

// console.log(promise);

// let pr = new Promise((resolve, reject) => {
//   if (true) {
//     resolve("Order created successfully");
//   } else {    
//     reject("Order creation failed");
//   }
// });

const cart = ["shirt", "trousers", "shoes", "shades"];

createOrder(cart)
  .then(function (orderId) {
    console.log(orderId);
    return orderId;
  })
  .then(function (orderId) {
    return proceedToPayment(orderId);
  }).then((paymentInfo)=> {
        console.log(paymentInfo)
    })
  .catch(function (err) {
    console.log(err.message);
  }).then(function(){
    console.log("I will be definitely called !!")
  });

// Creation / Backend side /Promises are produced
function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    //createOrder
    //validateCart
    //return orderId

    //Fail-first approach
    if (!validateCart(cart)) {
      const err = new Error("Cart is invalid");
      reject(err);
    }

    // logic for createOrder

    const orderId = "11011";
    if (orderId) {
      setTimeout(() => resolve(orderId), 4000);
    }
  });
  return pr;
}

function proceedToPayment(orderId) {
  return new Promise(function (resolve, reject) {
    resolve("Payment Successful");
  });
}

function validateCart(cart) {
  return false;
}