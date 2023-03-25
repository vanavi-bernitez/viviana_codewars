const sortByLength = arr => {
    arr.sort((first, second) => first.length - second.length);
    return arr;
}

console.log(sortByLength(["a", "ccc", "dddd", "bb"]));


    // a first element to compare
    // b second element to compare 
    // .sort() sorts in place, returns the reference to the same array but sorted