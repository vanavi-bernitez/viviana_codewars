// const changeEnough = (change, amountDue) => {
//     let totalChange = 0;
//     for(let coin of change) {
//         if(change.indexOf(coin) === 0){
//             const quarter = 0.25;
//             totalChange += coin * quarter;
//         } else if (change.indexOf(coin) === 1) {
//             const dime = 0.10;
//             totalChange += coin * dime;
//         } else if (change.indexOf(coin) === 2) {
//             const nickel = 0.05;
//             totalChange += coin * nickel;
//         } else if (change.indexOf(coin) === 3) {
//             const penny = 0.01;
//             totalChange += coin * penny;
//         }
//     }
//     return totalChange >= amountDue;	
// }

const changeEnough = (change, amountDue) => {
    const coinWeights = [0.25, 0.10, 0.05, 0.01];
    //iterate over the original array 
    const totalCoins = change.map((element, index) => element * coinWeights[index]);
    let  totalChange = totalCoins.reduce((accumulator, currentValue) => accumulator + currentValue);
    return totalChange >= amountDue;
}

console.log(changeEnough([25, 20, 5, 0], 4.25));