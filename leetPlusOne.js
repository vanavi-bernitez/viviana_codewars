// https://leetcode.com/problems/plus-one/description/
var plusOne = function(digits) {  
    for(let index = digits.length-1;index >= 0;index -= 1){  
        digits[index] += 1;     
        if(digits[index]>9) {
            digits[index]=0;  
        } else {
            return digits; //parar el for para que no aumente la cifra siguiente :)     
        }
    }
    digits.unshift(1);  //if all the elements in arrow reach 9 adds 1 to the beginning of the list
    return digits;
};

console.log(plusOne([1,9]));


