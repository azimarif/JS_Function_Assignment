function evenInRange(firstNumber, lastNumber) {
  for (let number = firstNumber; number <= lastNumber; number++) {
    if (number % 2 == 0) {
      console.log(number);
    }
  }
}

let firstNumber = process.argc[2];
let lastNumber = process.argc[3];
evenInRange(firstNumber, lastNumber);