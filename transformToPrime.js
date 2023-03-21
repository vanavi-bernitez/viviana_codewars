function isPrime (n) {
    for (let item = 2; item < n; item +=1) {
      if (n % item === 0) {
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



minimumNumber([3,1,2]);