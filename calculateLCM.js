function calculateLCM(firstNumber, secondNumber) {
  let largeNumber = firstNumber > secondNumber ? firstNumber : secondNumber;
  for (let number = largeNumber; number <= firstNumber * secondNumber; number++) {
    while (number % firstNumber == 0 && number % secondNumber == 0) {
      return number;
    }
  }
}

let firstNumber = process.argv[2];
let secondNumber = process.argv[3];

console.log(calculateLCM(firstNumber, secondNumber));