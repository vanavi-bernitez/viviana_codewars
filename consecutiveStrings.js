function longestConsec(strarr, k) {
    let longestConsecutiveWords = "";
    if (strarr.length === 0 || k > strarr.length || k <= 0) {
        return "";
    } else {
        for (let index = 0; index <= strarr.length-1; index += 1){
            let consecutiveWords = strarr.slice(index, index+k).join('');
            if (consecutiveWords.length > longestConsecutiveWords.length) {
                longestConsecutiveWords = consecutiveWords;
            }
        }
        return longestConsecutiveWords;
    } 
}

console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2));