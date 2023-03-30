// // https://leetcode.com/problems/spiral-matrix/description/?envType=study-plan&id=level-2
var spiralOrder = function(matrix) {
    const spiralArray = [];
    const rowSize = matrix.length;
    const columnSize = matrix[0].length;

    let left = 0, top = 0;
    let right = columnSize - 1, bottom = rowSize - 1;

    // as items are declared in diferent scopes, so theres no problem.

    while(left <= right && top <= bottom) {
        //fill top row
        for (let item = left; item <= right; item += 1){
            spiralArray.push(matrix[top][item]);
        }
        top += 1;

        //fill right column
        for (let item = top; item <= bottom; item += 1){
            spiralArray.push(matrix[item][right]);
        } 
        right -= 1;

        //fill bottom row            && top <= bottom
        if (top <= bottom) {
            for (let item = right; item >= left /*&& top <= bottom */; item -= 1){
                spiralArray.push(matrix[bottom][item]);
            }
            bottom -= 1;
        }
        

        //fill left column in the middle    && left <= right
        for (let item = bottom; item >= top && left <= right; item-= 1){
            spiralArray.push(matrix[item][left]);
        }
        left += 1;
    }
    return spiralArray;
}

// var spiralOrder = function(matrix) {
//     const rowSize = matrix.length;
//     const columnSize = matrix[0].length;
//     const spiralArray = [];

//     for (let topRow of matrix[0]) {
//         spiralArray.push(topRow);
//     }

//     for (let rightColumn = 1; rightColumn < rowSize; rightColumn += 1){
//         spiralArray.push(matrix[rightColumn][columnSize-1]);
//     }
    
//     for (let bottomRow = columnSize-2; bottomRow >= 0; bottomRow -= 1){
//         spiralArray.push(matrix[rowSize-1][bottomRow]);      
//     }

//     for (let leftColumn = 0; leftColumn <= columnSize-2; leftColumn += 1){
//         spiralArray.push(matrix[columnSize-2][leftColumn]);
//     }

//     return spiralArray;

// };



// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// [1,2,3,6,9,8,7,4,5]
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]));
// [1,2,3,4,8,12,11,10,9,5,6,7]