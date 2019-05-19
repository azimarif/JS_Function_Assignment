function calculateGCD(firstNumber, secondNumber) {
  let gcd = 1;
  let smallNumber = firstNumber > secondNumber ? secondNumber : firstNumber;
  for (let number = smallNumber; number >= 2; number--) {
    while (firstNumber % number == 0 && secondNumber % number == 0) {
      gcd = number;
      return gcd;
    }
  }
}

let firstNumber = process.argv[2];
let secondNumber = process.argv[3];

console.log(calculateGCD(firstNumber, secondNumber));