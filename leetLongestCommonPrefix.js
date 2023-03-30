// https://leetcode.com/problems/longest-common-prefix/description/?envType=study-plan&id=level-2

let longestCommonPrefix = function(strs) {
    for(let indexReferenceWord = 0; indexReferenceWord < strs[0].length; indexReferenceWord += 1) {
        for(let word of strs) {
            if(word[i] !== strs[0][i]) {
                // the longest common prefix, from 0 to upto (not including) current position
                return word.slice(0, i); 
            }
        }
    }
    return strs[0];   
};


console.log(longestCommonPrefix(["flower","flowmenco","flow"]));