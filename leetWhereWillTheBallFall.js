// tomar la actual 
// si actual es 1 -> push right
// si actual es -1 -> push left

// tomar la combinación (actual, movimiento)
// 1, -1 stuck
// -1, -1 bajar
// 1, 1 bajar

// volver a repetir 

//hacerlo con cada una de las columnas
// https://www.youtube.com/watch?v=Jr0pcBwOK2E
// https://leetcode.com/problems/where-will-the-ball-fall/solutions/2233063/easy-js-solution-for-beginners/?q=beginner+JS&orderBy=most_relevant

const findBall = (grid) => {
    const m = grid.length;
    const n = grid[0].length;
    const result = [];
    
    //each ball secuence 
    for (let ball = 0; ball < n.length; ball += 1){


    }

}


console.log(findBall([[1,1,1,-1,-1],[1,1,1,-1,-1],[-1,-1,-1,1,1],[1,1,1,1,-1],[-1,-1,-1,-1,-1]]))