// https://edabit.com/challenge/Twbmxzd3JwkkqAWES
const isOmnipresent = (arr, val) => {
    for (let item = 0; item < arr.length; item++) {
        if (!arr[item].includes(val)) return false  
    }
    return true; //asume that in all arrays exist. Proves otherwise

}


console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1));