/* 

Create a function called countProperties that takes an object as an argument 
and returns the number of properties (including inherited properties) that the object has.
RECURSION?

const myObj = { a: 1, b: 2, c: 3 };
console.log(countProperties(myObj)); // 3

const anotherObj = Object.create(myObj);
anotherObj.d = 4;
console.log(countProperties(anotherObj)); // 4

*/

// const myObj = { a: 1, b: 2, c: 3 };

// console.log(Object.entries(myObj))

const storesArray = [];

randomNumber = Math.round(Math.random() * 10);

for (let store = 0; store < 3; store += 1) {
    storesArray.push(Math.round(Math.random() * 10 * store+1))
}


console.log(storesArray)





























































// const product = {
//     name: "iPhone 13",
//     price: 999,
//     description: "The latest iPhone with all-new A15 Bionic chip",
//     features: {
//       screen: "6.1-inch Super Retina XDR display",
//       camera: "Dual-camera system with 12MP Ultra Wide and Wide cameras",
//       battery: "Up to 19 hours of video playback",
//     },
//   };
  
//   function countNestedProperties(obj) {
//     let count = 0;
  
//     for (let prop in obj) {
//       if (typeof obj[prop] === "object") {
//         count += countNestedProperties(obj[prop]);
//       }
//       count++;
//     }
  
//     return count;
//   }
  
//   console.log(countNestedProperties(product)); // Output: 4

