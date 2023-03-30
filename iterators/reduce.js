// Absolute sum
// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL
// CHANGE REDUCE TO FOR LOOP

// const getAbsSum = arr => {
//     return arr.reduce((accumulator, current) => accumulator + Math.abs(current), 0); 
// }
// console.log(getAbsSum([2, -1, -3, 4, 8]));

const getAbsSum = arr => {
    let sumAbsolute = 0;
    for (let index = 0; index < arr.length; index += 1){
        sumAbsolute += Math.abs(arr[index]);
    }
    return sumAbsolute;  
}

console.log(getAbsSum([2, -1, -3, 4, 8]));