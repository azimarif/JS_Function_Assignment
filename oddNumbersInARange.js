function oddSeries(firstNumber, lastNumber) {
  for (let number = firstNumber; number <= lastNumber; number++) {
    if (number % 2 != 0) {
      console.log(number);
    }
  }
}

let firstNumber = process.argv[2];
let lastNumber = process.argv[3];
oddSeries(firstNumber, lastNumber);