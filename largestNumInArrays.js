// https://edabit.com/challenge/h7LTMAFeNz79rXB2Y
function findLargestNums(arr) {
	// const largestNumbers = arr.map(element => {
    //     Math.max(...element);
    // } );
    // return largestNumbers;

    const largestNumbers = arr.map((element) => 
        Math.max(...element)
    );
    return largestNumbers;

    // arr.forEach((innerArray) => {
    //     innerArray.forEach((element) => {
    //       console.log(element);
    //     })
    //   });
}




console.log(findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]));




