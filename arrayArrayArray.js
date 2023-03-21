function explode(x){
    let score;
    const resultantArray = [];
    if (typeof x[0] === "number" && typeof x[1] === "number") {
        score = x[0] + x[1];     
    } else if (typeof x[0] === "number") {
        score = x[0];       
    } else if (typeof x[1] === "number") {
        score = x[1];
    } else {
        return "Void!"; 
    }
    for (let index = 0; index < score; index += 1){
        resultantArray.push(x);
    }
    return resultantArray;
}

let answerExplode = explode(['a',3]);
console.log(answerExplode);