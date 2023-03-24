// https://leetcode.com/problems/next-greater-element-i/
var nextGreaterElement = function(nums1, nums2) {
    let nextGreaterNumber = [];
    // try refactor with forEach later
    for (let num of nums1) {
        // no es el inmediatamente siguiente 
        // let indexInNums2 = nums2.indexOf(num);
        // let flag = nums2[indexInNums2+1] > num ? nums2[indexInNums2+1] : -1;
        // nextGreaterNumber.push(flag);
        let flag = -1;
        for (let index = nums2.indexOf(num)+1;index < nums2.length;index += 1) {
            if (nums2[index] > num) {
                flag = nums2[index];
                break;
            }     
        }
        nextGreaterNumber.push(flag);    
    }
    return nextGreaterNumber;  
};
console.log(nextGreaterElement([4,1,2], [1,3,4,2]));