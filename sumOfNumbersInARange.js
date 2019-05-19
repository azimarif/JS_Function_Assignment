function sumOfNumbers(firstNumber, lastNumber) {
  let sum = 0;
  for (let number = firstNumber; number <= lastNumber; number++) {
    sum += number;
  }
  return sum;
}

let firstNumber = process.argv[2];
let lastNumber = process.argv[3];
console.log(sumOfNumbers(firstNumber, lastNumber));