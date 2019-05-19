function sumOfEvenNos(firstNumber, lastNumber) {
  let sum = 0;
  for (let number = firstNumber; number <= lastNumber; number++) {
    if (number % 2 == 0) {
      sum += number;
    }
  }
  return sum;
}

let firstNumber = process.argv[2];
let lastNumber = process.argv[3];
console.log(sumOfEvenNos(firstNumber, lastNumber));