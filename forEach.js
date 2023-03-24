const nums = [1,5,3,4,5];
const sumArray = []; 
const numbersSum = (a,b) => a+b;
nums.forEach((element, i) => {
    if (i < nums.length-1){
        const sumResult = numbersSum(nums[i], nums[i+1]); //DIO LO MISMO :O
        // const sumResult = numbersSum(element, element+1); //NO CHERTO, ES QUE ANTES TENIA UN ARREGLO ORDENADO. ESTE NO FUNCIONA
        sumArray.push(sumResult);
        return sumArray;
    }
    return null;
})
     
console.log(sumArray);