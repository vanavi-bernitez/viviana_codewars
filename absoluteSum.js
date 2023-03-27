// https://edabit.com/challenge/rCmEy2AQYLbRGgKyL
const getAbsSum = arr => {
    return arr.reduce((accumulator, current) => accumulator + Math.abs(current), 0); 
}

console.log(getAbsSum([2, -1, -3, 4, 8]));