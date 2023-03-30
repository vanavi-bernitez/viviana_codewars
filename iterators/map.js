// Find the Largest Numbers in a Group of Arrays
// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y

// function findLargestNums(arr) {    
//     let largestNumbers = []
//     for(let outerIndex = 0; outerIndex < arr.length; outerIndex += 1){
//         let currentLargestNumber = arr[outerIndex][0];  //initialize the reference largest number
//         for(let innerIndex = 0; innerIndex < arr[outerIndex].length; innerIndex += 1){ 
//             if(arr[outerIndex][innerIndex] > currentLargestNumber){
//                 currentLargestNumber = arr[outerIndex][innerIndex];
//             }   
//         }
//         largestNumbers.push(currentLargestNumber);     
//     } 
//     return largestNumbers;
// }

// const findLargestNums = (arr) => {
//     // const largestNumbers = arr.map((element) => {
//     //     return Math.max(...element)
//     // });
//     const largestNumbers = arr.map((element) => Math.max(...element));
//     return largestNumbers;
// }

const findLargestNums = (arr) => {
    const largestNumbers = arr.map((element) => Math.max(...element)); //destructuring inner elements from the general array. Unpack array values
    return largestNumbers;
}

console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]));



