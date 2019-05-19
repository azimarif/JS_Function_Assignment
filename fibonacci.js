function fibonacciSeries(numberOfTerms) {
  let firstNumber = 0;
  let secondNumber = 1;
  let nextNumber = 0;
  if (numberOfTerms <= 1) {
    console.log(firstNumber);
  }
  if (numberOfTerms <= 2) {
    console.log(secondNumber);
  }
  for (let fiboCounter = 2; i < numberOfTerms; fiboCounter++) {
    nextNumber = firstNumber + secondNumber;
    console.log(nextNumber);
    firstNumber = secondNumber;
    secondNumber = nextNumber;
  }
}

let numberOfTerms = process.argv[2];
fibonacciSeries(numberOfTerms);