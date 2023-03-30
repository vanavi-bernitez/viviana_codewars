// Filter out Strings from an Array
// https://edabit.com/challenge/b2NdDSdkjqFnCTfS8

// const filterArray = arr => {
//     const numbersSet = new Set(); //object that allows to store unique values of any type
//     for (let index = 0; index < arr.length; index += 1){
//         if (typeof(arr[index]) === 'number') {
//             numbersSet.add(arr[index]);
//         }
//     }
//     return Array.from(numbersSet) // creates a new array from an array like or iterable object
// }

const filterArray = arr => {
    const numbersSet = new Set(arr.filter(element => typeof element === "number"));
    return Array.from(numbersSet);  
}

console.log(filterArray([1, "a", "b", 0, 15, 1]));