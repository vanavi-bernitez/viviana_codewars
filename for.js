const nums = [1,2,3,4,5];
const sumArray = []; 

// goes from 0 to 3. I dont need the element from index=4 in func numbersSum
const numbersSum = (a,b) => a+b;
for (let index = 0; index < nums.length-1; index += 1){
    sumArray.push(numbersSum(nums[index], nums[index+1]));
}

console.log(sumArray);