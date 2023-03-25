function isPrime (totalSum) {
    for (let item = 2; item < totalSum; item +=1) {
      if (totalSum % item === 0) {
        return false;
      }
    }
    return true;
 }

function minimumNumber(numbers) {
    let neededToBePrime = 0;
    let totalSum = 0;
    numbers.forEach(function(eachNum) {
    totalSum += eachNum;
    });

    if (isPrime(totalSum)){
        return 0;
}

    while(!isPrime(totalSum)) {
        totalSum += 1;
        neededToBePrime += 1;
      }
      return neededToBePrime;    
}

console.log(minimumNumber([3,1,2]));
