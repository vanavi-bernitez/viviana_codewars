// https://edabit.com/challenge/MCK2Rqzn78pMksvsK
const freqCount = (arr, el) => {
    const resultArray = [];
    // initial conditions to be analized
    let nestLevel = 0;
    let analyzedArray = arr;
    let elementIsArray = true; 
    while (elementIsArray === true){   
        let currentArray = analyzedArray;
        analyzedArray = [];
        let counterItem = 0;

        for (let index = 0; index < currentArray.length; index += 1){
            if (Array.isArray(currentArray[index])){
                analyzedArray = analyzedArray.concat(currentArray[index]);
                elementIsArray = true;
            } else if (currentArray[index] === el) {             
                counterItem += 1;    
                elementIsArray = false;              
            } 
        }
        resultArray.push([nestLevel, counterItem]);
        nestLevel += 1;
    }
    return resultArray;
}

// const freqCount = (arr, el) => {
//     const nestedWeight =[];
//     for (let principalElement = 0; principalElement < arr.length; principalElement += 1 ){     
//         let nestedWeightValue = 0;
//         while (typeof(arr[principalElement]) === "object"){
//             nestedWeightValue += 1;
//             for (let innerElement = 0; innerElement < arr[principalElement]; innerElement += 1){
//                 if (typeof(arr[innerElement] !== "object")) break;
//             }       
//         }
//         nestedWeight.push(nestedWeightValue);
//     }
//     return nestedWeight;
// }


console.log(freqCount([1, 5, 5, [5, [1, 2, 1, 1], 5, 5], 5, [5]], 5));
//no me está ingresando en el último nivel de anidamiento 
// [ [ 0, 3 ], [ 1, 4 ] ]
// expected output [[0, 3], [1, 4], [2, 0]]
