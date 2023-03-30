// Sum of Resistance in Series Circuits
// https://edabit.com/challenge/JDkyQJqNfJNhvjmRW

// const seriesResistance = (arr) => {
//     let totalResistance = 0;
//     for (let items = 0; items < arr.length; items += 1) {
//         totalResistance += arr[items];
//     }
//     if (totalResistance <= 1) {
//         //console.log(`${totalResistance} ohm`);
//         return totalResistance + ' ohm'
//     } else {
//         // console.log(`${totalResistance} ohms`);
//         return totalResistance + ' ohms'
//     }
// }

const seriesResistance = (arr) => {
    let totalResistance = 0;
    arr.forEach(element => totalResistance += element); //could've been .reduce() too
    return totalResistance <= 1 ? totalResistance + ' ohm' : totalResistance + ' ohms'
}

console.log(seriesResistance([0.2, 1.3, 0.4]));


