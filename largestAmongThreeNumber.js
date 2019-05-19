function largestInThree(firstNumber, secondNumber, thirdNumber) {
  let largestNumber = firstNumber;
  if (secondNumber > largestNumber) {
    largestNumber = secondNumber;
  }
  if (thirdNumber > largestNumber) {
    largestNumber = thirdNumber;
  }
  return largestNumber;
}

let firstNumber = process.argv[2];
let secondNumber = process.argv[2];
let thirdNumber = process.argv[2];
console.log(largestInThree(firstNumber, secondNumber, thirdNumber));