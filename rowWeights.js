function rowWeights(array){
    let totalWeightTeam1 = 0;
    let totalWeightTeam2 = 0;
    // si lo dejo en const teamsTotalWeight = [] va a salir undefined  
    let teamsTotalWeight = [];
    for (let item = 0; item < array.length; item += 1) {
        item % 2 === 0 ? totalWeightTeam1 += array[item] : totalWeightTeam2 += array[item];
    }
    teamsTotalWeight = [totalWeightTeam1,totalWeightTeam2];
    return teamsTotalWeight;
}

let answerRow = rowWeights([1,2,3,4]);
console.log(answerRow);