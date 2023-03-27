// https://edabit.com/challenge/7ysTEDruHz2prcJQ9
const tuckIn = (arr1, arr2) => {
    let middleIndex = Math.floor((arr1.length)/2)   //doesnt work with lenght-1. Rounded to down nearest if odd
    // for (let index=0; index < arr2.length; index += 1){
    //     arr1.splice(middleIndex+index, 0, arr2[index]);
    // }
    arr1.splice(middleIndex, 0, ...arr2);
    return arr1;
}

// const tuckIn = ([a, c], b) => [a, ...b, c]; //but if arr1 takes diff size? Doesnt work 

console.log(tuckIn([15, 150], [45, 75, 35]));