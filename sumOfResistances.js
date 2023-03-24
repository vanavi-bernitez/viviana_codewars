// https://edabit.com/challenge/JDkyQJqNfJNhvjmRW
const seriesResistance = (arr) => {
    let totalResistance = 0;
    for (let items = 0; items < arr.length; items += 1) {
        totalResistance += arr[items];
    }
    if (totalResistance <= 1) {
        //console.log(`${totalResistance} ohm`);
        return totalResistance + ' ohm'
    } else {
        // console.log(`${totalResistance} ohms`);
        return totalResistance + ' ohms'
    }
}
console.log(seriesResistance([0.2, 0.3, 0.4]));