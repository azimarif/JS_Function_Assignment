function sumOfNumbers(firstNumber, lastNumber) {
  let commonDifference = 1;
  return ((lastNumber / 2) * (2 * firstNumber + (lastNumber - 1) * commonDifference));
}

let firstNumber = process.argv[2];
let lastNumber = process.argv[3];
console.log(sumOfNumbers(firstNumber, lastNumber));