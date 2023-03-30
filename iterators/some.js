/* Convert each element of the main array to the biggest possible number 
and indicate if in the new combinations exists any number greater than 500 */

const organiceArray = (myArray) => {
    const newOrder = myArray.map((innerArray) => {
        const organicedArray =  innerArray.sort((firstNumber, secondNumber) => secondNumber - firstNumber);
        const strArray = organicedArray.join('')
        return parseInt(strArray);
    });    
    return newOrder.some((number) => number >= 500) ? 'Exist numbers greater than 500' : 'There are NO numbers greater than 500';
}

console.log(organiceArray([[1,4,5], [4,6], [1,2,1], [4,3,8,7]]));