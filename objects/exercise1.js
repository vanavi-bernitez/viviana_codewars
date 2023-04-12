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





const product = {
    name: "iPhone 13",
    price: 999,
    description: "The latest iPhone with all-new A15 Bionic chip",
    features: {
      screen: "6.1-inch Super Retina XDR display",
      camera: "Dual-camera system with 12MP Ultra Wide and Wide cameras",
      battery: "Up to 19 hours of video playback"
    },
  };


//console.log(Object.keys(product))  // doesn't work if i wanna show the nested properties too

const nestedPropertiesCount = (obj) => {
    let count = 0;

    for (let objProperty in obj) {
        if (typeof obj[objProperty] === 'object'){
            count += nestedPropertiesCount(obj[objProperty]);
        }
        // si uso else, si o si, tiene que analizar la condición del if
        // en este caso yo no necesito que el count +=1 sea el else. Este se ejecuta si o si, a pesar del if 
        count += 1;      
    }
    return count;
}

console.log(nestedPropertiesCount(product));

  
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

