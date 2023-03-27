const isAvgWhole = arr => {
    let sum = 0;
    let average = 0;
    arr.forEach(element => sum += element);
    // const sum = numbers.reduce((acc, curr) => acc + curr, 0); //accumulator, current value and start of accumulator
    average = sum / arr.length;
    return Number.isInteger(average);
}

console.log(isAvgWhole([3, 5, 9]));