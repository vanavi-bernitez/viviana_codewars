// https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj
const canNest = (arr1, arr2) => {
    const minArr1 = Math.min(...arr1);
    const maxArr1 = Math.max(...arr1);
    const minArr2 = Math.min(...arr2);
    const maxArr2 = Math.max(...arr2);

    if (minArr1 > minArr2 && maxArr1 < maxArr2) return true;
    return false;
}

// const canNest = (arr1, arr2) => {
//     return Math.min(...arr1) > Math.min(...arr2) && Math.max(...arr1) < Math.max(...arr2);
// }

console.log(canNest([1, 2, 3, 4], [0, 6]));